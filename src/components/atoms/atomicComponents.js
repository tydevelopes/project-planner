import styled from "styled-components";

export const CircleTag = styled.span`
	display: inline-block;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 100%;
	background-color: ${props => props.color};
`;

export const Label = styled.span`
	font-size: ${props => (props.header ? "2.4rem" : props.subheader ? "1.8rem" : "1.4rem")};
	font-weight: ${props => (props.header ? "700" : props.subheader ? "500" : "400")};
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.7rem;
	border-radius: 0.5rem;
	border: 1px solid rgba(127, 127, 127, 0.4);
	font-family: inherit;
	font-size: 1.4rem;
	background-color: transparent;
	border: none;

	&:focus {
		outline: none;
	}
`;

export const ModalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	position: relative;
	width: 60%;
	height: 40%;
	background-color: rgb(31, 31, 31);
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
`;
