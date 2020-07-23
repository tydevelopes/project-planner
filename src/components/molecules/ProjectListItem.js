import React from "react";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";
import { Label } from "../atoms/atomicComponents";
import { openProjectItemDialog } from "../../store/showMoreActions";
import { CircleTag } from "../atoms/atomicComponents";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const StyledLi = styled.li`
	display: flex;
	justify-content: space-between;
`;

const ProjectListItem = ({ project }) => {
	return (
		<StyledLi>
			<Wrapper>
				<CircleTag color={project.color} />
				<Label>{project.name}</Label>
				<Label>{project.sections.length}</Label>
				<Label>{project.tasks.length}</Label>
			</Wrapper>
			<Wrapper>
				<ActionContainer icon="more_horiz" tooltip="more project actions" action={openProjectItemDialog} />
			</Wrapper>
		</StyledLi>
	);
};

export default ProjectListItem;
