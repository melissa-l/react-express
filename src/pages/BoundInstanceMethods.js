import React from "react";
import markdown from "markdown-in-js";

import { PageHeader } from "../components";
import EditorConsole from "../components/EditorConsole";
import Page from "./Page";
import markdownOptions from "../utils/MarkdownOptions";

const code = `class Cat {
  constructor(name) {
    this.name = name
  }
  printName = () => {
    console.log(this.name)
  }
}

const cat = new Cat('Tom')
const printName = cat.printName

// 'this' is still bound to our Cat instance, so even
// though our calling context changed, the function
// executes in its original context.
printName()
`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Bound instance methods"} />}
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
