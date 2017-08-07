import React from "react";
import markdown from "markdown-in-js";

import CodeBlock from "../components/CodeBlock";
import DefaultPage from "./DefaultPage";
import markdownOptions from "../utils/MarkdownOptions";

const content = markdown(markdownOptions)`
${<CodeBlock>{`npm init`}</CodeBlock>}

👆这个图片加载出来了？

When you type
下面这个是什么鬼格式？ 不能用快作用于一块包起来？
${<CodeBlock>{`npm install`}</CodeBlock>}

${<CodeBlock>{`npm install --save foo-bar`}</CodeBlock>}

下面这个就是前面能加一个竖杠

> Note: If you're on npm version 5, you can leave off the \`--save\`.
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
