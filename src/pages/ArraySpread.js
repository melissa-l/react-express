import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const code = `const foo = ['a', 'b', 'c']
const bar = ['d', 'e', 'f']

console.log(...foo)
console.log([...foo, ...bar])
`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Array spread"} />}
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
