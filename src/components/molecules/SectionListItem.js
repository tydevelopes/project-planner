import React from "react";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";
import { Label } from "../atoms/atomicComponents";
import { openSectionItemDialogAction } from "../../store/showMoreActions";
import { toggleCollapsibleSectionAction, addTaskAction } from "../../store/sectionRelatedActions";
import TaskListItem from "./TaskListItem";

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

const SectionListItem = ({ section }) => {
	return (
		<StyledListItem>
			<StyledDiv>
				<Wrapper>
					{section.collapsed ? (
						<ActionContainer icon="chevron_right" action={toggleCollapsibleSectionAction} />
					) : (
						<ActionContainer icon="expand_more" action={toggleCollapsibleSectionAction} />
					)}
					<Label>{section.name}</Label>
					<Label>{section.tasks.length}</Label>
				</Wrapper>
				<Wrapper>
					<ActionContainer icon="more_horiz" tooltip="more section actions" action={openSectionItemDialogAction} />
				</Wrapper>
			</StyledDiv>
			{section.collapsed || (
				<>
					<StyledList>
						{section.tasks.map(task => (
							<TaskListItem task={task} key={task.name} />
						))}
					</StyledList>
					<ActionContainer icon="add" label="Add task" color="rgba(255, 112, 102)" action={addTaskAction} />
				</>
			)}
		</StyledListItem>
	);
};

export default SectionListItem;
