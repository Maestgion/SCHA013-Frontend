export const setUser = user => {
    return dispatch => {
        dispatch({
            type: "set_user",
            payload: user
        })
    }
}