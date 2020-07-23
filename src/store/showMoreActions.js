// caller - the show more icon dispatching the action
// from - the element the show more icon is rendered on

export const openProjectItemDialog = (caller, from) => ({
	type: "OPEN_PROJECT_ITEM_DIALOG",
	payload: {
		callerDimensions: caller.dimensions,
		from,
	},
});
export const openProjectDetailDialogAction = (caller, from) => ({
	type: "OPEN_PROJECT_DETAIL_DIALOG",
	payload: {
		callerDimensions: caller.dimensions,
		from,
	},
});
export const openSectionItemDialogAction = (caller, from) => ({
	type: "OPEN_SECTION_ITEM_DIALOG",
	payload: {
		callerDimensions: caller.dimensions,
		from,
	},
});
export const openTaskItemDialogAction = (caller, from) => ({
	type: "OPEN_TASK_ITEM_DIALOG",
	payload: {
		callerDimensions: caller.dimensions,
		from,
	},
});
export const openPriorityDialogAction = caller => ({
	type: "OPEN_PRIORITY_DIALOG",
	payload: {
		callerDimensions: caller.dimensions,
	},
});
export const openProjectColorDialogAction = caller => ({
	type: "OPEN_PROJECT_COLOR_DIALOG",
	payload: {
		callerDimensions: caller.dimensions,
	},
});
export const closeDialogAction = () => ({
	type: "CLOSE_DIALOG",
});
