import React from "react";
import ActionContainer from "./ActionContainer";
import styled from "styled-components";
import { submitAction, cancelAction } from "../../store/formRelatedActions";
import Button from "./Button";

export const Input = styled.input`
	width: 100%;
	padding: 0.7rem 0.3rem;
	border-radius: 0.5rem;
	border: 1px solid rgba(127, 127, 127, 0.4);
	font-family: inherit;
	font-size: 1.4rem;
	background-color: transparent;
	color: inherit;
	border: 0.5px solid rgb(127, 127, 127);

	&:focus {
		outline: none;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.2rem;
`;

const InputWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 0.6rem;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1.2rem;

	& button:first-child {
		margin-right: 1.2rem;
	}
`;

const SectionForm = ({ mode }) => {
	return (
		<Form action={submitAction}>
			<InputWrapper>
				<Input />
			</InputWrapper>
			<ButtonsWrapper>
				<Button name={mode !== "update" ? "Add Section" : "Save"} primary="primary" />
				<Button name="Cancel" action={cancelAction} />
			</ButtonsWrapper>
		</Form>
	);
};
export default SectionForm;
