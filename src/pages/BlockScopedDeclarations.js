import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorTranspiler from "../components/EditorTranspiler";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const a = 1
let b = 'foo'

// Not allowed!
// a = 2

// Ok!
b = 'bar'

if (true) {
  const a = 3
}`;

const content = markdown(markdownOptions)`
${<EditorTranspiler code={code} title={"Using const and let"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
