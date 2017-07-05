import * as React from "react";
import {HamburgerButton} from "./../../";

export class Example extends React.Component<{}, State> {

	public readonly state: State = {
		open: false
	};

	public render(): JSX.Element {
		const containerStyle: React.CSSProperties = {
			margin: 40,
			display: "flex",
			justifyContent: "center",
			position: "relative"
		};
		return (
			<div style={containerStyle}>
				<HamburgerButton
					open={this.state.open}
					onClick={this.click}
				/>
			</div>
		);
	}

	private click = () => {
		this.setState({open: !this.state.open});
	}
}

interface State {
	open?: boolean;
}
