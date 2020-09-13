import { combineReducers } from "redux";
import { todosReducer } from "./reducer/todo";
import { filterReducer } from "./reducer/filter";

export default combineReducers({
	todos: todosReducer,
	filter: filterReducer,
});
