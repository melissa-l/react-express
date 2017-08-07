import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import DefaultPage from "./DefaultPage";

const content = markdown(markdownOptions)`
右边👉这个替换成strong+a: [\`create-react-app\`](https://github.com/facebookincubator/create-react-app) and [webpack](https://webpack.js.org/).

Both options are based on \`npm\`, the \`node.js\` package manager. We'll cover \`npm\` separately, if you're not familiar with it.

我靠👉这个两个可以啊，直接跳转路由 [Modern JavaScript](modern_javascript) or [React API](react_api) sec.

👇这个额，换行能小一点。

<br />

ct app either using \`create-react-app\` or f给你留一行玩玩.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
