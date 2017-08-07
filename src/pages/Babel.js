import React from "react";
import markdown from "markdown-in-js";

import CodeBlock from "../components/CodeBlock";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
？?应该都看过吧
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
