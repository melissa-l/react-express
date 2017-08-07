import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { PageHeader } from "../components";

const content = markdown(markdownOptions)`
sad
`;

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"李艺璇"}
      authorURL={"http://liyixuan.top/"}
    />
    {content}
  </Page>;
