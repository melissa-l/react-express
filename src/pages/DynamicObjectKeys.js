import React from "react";
import markdown from "markdown-in-js";

import { PageHeader } from "../components";
import EditorConsole from "../components/EditorConsole";
import Page from "./Page";
import markdownOptions from "../utils/MarkdownOptions";

const code = `const attribute = 'color'
const style = {
  [attribute]: 'white'
}

console.log(style.color)`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Dynamic object keys"} />}
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
