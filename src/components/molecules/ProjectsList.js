import React from "react";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";
import { Label } from "../atoms/atomicComponents";
import { toggleCollapsibleProjectAction, addProjectAction } from "../../store/projectRelatedActions";
import ProjectListItem from "./ProjectListItem";

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

const ProjectsList = ({ projects }) => {
	return (
		<div>
			<StyledDiv>
				<Wrapper>
					{projects.collapsed ? (
						<ActionContainer icon="chevron_right" action={toggleCollapsibleProjectAction} />
					) : (
						<ActionContainer icon="expand_more" action={toggleCollapsibleProjectAction} />
					)}
					<Label>Projects</Label>
					<Label>{projects.length}</Label>
				</Wrapper>
				<Wrapper>
					<ActionContainer icon="add" action={addProjectAction} />
				</Wrapper>
			</StyledDiv>
			{projects.collapsed || (
				<>
					<StyledList>
						{ProjectsList.map(project => (
							<ProjectListItem project={project} key={project.name} />
						))}
					</StyledList>
					<ActionContainer icon="add" label="Add Project" color="rgba(255, 112, 102)" action={addProjectAction} />
				</>
			)}
		</div>
	);
};

export default ProjectsList;
