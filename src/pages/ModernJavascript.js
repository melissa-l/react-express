import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
meila 
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
