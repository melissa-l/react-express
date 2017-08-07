import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
👇这个被包裹的很好
\`\`\`
npm install -g create-react-app
\`\`\`
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
