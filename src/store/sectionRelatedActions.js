export const addSectionAboveAction = item => ({
	type: "ADD_SECTION_ABOVE",
	payload: item,
});

export const addSectionBelowAction = item => ({
	type: "ADD_SECTION_BELOW",
	payload: item,
});
export const editSectionAction = item => ({
	type: "EDIT_SECTION",
	payload: item,
});
export const archiveSectionAction = item => ({
	type: "ARCHIVE_SECTION",
	payload: item,
});
export const deleteSectionAction = item => ({
	type: "DELETE_SECTION",
	payload: item,
});

export const toggleCollapsibleSectionAction = item => ({
	type: "TOGGLE_COLLAPSIBLE_SECTION",
	payload: item,
});

export const addTaskAction = item => ({
	type: "ADD_TASK",
	payload: item,
});
