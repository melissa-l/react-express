import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const code = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Counter extends Component {

  state = {count: 0}

  componentDidMount() {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  render() {
    const {count} = this.state
    const {color, size} = this.props

    return (
      <div style={{color, fontSize: size}}>
        {count}
      </div>
    )
  }
}

class App extends Component {
  render() {
    const style = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <div style={style}>
        <Counter color={'lightblue'} size={16} />
        <Counter color={'skyblue'} size={32} />
        <Counter color={'steelblue'} size={80} />
        <Counter color={'darkblue'} size={140} />
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
## **\`this.props\`**

${<WebPlayer code={code} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
