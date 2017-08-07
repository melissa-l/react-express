import React from "react";
import markdown from "markdown-in-js";

import markdownOptions from "../utils/MarkdownOptions";
import Page from "./Page";
import { EditorConsole, PageHeader } from "../components";

const classExample = `class Calculator {
  constructor(value1, value2) {
    this.value1 = value1
    this.value2 = value2
  }

  static multiply(value1, value2) {
    return value1 * value2
  }

  sum() {
    return this.value1 + this.value2
  }
}

const calc = new Calculator(2, 3)

console.log(calc.sum())
console.log(Calculator.multiply(2, 3))`;

const classExtendsExample = `
class SquareCalculator {
  constructor(value) {
    this.value = value
  }

  calculate() {
    return this.value * this.value
  }
}

class CubeCalculator extends SquareCalculator {
  calculate() {
    return this.value * super.calculate()
  }
}

const cuber = new CubeCalculator(3)
console.log(cuber.calculate())
`;

const content = markdown(markdownOptions)`
<EditorConsole
  code=${classExample}
  title=${"Using class"}
/>

${<EditorConsole code={classExtendsExample} title={"Inheritance"} />}
`;

export default props =>
  <Page {...props}>
    <PageHeader
      title={props.title}
      author={"Gabe G'Sell"}
      authorURL={"http://gabegsell.com/"}
    />
    {content}
  </Page>;
