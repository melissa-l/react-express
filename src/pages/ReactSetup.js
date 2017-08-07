import React from "react";
import markdown from "markdown-in-js";

import CodeBlock from "../components/CodeBlock";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
${(
  <CodeBlock filename={"index.js"}>{`// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        Welcome to React!
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)`}</CodeBlock>
)}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
