import {
	projectListItem,
	projectDetail,
	sectionListItem,
	taskListItem,
	priorityList,
	projectColorList,
} from "./dialogData";

const dialogReducer = (currentState, action) => {
	const dialog = {
		open: true,
		caller: action.payload.caller,
		from: action.payload.from,
		callerDimensions: action.payload.callerDimensions,
	};
	switch (action.type) {
		case "OPEN_PROJECT_ITEM_DIALOG":
			return {
				...dialog,
				actionList: projectListItem,
			};
		case "OPEN_PROJECT_DETAIL_DIALOG":
			return {
				...dialog,
				actionList: projectDetail,
			};
		case "OPEN_SECTION_ITEM_DIALOG":
			return {
				...dialog,
				actionList: sectionListItem,
			};
		case "OPEN_TASK_ITEM_DIALOG":
			return {
				...dialog,
				actionList: taskListItem,
			};
		case "OPEN_PRIORITY_DIALOG":
			return {
				...dialog,
				actionList: priorityList,
			};
		case "OPEN_PROJECT_COLOR_DIALOG":
			return {
				...dialog,
				actionList: projectColorList,
			};
		case "CLOSE_DIALOG":
			return { open: false };
		default:
			return currentState;
	}
};

export default dialogReducer;
