import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
Component让我看看这是干嘛的，

Let's look at each phase of the component lifecycle.

## Mounting Cycle

* \`constructor(object props)\`\\
(原来你是 \`markdown\`的语法，我还以为是啥呢 ).

* \`componentWillMount()\`\\
(我靠这是什么鬼........).

* \`render() -> React Element\`\\
lala.

* \`componentDidMount()\`\\
T原来你是大标题^.

* \`componentDidUpdate(object prevProps, object prevState)\`\\
Thom the \`render()\` method.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
