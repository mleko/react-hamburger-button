# react-hamburger-button

## Installation

react-hamburger-button requires **React 0.15 or later.**

```
npm install --save react-hamburger-button
```

## Demo & Example

Live demo: [https://mleko.gitlab.io/react-hamburger-button/](https://mleko.gitlab.io/react-hamburger-button/)

To build the example locally, clone this repo then run:

```
npm install
npm start
```

## Usage

React Hamburger Button has only two required props: `open` and `onClick`.

#### onClick

Note: This prop is passed a `function`. This function will be invoked when the component is `clicked`. The function should responsible for updating the state that is passed to `open`. The function passed to `onClick` could look something like the following:

```js
handleClick() {
	this.setState({
		open: !this.state.open
	});
}
```

An example use of React Hamburger Menu looks like:

```js
<HamburgerMenu
	open={this.state.open}
	onClick={this.handleClick.bind(this)}
	width={18}
	height={15}
	strokeWidth={1}
	color='black'
	animationDuration={0.5}
/>
```

Note, not all props are required. All the props besides `open` and `onClick` have defaults.

## Options

Property  | Type | Default | Description
------------- | ------------- | --------- | ----------
open            | bool   | undefined | determines whether the menu is a hamburger or cross icon
onClick       | func   | undefined | will be invoked when the component is clicked
width             | number | 40        | the width of the icon
height            | number | 30        | the height of the icon
strokeWidth       | number | 2         | the stroke width of the lines
color             | string | #000      | the color of both icons
animationDuration | number | 0.4       | the length of time it takes for the icon transitions to complete.

## License

MIT Licensed Copyright (c) Cameron Bourke 2015, Daniel Król 2017

## Credits

Component based on https://github.com/cameronbourke/react-hamburger-menu
