import * as React from "react";

export interface HamburgerButtonProps {
	open: boolean;
	width?: number;
	height?: number;
	strokeWidth?: number;
	color?: string;
	animationDuration?: number;
	onClick: () => any;
}

export class HamburgerButton extends React.PureComponent<HamburgerButtonProps, {}> {
	public render(): JSX.Element {
		const props = this.props;

		const width = props.width || 40;
		const height = props.height || 30;
		const halfHeight: number = Math.round(height / 2);
		const isOpen = props.open || false;
		const strokeWidth = props.strokeWidth || 2;
		const halfStrokeWidth = Math.round(strokeWidth / 2);
		const animationDuration = props.animationDuration || 0.4;

		const containerStyle: React.CSSProperties = {
			width,
			height,
			position: "relative"
		};
		const baseStyle = {
			display: "block",
			height: `${strokeWidth}px`,
			width: "100%",
			background: props.color || "#000",
			transitionTimingFunction: "ease",
			transitionDuration: `${animationDuration}s`,
			transformOrigin: "center",
			position: "absolute",
			marginTop: -halfStrokeWidth
		};
		const firstLineStyle = {
			transform: this.getTransformValue(isOpen, 0, "45", halfHeight),
		};
		const secondLineStyle = {
			transitionTimingFunction: "ease-out",
			transitionDuration: `${animationDuration / 4}s`,
			opacity: isOpen ? 0 : 1,
			top: halfHeight
		};
		const thirdLineStyle = {
			transform: this.getTransformValue(isOpen, height, "-45", halfHeight)
		};

		return (
			<div style={containerStyle} onClick={props.onClick}>
				<span style={Object.assign({}, baseStyle, firstLineStyle)}/>
				<span style={Object.assign({}, baseStyle, secondLineStyle)}/>
				<span style={Object.assign({}, baseStyle, thirdLineStyle)}/>
			</div>
		);
	}

	private getTransformValue = (isOpen, basePos, rotate, halfHeight) => {
		return `translate3d(0,${isOpen ? halfHeight + "px" : basePos + "px"},0) rotate(${isOpen ? `${rotate}deg` : "0"})`;
	};
}
