import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { EditorTranspiler } from "../components";

const code = `const a = <div />

const b = (
  <div
    foo='hello'
    bar={baz}>
    <span>42</span>
  </div>
)`;

const content = markdown(markdownOptions)`
${<EditorTranspiler code={code} title={"JSX"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
