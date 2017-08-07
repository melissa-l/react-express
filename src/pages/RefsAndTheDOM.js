import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import WebPlayer from "../components/WebPlayer";
import markdownOptions from "../utils/MarkdownOptions";

const measureNode = `import React, { Component } from 'react'
import { render } from 'react-dom'

class Card extends Component {
  state = {
    width: null,
    height: null,
  }

  saveRef = (ref) => this.containerNode = ref

  measure() {
    const {clientWidth, clientHeight} = this.containerNode

    this.setState({
      width: clientWidth,
      height: clientHeight,
    })
  }

  componentDidMount() {
    this.measure()
  }

  componentDidUpdate() {
    this.measure()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.width !== nextState.width ||
      this.state.height !== nextState.height
    )
  }

  render() {
    const {width, height} = this.state

    return (
      <div
        style={styles.card}
        ref={this.saveRef}
      >
        <h2 style={styles.subtitle}>My dimensions are:</h2>
        {width && height && (
          <h1 style={styles.title}>{width} x {height}</h1>
        )}
      </div>
    )
  }
}

const styles = {
  card: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'skyblue',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 18,
    lineHeight: '24px',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: '18px',
  },
}

render(<Card />, document.querySelector('#app'))
`;

const content = markdown(markdownOptions)`
${<WebPlayer code={measureNode} />}

There are quite a few things going on here, so let's look at them one at a time.

## The **\`ref\`** prop

Here we should pass a callback function that can save the reference to the instance. Most likely, we want to assign the reference to our component, so we need to make sure this function is bound to the current component (we want \`this\` to be our component). We should give the reference a descriptive name (in this case, \`containerNode\`).

## Lifecycle hooks
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
