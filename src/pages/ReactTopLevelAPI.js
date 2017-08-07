import React from "react";
import markdown from "markdown-in-js";

import { WebPlayer } from "../components";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const code = `import React from 'react'
import { render } from 'react-dom'

const node = document.querySelector('#app')
const element = <div>Hello World!</div>

render(element, node)
`;

const content = markdown(markdownOptions)`
加粗又有阴影

## **\`ReactDOM.render(element, node)\`**

${<WebPlayer code={code} height={250} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
