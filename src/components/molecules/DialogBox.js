import React, { useReducer, useEffect, useRef, useState } from "react";
import dialogReducer from "../../store/dialogReducer";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";

const StyledDialog = styled.div`
	position: absolute;
	top: ${props => props.top}px;
	left: ${props => props.left}px;
	background-color: rgb(40, 40, 40);
	padding: 1rem;
	width: 30rem;
	height: 40rem;
	border-radius: 0.5rem;
	box-shadow: 4px 2px 8px rgba(23, 23, 23, 0.4), -2px -2px 8px rgba(23, 23, 23, 0.4);
`;

const DialogBox = ({ open, caller, callerDimensions, actionList }) => {
	// const [state, dispatch] = useReducer(dialogReducer, { open: false });

	const dialogRef = useRef(null);
	const [dialogTop, setDialogTop] = useState(null);
	const [dialogLeft, setDialogLeft] = useState(null);

	useEffect(() => {
		// Calculate top and left of dialog box

		// Get dimensions of the dialog box
		const { height, width } = dialogRef.current.getBoundingClientRect();
		const margin = 10;
		const availableWidth = document.documentElement.clientWidth - callerDimensions.left;
		if (availableWidth >= width + margin) {
			setDialogLeft(callerDimensions.left);
		} else {
			setDialogLeft(document.documentElement.clientWidth - (width + margin));
		}

		const availableHeight = document.documentElement.clientHeight - callerDimensions.bottom;
		// 2 * margin for space at the top and bottom of the dialog box
		if (availableHeight >= height + 2 * margin) {
			setDialogTop(callerDimensions.bottom + margin);
		} else {
			setDialogTop(callerDimensions.top - height - margin);
		}
	}, []);

	return (
		open && (
			<StyledDialog ref={dialogRef} top={dialogTop} left={dialogLeft}>
				will edit
			</StyledDialog>
		)
	);
};

export default DialogBox;
