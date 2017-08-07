import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
# Common Options for Managing Data
👇这个相当于一个表格
Option | Description
--- | ---
**Component State** | St
**Redux** | [Redux](https://facerted.html)  usage.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
