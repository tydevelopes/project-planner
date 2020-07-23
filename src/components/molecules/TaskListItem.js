import React from "react";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";
import { Label } from "../atoms/atomicComponents";
import CheckBox from "./customCheckBox/CheckBox";
import { editTaskAction, toggleCollapsibleTaskAction } from "../../store/taskRelatedActions";
import { openTaskItemDialogAction } from "../../store/showMoreActions";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const StyledListItem = styled.li`
	display: flex;
	flex-direction: coulumn;
`;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledList = styled.ul`
	text-decoration: none;
	margin: 0;
	padding: 0;
`;

const TaskListItem = ({ task }) => {
	return (
		<StyledListItem>
			<StyledDiv>
				<Wrapper>
					{task.subtask.length ? (
						task.collapsed ? (
							<ActionContainer icon="chevron_right" action={toggleCollapsibleTaskAction} />
						) : (
							<ActionContainer icon="expand_more" action={toggleCollapsibleTaskAction} />
						)
					) : null}
					<CheckBox />
					<Label>{task.name}</Label>
					<Label>{task.subtask.length}</Label>
				</Wrapper>
				<Wrapper>
					<ActionContainer icon="edit" tooltip="edit" action={editTaskAction} />
					<ActionContainer icon="more_horiz" tooltip="more task actions" action={openTaskItemDialogAction} />
				</Wrapper>
			</StyledDiv>
			{task.subtask.length && !task.collapsed && (
				<StyledList>
					{task.subtasks.map(subtask => (
						<TaskListItem task={subtask} key={subtask.name} />
					))}
				</StyledList>
			)}
		</StyledListItem>
	);
};

export default TaskListItem;
