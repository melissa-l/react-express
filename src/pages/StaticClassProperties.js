import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const code = `class Foo {
  static bar = 'hello'
}

console.log(Foo.bar)`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Static properties"} />}
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
