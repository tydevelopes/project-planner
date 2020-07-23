export const addTaskAboveAction = item => ({
	type: "ADD_TASK_ABOVE",
	payload: item,
});

export const addTaskBelowAction = item => ({
	type: "ADD_TASK_BELOW",
	payload: item,
});
export const editTaskAction = item => ({
	type: "EDIT_TASK",
	payload: item,
});
export const archiveTaskAction = item => ({
	type: "ARCHIVE_TASK",
	payload: item,
});
export const deleteTaskAction = item => ({
	type: "DELETE_TASK",
	payload: item,
});
export const selectPriorityAction = (item, priority) => ({
	type: "SELECT_PRIORITY",
	payload: { item, priority },
});

export const toggleCollapsibleTaskAction = item => ({
	type: "TOGGLE_COLLAPSIBLE_TASK",
	payload: item,
});
