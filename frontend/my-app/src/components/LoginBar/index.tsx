import React, { FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loadUser, logout} from '../../reducers/loginReducer'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import loginService from '../../services/loginService'
import { RootState, useAppDispatch } from '../../store'
import { LoggedInUser } from '../../types'
import loginStorage from '../../utils/loginStorage'

export const LoginBar: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector((state: RootState) => state.login.user)
    
    const dispatch = useAppDispatch()

    const history = useHistory()

    const useLogout = () => {
        loginStorage.logoutUser()
        dispatch(logout())
        showNotification("Logged out!", false)
    }

    const showNotification = (message: string, error: boolean) => {
        dispatch(addNotification({message, error}))
        setTimeout(() => dispatch(removeNotification()), 2000)
    }

    const submitLogin = async (username: string, password: string) => {
        try {
            (document.getElementById('login-username-input') as HTMLInputElement).value = "";
            (document.getElementById('login-password-input') as HTMLInputElement).value = "";
            const result = await loginService.login(username, password)
            setUsername('')
            setPassword('')
            const logUser = dispatch(loadUser(result))
            if(logUser.payload) {
                loginStorage.saveUser(logUser.payload as LoggedInUser)
            }
            showNotification(`Welcome, ${(logUser.payload as LoggedInUser).username}`, false);
        } catch (e) {
            showNotification(e.response.data, true)
            setUsername('')
            setPassword('')
        }
    }

    const submit= async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await submitLogin(username, password)
    }

    return(
        <div className="login-form">
            {!user && 
                <form onSubmit={submit} className="grid-logged-out">
                    <button className="bar start-m start-f bar-button" type="button" onClick={() => history.push('/search')}>Search videos</button>
                    <div className="bar">
                        <div className="login-form">
                            <p>You are not logged in </p>
                            <input id="login-username-input" className="text-input" placeholder="Username" value={username} onChange={({target}) => setUsername(target.value)} /> 
                            <input id="login-password-input" className="text-input" placeholder="Password"type='password' value={password} onChange={({target}) => setPassword(target.value)} />
                            <button className="add-button" type='submit'>Log in</button>
                        </div>
                    </div>
                    <button className="bar end-m end-f bar-button" type='button' onClick={() => history.push('/register')}>Register</button>
                </form>
            }

            {user &&
                <div className="grid-logged-in">
                    <p className="bar start-f full-screen-only">You are logged in as {user.username}!</p>
                    <button className="bar start start-m bar-button" onClick={() => history.push('/search')}>Search videos</button>
                    <button className="bar bar-button" onClick={() => history.push('/addVideo')}>Add a video</button>
                    <button className="bar bar-button" onClick={() => history.push(`/user/${user.id}`)}>Own page</button>
                    <button className="bar end-m end-f bar-button" type='button' onClick={useLogout}>Log out</button>
                </div>
            }   

        </div>
    )
}