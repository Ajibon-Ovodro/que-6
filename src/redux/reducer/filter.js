import { ACTION_TYPES } from "../type/type";
import { FILTERS } from "../type/type";

export const filterReducer = (state = FILTERS.all, action) => {
	switch (action.type) {
		case ACTION_TYPES.selectFilter:
			return action.filter;
		default:
			return state;
	}
};
