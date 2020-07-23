import React from "react";
import "./App.css";
import {
	CircleTag,
	Label,
	Icon,
	Input,
	SelectorInput,
	DialogueBox,
	ModalContainer,
	ModalContent,
	ToolTip,
} from "./components/atoms/atomicComponents";
import ActionContainer from "./components/molecules/ActionContainer";
import TaskForm from "./components/molecules/TaskForm";
import SelectForm from "./components/molecules/SectionForm";
import ProjectForm from "./components/molecules/ProjectForm";
import Search from "./components/molecules/Search";
import Navigation from "./components/organisms/Navigation";

function App() {
	return (
		<div className="App">
			{/* <CircleTag color="red" />
			<Label header>header</Label>
			<Label subheader>Sub header</Label>
			<Label>Normal</Label>
			<Icon className="material-icons" color="blue">
				clear
			</Icon>
			<Input />
			<SelectorInput>
				<CircleTag color="red" />
				<Label className="m-left">Normal</Label>
			</SelectorInput>
			<Button primary>Add Task</Button>
			<Button>Cancel</Button>
			<DialogueBox top="4rem" left="10rem" /> */}
			{/* <ModalContainer>
				<ModalContent></ModalContent>
			</ModalContainer> */}
			{/* <ToolTip>tooltip</ToolTip> */}
			{/* <SearchForm>
				<Icon className="material-icons" color="white">
					search
				</Icon>
				<Input />
				<Icon className="material-icons" color="white">
					clear
				</Icon>
			</SearchForm> */}
			{/* <ActionContainer icon="clear" tooltip="clear all" /> */}
			{/* <TaskForm />
			<SelectForm />
			<ProjectForm /> */}
			{/* <Search /> */}
			<Navigation />
		</div>
	);
}

export default App;
