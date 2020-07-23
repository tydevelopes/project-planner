import React from "react";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";
import { Label } from "../atoms/atomicComponents";
import { openProjectDetailDialogAction } from "../../store/showMoreActions";
import { addSectionAction } from "../../store/projectRelatedActions";
import SectionListItem from "./SectionListItem";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const ProjectContainer = styled.div`
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

const ProjectDetail = ({ project }) => {
	return (
		<ProjectContainer>
			<StyledDiv>
				<Wrapper>
					<Label>{project.name}</Label>
					<Label>{project.sections.length}</Label>
				</Wrapper>
				<Wrapper>
					<ActionContainer icon="more_horiz" tooltip="more project actions" action={openProjectDetailDialogAction} />
				</Wrapper>
			</StyledDiv>
			{
				<StyledList>
					{project.sections.map(section => (
						<SectionListItem section={section} key={section.name} />
					))}
				</StyledList>
			}
			<ActionContainer icon="add" label="Add section" color="rgba(255, 112, 102)" action={addSectionAction} />
		</ProjectContainer>
	);
};

export default ProjectDetail;
