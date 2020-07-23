import React from "react";
import styled from "styled-components";
import ActionContainer from "../molecules/ActionContainer";
import Search from "../molecules/Search";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 4rem;
	background-color: #282828;

	// & > div:first-child {
	// 	margin-right: auto;
	// }
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;

	& div:last-child span {
		margin-right: 0;
	}
`;

const Navigation = () => {
	return (
		<Container>
			<Wrapper>
				<ActionContainer icon="menu" />
				<Search />
			</Wrapper>
			<Wrapper>
				<ActionContainer icon="add" />
				<ActionContainer icon="timeline" />
				<ActionContainer icon="bedtime" />
			</Wrapper>
		</Container>
	);
};

export default Navigation;
