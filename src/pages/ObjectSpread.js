import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const code = `const defaultStyle = {
  color: 'black',
  fontSize: 12,
  fontWeight: 'normal'
}

const style = {
  ...defaultStyle,
  fontWeight: 'bold',
  backgroundColor: 'white'
}

// Note that fontWeight is 'bold', as the second
// assignment overrode the initial assignment.
console.log(style)`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Object spread operator"} />}
`;

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={"http://gabegsell.com/"}
    />
    {content}
  </Page>;
