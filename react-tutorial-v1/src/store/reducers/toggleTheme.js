import {SET_THEME} from "../constants/actionsTypes";

const initialState = (
    {
        theme: 'default'
    }
);

export function toggleTheme(state = initialState, action) {
    switch (action.type) {
        case SET_THEME: {

        }
        default:
            return state;
    }
}
