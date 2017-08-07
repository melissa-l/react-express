import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
没啥了
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
