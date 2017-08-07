import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorConsole from "../components/EditorConsole";
import markdownOptions from "../utils/MarkdownOptions";

const code = `class Cat {
  name = 'Tom'
  state = {
    running: true
  }

  constructor() {
    console.log(this.name, this.state.running)
  }
}

new Cat()
`;

const content = markdown(markdownOptions)`
${(
  <EditorConsole code={code} title={"Class instance properties"} height={400} />
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
