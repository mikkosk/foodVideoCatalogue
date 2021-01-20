import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNotification, removeNotification } from '../../reducers/notificationReducer'
import { setUser } from '../../reducers/userReducer'
import userService from '../../services/userService'
import { NewUser } from '../../types'

export const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [matching, setMatching] = useState(true)
    const [notEmpty, setNotEmpty] = useState(false)

    useEffect(() => {
        if(password && passwordAgain && password !== passwordAgain) {
            setNotEmpty(true)
            setMatching(false)
        } else if (!password || !passwordAgain) {
            setNotEmpty(false)
            setMatching(false)
        } else {
            setNotEmpty(true)
            setMatching(true)
        }
    }, [passwordAgain, password])

    const dispatch = useDispatch()

    const showNotification = (message: string, error: boolean) => {
        dispatch(addNotification({message, error}))
        setTimeout(() => dispatch(removeNotification()), 2000)
    }
    
    const submitRegistration = async (newUser: NewUser) => {
        const {username, password} = newUser;
        if(!username || !password) {
            showNotification("All fields must be filled", true)
            return;
        }

        try {
            const result = await userService.addUser(newUser)

            dispatch(setUser(result));

            (document.getElementById('username-input') as HTMLInputElement).value = "";
            (document.getElementById('password-input') as HTMLInputElement).value = "";
            (document.getElementById('password-again-input') as HTMLInputElement).value = "";

            setUsername("")
            setPassword("")
            setPasswordAgain("")

            showNotification("New user created! Welcome!", false)
        } catch (e) {
            showNotification(e.response.data, true)
        }
    }

    const submit= async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        submitRegistration({username, password})
    }
    
    return(
        <div className="form-background center-text top-padding bottom-padding">
            <h1> Create new user:</h1>
            <form onSubmit={submit}>
                <div className="top-margin">
                    <div>
                        <p>Username</p>
                    </div>
                    <div>
                        <input className="text-input half" id="username-input" value={username} onChange={({target}) => setUsername(target.value)} />
                    </div>
                </div>
                <div className="top-margin">
                    <div>
                        <p>Password</p>
                    </div>
                    <div>
                        <input className="text-input half" id="password-input" type='password' value={password} onChange={({target}) => setPassword(target.value)} />
                    </div>
                </div>
                <div className="top-margin">
                    <div>
                        <p>Password again</p>
                    </div>
                    <div>
                        <input className="text-input half" id="password-again-input" type='password' value={passwordAgain} onChange={({target}) => setPasswordAgain(target.value)} />
                    </div>
                </div>
                <div className="top-margin">
                    {(!matching && notEmpty) && 
                        <div>
                            <p>The passwords do not match!</p>
                        </div>
                    }
                    <div className="top-margin">
                        <button className="add-button" type='submit' disabled={!(matching && notEmpty)}>Create account!</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
