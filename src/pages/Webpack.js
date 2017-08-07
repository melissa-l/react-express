import React from "react";
import markdown from "markdown-in-js";

import CodeBlock from "../components/CodeBlock";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
缩进👇这个
Webpack lets us use \`npm\` packages for client-side development by
- crawling your filesystem, reading calls to \`require\`, and bundling all necessary JavaScript files into a single file that can be served on the web
- polyfilling (faking) the \`node\` APIs so that code can run in both environments

## Scripts

下面👇这个可以变成代码.

${(
  <CodeBlock filename={"package.json"}>{`{
  ...
  "scripts": {
    "dev": "webpack-dev-server --env.dev",
    "build": "webpack"
  },
  ...
}`}</CodeBlock>
)}

## Essential files

Let's add the bare minimum files needed to see something on the screen. We'll create an \`index.js\` and an \`index.html\`:

${(
  <CodeBlock filename={"index.js"}>{`// index.js
document.write('Hello World!')`}</CodeBlock>
)}

下面是个图片啊

![Hello World](webpack-hello-world.png)

![Hello World](webpack-sublime.png)
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
