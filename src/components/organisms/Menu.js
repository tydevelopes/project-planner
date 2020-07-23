import React from "react";
import styled from "styled-components";
import ActionContainer from "../molecules/ActionContainer";
import { Label } from "../atoms/atomicComponents";
import ProjectListItem from "../molecules/ProjectListItem";
import Projects from "../molecules/ProjectsList";

const StyledDiv = styled.div`
	display: flex;
	flex-direction: coulumn;
	padding: 4rem;
`;

const Menu = () => {
	return (
		<StyledDiv>
			<ActionContainer icon="today" label="today" />
			<ActionContainer icon="date_range" label="upcoming" />
			<Label>Current project</Label>
			<ProjectListItem />
			<Projects />
		</StyledDiv>
	);
};

export default Menu;
