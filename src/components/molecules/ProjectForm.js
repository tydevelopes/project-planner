import React from "react";
import ActionContainer from "./ActionContainer";
import styled from "styled-components";
import { openProjectColorDialogAction } from "../../store/showMoreActions";
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
	border: 1px solid rgba(127, 127, 127, 0.4);

	&:focus {
		outline: none;
	}
`;

export const SelectorInput = styled.div`
	padding: 0.7rem;
	border-radius: 0.5rem;
	border: 1px solid rgba(127, 127, 127, 0.4);

	.m-left {
		margin-left: 10px;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 1.8rem;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	border: 0.5px solid rgb(127, 127, 127);
	border-radius: 0.5rem;
  padding: 1.2rem;
  
  & > div:first-child {
    margin bottom: 1.2rem;
  }
`;

const SelectorWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	& span:last-child {
		margin-right: 0;
	}
`;

const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2.6rem;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 4.2rem;
`;

const Wrapper = styled.div`
	margin-bottom: 1rem;
	font-size: 1.8rem;
	font-weight: 600;
`;

const Label = styled.label`
	width: 100%;
`;

const ProjectForm = ({ mode }) => {
	return (
		<Form action={submitAction}>
			<InputContainer>
				<InputWrapper>
					<Label>
						<Wrapper>Project Name</Wrapper>
						<Input />
					</Label>
				</InputWrapper>
				<Wrapper>Project Color</Wrapper>
				<SelectorInput>
					<ActionContainer
						icon="fiber_manual_record"
						label={"Dim gray"}
						action={openProjectColorDialogAction}
						color={"dimgray"}
						size="1.2rem"
					/>
				</SelectorInput>
				<ButtonsWrapper>
					<Button name={mode !== "update" ? "Add Project" : "Save"} primary="primary" />
					<Button name="Cancel" action={cancelAction} />
				</ButtonsWrapper>
			</InputContainer>
		</Form>
	);
};
export default ProjectForm;
