export const addProjectAboveAction = item => ({
	type: "ADD_PROJECT_ABOVE",
	payload: item,
});

export const addProjectBelowAction = item => ({
	type: "ADD_PROJECT_BELOW",
	payload: item,
});
export const editProjectAction = item => ({
	type: "EDIT_PROJECT",
	payload: item,
});
export const archiveProjectAction = item => ({
	type: "ARCHIVE_PROJECT",
	payload: item,
});
export const deleteProjectAction = item => ({
	type: "DELETE_PROJECT",
	payload: item,
});
export const hideCompletedAction = item => ({
	type: "HIDE_COMPLETED",
	payload: item,
});
export const selectProjectColorAction = color => ({
	type: "SELECT_PROJECT_COLOR",
	payload: color,
});

export const addSectionAction = item => ({
	type: "ADD_SECTION",
	payload: item,
});

export const addProjectAction = item => ({
	type: "ADD_PROJECT",
	payload: item,
});

export const toggleCollapsibleProjectAction = item => ({
	type: "TOGGLE_COLLAPSIBLE_PROJECT",
	payload: item,
});
