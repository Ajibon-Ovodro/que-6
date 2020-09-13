import { ACTION_TYPES } from "../type/type";

export const onCreate = (name) => ({ type: ACTION_TYPES.create, name });
export const onLoad = (todos) => ({ type: ACTION_TYPES.load, todos });
export const onCompleteAll = () => ({ type: ACTION_TYPES.completeAll });
export const onUpdate = (values) => ({ type: ACTION_TYPES.update, values });
export const onRemove = (id) => ({ type: ACTION_TYPES.remove, id });
export const onClearCompleted = () => ({ type: ACTION_TYPES.clearCompleted });
export const onFilterSelect = (filter) => ({
	type: ACTION_TYPES.selectFilter,
	filter,
});
