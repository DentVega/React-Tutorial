import {combineReducers} from "redux";
import { toggleTheme } from "./toggleTheme";

export default combineReducers({
    toggleTheme
});

export const getTheme = (state) => state.toggleTheme;
