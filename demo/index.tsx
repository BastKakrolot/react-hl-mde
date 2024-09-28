import * as React from "react";
import { createRoot } from "react-dom/client";
import AntdDemo from "./antd";
import ChakraDemo from "./chakra";
import MUIDemo from "./mui";

export const Demo: React.FC = () => (
  <div style={{ maxWidth: 800, width: "100%", margin: "auto" }}>
    <div
      style={{
        fontSize: 28,
        padding: 10,
        fontWeight: "bold",
        textAlign: "center"
      }}
    >
      React Headless Markdown Editor Demo
    </div>
    <ChakraDemo />
    <AntdDemo />
    <MUIDemo />
  </div>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Demo />);
export default Demo;
