import React from "react";
import markdown from "markdown-in-js";

import { PageHeader } from "../components";
import EditorConsole from "../components/EditorConsole";
import Page from "./Page";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const printInput = (input = 'hello world') => {
  console.log(input)
}

printInput()
printInput('hello universe')`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Default parameters"} />}
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
