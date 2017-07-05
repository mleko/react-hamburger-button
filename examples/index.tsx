import * as React from "react";
import * as ReactDOM from "react-dom";

import {Example} from "./src/Example";

// Render a simple React component into the body.
let element = document.createElement("div");
document.getElementsByTagName("body")[0].appendChild(element);
ReactDOM.render(<Example/>, element);
