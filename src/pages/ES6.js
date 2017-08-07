import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
# ES2015 Highlights
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
