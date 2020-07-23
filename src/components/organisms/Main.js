import React from "react";
import styled from "styled-components";
import ProjectItem from "../molecules/ProjectItem";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 4rem;
`;

const Main = () => {
	return (
		<Wrapper>
			<ProjectItem />
		</Wrapper>
	);
};

export default Main;
