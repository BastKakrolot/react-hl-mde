import * as React from "react";
import {
  faBold,
  faItalic,
  faCode,
  faHeading
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  boldCommand,
  codeCommand,
  italicCommand,
  headingLevel1Command,
  useTextAreaMarkdownEditor
} from "../../src";
import { Button, Flex, Input } from "antd";
export const AntdDemo: React.FC = () => {
  const { ref, commandController } = useTextAreaMarkdownEditor({
    commandMap: {
      bold: boldCommand,
      italic: italicCommand,
      code: codeCommand,
      headingLevel1: headingLevel1Command
    }
  });

  return (
    <div style={{ padding: 10 }}>
      <Flex vertical gap={10}>
        <strong>Antd</strong>
        <Flex gap={5}>
          <Button
            variant="text"
            color="primary"
            icon={<FontAwesomeIcon icon={faBold} />}
            onClick={async () => {
              await commandController.executeCommand("bold");
            }}
          />
          <Button
            variant="text"
            color="primary"
            icon={<FontAwesomeIcon icon={faItalic} />}
            onClick={async () => {
              await commandController.executeCommand("italic");
            }}
          />
          <Button
            variant="text"
            color="primary"
            icon={<FontAwesomeIcon icon={faCode} />}
            onClick={async () => {
              await commandController.executeCommand("code");
            }}
          />
          <Button
            variant="text"
            color="primary"
            icon={<FontAwesomeIcon icon={faHeading} />}
            onClick={async () => {
              await commandController.executeCommand("headingLevel1");
            }}
          />
        </Flex>
        <Input.TextArea
          style={{ height: 100 }}
          ref={t => {
            // @ts-ignore
            ref.current = t?.resizableTextArea?.textArea;
          }}
          placeholder="I'm a markdown editor"
        />
      </Flex>
    </div>
  );
};

export default AntdDemo;
