export default function authReducer(state = {}, action) {
    switch (action.type) {
        case "SIGNUP_USER":
            return { ...state, ...action.user };
        default:
            return state;
    }
}