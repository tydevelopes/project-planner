export const submitAction = item => ({
	type: "SUBMIT_FORM",
	payload: item,
});

export const cancelAction = () => ({
	type: "CANCEL_FORM_SUBMITION",
});
