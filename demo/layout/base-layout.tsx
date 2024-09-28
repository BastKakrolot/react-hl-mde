import React from "react";
import { Flex } from "antd";
export default function BaseLayout({
  name = "name",
  toolbar,
  textarea
}: any): JSX.Element {
  return (
    <div style={{ padding: 10 }}>
      <Flex vertical gap={10}>
        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          {name}
        </div>
        <Flex gap={5}>{toolbar}</Flex>
        {textarea}
      </Flex>
    </div>
  );
}
