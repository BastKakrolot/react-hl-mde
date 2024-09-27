import * as React from "react";
import { Box, ChakraProvider, HStack, Textarea } from "@chakra-ui/react";
import { headingLevel1Command, useTextAreaMarkdownEditor } from "../../src";
import {
  faBold,
  faItalic,
  faCode,
  faHeading
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { boldCommand, codeCommand, italicCommand } from "../../src";
import { ToolbarButton } from "./toolbar-button";
import { Flex } from "antd";

export const ChakraDemo: React.FC = () => {
  const { ref, commandController } = useTextAreaMarkdownEditor({
    commandMap: {
      bold: boldCommand,
      italic: italicCommand,
      code: codeCommand,
      headingLevel1: headingLevel1Command
    }
  });

  return (
    <ChakraProvider>
      <div style={{ padding: 10 }}>
        <Flex vertical gap={10}>
          <strong>Chakra-UI</strong>
          <Flex gap={5}>
            <ToolbarButton
              onClick={async () => {
                await commandController.executeCommand("bold");
              }}
            >
              <FontAwesomeIcon icon={faBold} />
            </ToolbarButton>
            <ToolbarButton
              onClick={async () => {
                await commandController.executeCommand("italic");
              }}
            >
              <FontAwesomeIcon icon={faItalic} />
            </ToolbarButton>
            <ToolbarButton
              onClick={async () => {
                await commandController.executeCommand("code");
              }}
            >
              <FontAwesomeIcon icon={faCode} />
            </ToolbarButton>
            <ToolbarButton
              onClick={async () => {
                await commandController.executeCommand("headingLevel1");
              }}
            >
              <FontAwesomeIcon icon={faHeading} />
            </ToolbarButton>
          </Flex>
          <Textarea
            ref={ref}
            placeholder="I'm a markdown editor"
            fontFamily={"monospace"}
          />
        </Flex>
      </div>
    </ChakraProvider>
  );
};

export default ChakraDemo;
