import React, { useState } from "react";
import styled from "styled-components";
import ActionContainer from "./ActionContainer";
import DialogBox from "./DialogBox";

const Input = styled.input`
	width: 100%;
	padding: 0.3rem;
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

const SearchContainer = styled.div`
	background-color: rgb(54, 54, 54);
	width: ${props => (props.isFocused ? "60rem" : "30rem")};
	display: flex;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;
	transition: all 0.5s;

	& span {
		margin: 0;
	}

	.expand {
		width: 60rem;
	}
`;

const Search = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [isSearching, setIsSearching] = useState(false);

	return (
		<>
			<SearchContainer isFocused={isFocused}>
				<ActionContainer icon="search" action={() => setIsFocused(prevState => !prevState)} />
				<Input onClick={() => setIsFocused(true)} onChange={() => setIsSearching(true)} />
				<ActionContainer icon="close" action={() => setIsFocused(false)} />
			</SearchContainer>
			{isSearching && <DialogBox />}
		</>
	);
};

export default Search;
