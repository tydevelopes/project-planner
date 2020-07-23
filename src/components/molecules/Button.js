import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	color: white;
	font-size: 1.4rem;
	padding: 0.9rem 1.2rem;
	border: none;
	border-radius: 0.3rem;
	display: inline-block;
	outline: inherit;
	cursor: pointer;
	background-color: ${props => (props.primary ? "rgb(255, 112, 102)" : "transparent")};
`;

const Button = ({ name, primary, action }) => {
	return primary ? (
		<StyledButton primary onClick={action}>
			{name}
		</StyledButton>
	) : (
		<StyledButton type="button" onClick={action}>
			{name}
		</StyledButton>
	);
};

export default Button;
