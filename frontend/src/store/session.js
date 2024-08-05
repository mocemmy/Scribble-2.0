const SET_USER = "session/SET_USER"
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_USER
})

const initialState = { user: null }

export conts authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/', {
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        const data = await response.json();
        if(data.errors){
            return;
        }
        dispatch(setUser(data))
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return { user: action.payload };
        default:
            return state;
    }
}