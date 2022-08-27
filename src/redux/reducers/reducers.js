import { combineReducers } from "redux";
import charactersData from "./charactersReducers";

const rootReducer = combineReducers({
    charactersData: charactersData,
});

export default rootReducer;

