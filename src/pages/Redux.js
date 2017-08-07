import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";
import { WebPlayer } from "../components";

const minimalRedux = `import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// Define action types
const types = {
  INCREMENT: 'INCREMENT',
}

// Define a reducer
const reducer = (state, action) => {
  if (action.type === types.INCREMENT) {
    return {count: state.count + 1}
  }
  return state
}

// Define the initial state of our store
const initialState = {count: 0}

// Create a store, passing our reducer function and our initial state
const store = createStore(reducer, initialState)


/// We're done! Redux is all set up. Here's how we can use it:


// Now we can dispatch actions, which are understood by our store/reducer
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})
store.dispatch({type: types.INCREMENT})

// Calling \`store.getState()\` returns our state object
class App extends Component {
  render() {
    return (
      <div style={{fontSize: 100}}>
        {store.getState().count}
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
`;

const indexFile = `import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './todoListRedux'
const store = createStore(reducer)

// Import the App container component
import App from './App'

// Pass the store into the app container
render(<App store={store} />, document.querySelector('#app'))
`;

const appFile = `import React, { Component } from 'react'

import { actionCreators } from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {

  state = {}

  componentWillMount() {
    const {store} = this.props

    const {todos} = store.getState()
    this.setState({todos})

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    const {store} = this.props

    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    const {store} = this.props

    store.dispatch(actionCreators.remove(index))
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
  ["index.js", indexFile],
  ["todoListRedux.js", require("!!raw-loader!../examples/TodoListRedux")],
  ["App.js", appFile],
  ["List.js", require("!!raw-loader!../examples/List")],
  ["Input.js", require("!!raw-loader!../examples/Input")],
  ["Title.js", require("!!raw-loader!../examples/Title")]
];

const vendorComponents = [
  [
    "redux",
    "Redux",
    "https://cdnjs.cloudflare.com/ajax/libs/redux/3.6.0/redux.min.js"
  ]
];

const content = markdown(markdownOptions)`
This example shows the bare minimum steps necessary to set up a redux \`store\`, define \`action\` types, and define a \`reducer\` function to handle them.

${<WebPlayer code={minimalRedux} vendorComponents={vendorComponents} />}

# To-Do List Example

Let's take a look at our To-Do List app again, now that it's using Redux.

## Files

- \`List.js\`, \`Input.js\`, \`Title.js\`\\
Presentational components - these are the same as in the Component State example.

${<WebPlayer files={files} vendorComponents={vendorComponents} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
