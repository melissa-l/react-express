import React from "react";
import markdown from "markdown-in-js";

import DefaultPage from "./DefaultPage";
import EditorTranspiler from "../components/EditorTranspiler";
import markdownOptions from "../utils/MarkdownOptions";

const importExample = `// import the default export
import React from 'react'

// import other named exports
import { Component, Children } from 'react'

// import default and others simultaneously
// import React, { Component, Children } from 'react'`;

const exportExample = `export default React
export { Component, Children }`;

const content = markdown(markdownOptions)`
${<EditorTranspiler code={importExample} title={"Importing"} />}

${<EditorTranspiler code={exportExample} title={"Exporting"} />}
`;

export default props => <DefaultPage {...props}>{content}</DefaultPage>;
