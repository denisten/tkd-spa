import history from '../../history';

export const logout = () => {
        localStorage.removeItem("token");
        history.push('/')
}