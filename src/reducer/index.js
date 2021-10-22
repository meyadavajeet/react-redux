import changeTheNumber from "./inc-desc";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber,
});

export default rootReducer;