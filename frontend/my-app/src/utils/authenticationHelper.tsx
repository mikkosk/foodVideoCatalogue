import loginStorage from "./loginStorage"

const getAuthenticationHeaders = () => {
    const user = loginStorage.loadUser()
    if(!user) {
        return {
            headers: { Authorization: `bearer FalseToken`}
        }
    }
    return {
        headers: { Authorization: `bearer ${user.token}` }
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAuthenticationHeaders
}