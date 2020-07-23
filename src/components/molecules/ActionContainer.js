import React, { useState } from "react";
import ToolTip from "../atoms/ToolTip";
import styled from "styled-components";
import { Label } from "../atoms/atomicComponents";

const Wrapper = styled.div`
	position: relative;
	display: ${props => (props.hasTooltip ? "contents" : "flex")};
	width: fit-content;
	align-items: center;
	justify-content: center;
`;

const StyledIcon = styled.span`
	color: ${props => props.color || "inherit"};
	font-size: ${props => props.size || "2.2rem"};
	margin-right: 1.2rem;
`;
const ActionContainer = ({ icon, size, color, label, tooltip, action }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [top, setTop] = useState(null);
	const [height, setHeight] = useState(null);
	const [left, setLeft] = useState(null);

	const handleMouseEnter = e => {
		let dimensions = e.target.getBoundingClientRect();
		setIsHovered(true);
		setTop(dimensions.top);
		setHeight(dimensions.height);
		setLeft(dimensions.left);
		console.log(dimensions);
	};

	const handleMouseLeave = e => {
		setIsHovered(false);
	};

	return (
		<Wrapper
			hasTooltip={tooltip ? true : false}
			onClick={action}
			onMouseEnter={tooltip ? e => handleMouseEnter(e) : null}
			onMouseLeave={tooltip ? e => handleMouseLeave(e) : null}
		>
			{icon ? (
				<StyledIcon size={size} className="material-icons" color={color}>
					{icon}
				</StyledIcon>
			) : null}
			{label ? <Label>{label}</Label> : null}
			{isHovered && <ToolTip content={tooltip} top={`${top + height + 5}px`} left={`${left}px`} />}
		</Wrapper>
	);
};

export default ActionContainer;
