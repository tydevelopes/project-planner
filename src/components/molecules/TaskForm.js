import React from "react";
import ActionContainer from "./ActionContainer";
import styled from "styled-components";
import { openPriorityDialogAction } from "../../store/showMoreActions";
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
	border: none;

	&:focus {
		outline: none;
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

const Wrapper = styled.div`
	border: 0.5px solid rgb(127, 127, 127);
	border-radius: 0.3rem;
	padding: 0.5rem;

	& span:first-child {
		margin-right: 0.1rem;
	}
`;

const TaskForm = ({ mode }) => {
	return (
		<Form action={submitAction}>
			<InputContainer>
				<InputWrapper>
					<Input />
				</InputWrapper>
				<SelectorWrapper>
					<Wrapper>
						<ActionContainer
							icon="fiber_manual_record"
							label={"Task path"}
							action={"allprojectsections"}
							color={"projectcolor"}
							size="1.2rem"
						/>
					</Wrapper>
					<ActionContainer icon="label_important" tooltip="more task actions" action={openPriorityDialogAction} />
				</SelectorWrapper>
			</InputContainer>
			<ButtonsWrapper>
				<Button name={mode !== "update" ? "Add Task" : "Save"} primary="primary" />
				<Button name="Cancel" action={cancelAction} />
			</ButtonsWrapper>
		</Form>
	);
};
export default TaskForm;
