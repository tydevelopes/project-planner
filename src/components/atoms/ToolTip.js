import React from "react";
import styled from "styled-components";

const StyledToolTip = styled.span`
	position: absolute;
	top: ${props => props.top};
	left: ${props => props.left};
	background-color: rgba(127, 127, 127, 0.4);
	color: rgb(255, 255, 255);
	border-radius: 3px;
	padding: 5px;
	font-size: 1.2rem;
`;

const ToolTip = ({ content, top, left }) => (
	<StyledToolTip top={top} left={left}>
		{content}
	</StyledToolTip>
);

export default ToolTip;
