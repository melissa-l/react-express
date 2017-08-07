import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const appFile = `import React, { Component } from 'react'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {

  state = {
    todos: ['Click to remove', 'Learn React', 'Write Code', 'Ship App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state

    return (
      <div style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onClickItem={this.onRemoveTodo}
        />
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
}
`;

const files = [
  ["index.js", require("!!raw-loader!../examples/IndexRegisterApp")],
  ["App.js", appFile],
  ["List.js", require("!!raw-loader!../examples/List")],
  ["Input.js", require("!!raw-loader!../examples/Input")],
  ["Title.js", require("!!raw-loader!../examples/Title")]
];

const content = markdown(markdownOptions)`
干净的表格.

## Files

- \`index.js\`\\
The index file is the entry point to a project.

- \`App.js\`\\
\`App\` is a "smart" container component.

- \`List.js\`\\
This component renders a list of strings. It fires an \`onClickItem\` callback when an item is pressed.

- \`Input.js\`\\
This component renders an input field. es ${(
  <kbd>Enter</kbd>
)}.

- \`Title.js\`\\
A simple title component. Purely presentational.

${<WebPlayer files={files} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
