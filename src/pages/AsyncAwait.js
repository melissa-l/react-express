import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { EditorConsole } from "../components";

const code = `const fetchData = async () => {
  return fetch('https://randomuser.me/api/')
}

const printData = async () => {
  try {
    const data = await fetchData()
    const json = await data.json()
    console.log(json)
  } catch(e) {
    console.error("Problem", e)
  }
}

printData()`;

const content = markdown(markdownOptions)`
${<EditorConsole code={code} title={"Async and await"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
