import React, { Component } from "react";
import styles from "./CheckBox.module.css";

const CheckIcon = () => {
	const iStyles = `material-icons ${styles["done-default"]}`;
	return <i className={iStyles}>done</i>;
};

export default class CheckBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
		};
	}

	handleHover = e => {
		if (this.state.isClicked) {
			return;
		}
		const { priority: p } = this.props;
		e.target.classList.toggle(styles[`${p}-hover`]);
		e.target.firstElementChild.classList.toggle(styles[`${p}-done-hover`]);
	};

	handleClick = e => {
		// toggle isCliked state
		this.setState(prevState => {
			return {
				isClicked: !prevState.isClicked,
			};
		});
		const { priority: p } = this.props;
		if (e.target.tagName === "I") {
			e.target.classList.toggle(styles[`done-checked`]);
			e.target.parentElement.classList.toggle(styles[`${p}-checked`]);
		} else {
			e.target.classList.toggle(styles[`${p}-checked`]);
			e.target.firstElementChild.classList.toggle(styles[`done-checked`]);
		}
	};

	defaults = {
		p1: "p1-default",
		p2: "p2-default",
		p3: "p3-default",
		p4: "p4-default",
	};

	render() {
		let defaultBorder = this.defaults[this.props.priority];
		return (
			<div
				className={`${styles.default} ${styles[defaultBorder]}`}
				onClick={e => this.handleClick(e)}
				onMouseEnter={e => this.handleHover(e)}
				onMouseLeave={e => this.handleHover(e)}
			>
				<CheckIcon />
			</div>
		);
	}
}
