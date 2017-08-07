import { Link } from "react-router";
import React, { Component } from "react";
import markdown from "markdown-in-js";

import { GithubCorner, PageHeader } from "../components";
import Page from "./Page";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const code = `import React, { Component } from 'react'
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
ReactDOM.render(<App />, root)
`;

const buttonStyle = {
  padding: "10px 15px",
  color: "white",
  borderRadius: 3,
  backgroundColor: "rgb(54,203,170)",
  textAlign: "center",
  display: "block",
  marginTop: 40
};

export default class extends Component {
  render() {
    const content = markdown(markdownOptions)`
这种东西相当于一个a标签-> [我是个链接](https://facebook.github.io/react/docs/hello-world.html).

下面这个相当于一个H1标签

# Hello World

${<WebPlayer code={code} />}
`;

    return (
      <Page
        footer={this.props.footer}
        title={"React Express"}
        subtitle={
          "The all-in-one guide to modern React application development"
        }
        logo={
          "//cdn.rawgit.com/dabbott/react-native-express/master/static/logo"
        }
        logoWidth={256}
        logoHeight={296}
        bannerHeight={560}
      >
        <GithubCorner />
        <PageHeader
          title={"Learning React"}
          author={"@devinaabbott"}
          authorURL={"https://twitter.com/devinaabbott"}
        />
        {content}
        <Link to={"environment"} style={buttonStyle}>
          Let's get started!
        </Link>
      </Page>
    );
  }
}
