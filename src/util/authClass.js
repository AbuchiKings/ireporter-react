class Auth {
    constructor(history) {
        this.history = history;
    }

    isAuthenticated = () => {
        const expAt = JSON.parse(localStorage.getItem('expAt'));
        return new Date().getTime() < expAt;
    }
}

export default Auth;