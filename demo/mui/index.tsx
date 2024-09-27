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
import { Flex } from "antd";
import { IconButton, TextField } from "@mui/material";
export const MUIDemo: React.FC = () => {
  const { ref, commandController } = useTextAreaMarkdownEditor({
    commandMap: {
      bold: boldCommand,
      italic: italicCommand,
      code: codeCommand,
      headingLevel1: headingLevel1Command
    }
  });
  console.log(ref);

  return (
    <div style={{ padding: 10 }}>
      <Flex vertical gap={10}>
        <strong>MUI</strong>
        <Flex gap={5}>
          <IconButton
            color="primary"
            onClick={async () => {
              await commandController.executeCommand("bold");
            }}
          >
            <FontAwesomeIcon icon={faBold} />
          </IconButton>
          <IconButton
            color="primary"
            onClick={async () => {
              await commandController.executeCommand("italic");
            }}
          >
            <FontAwesomeIcon icon={faItalic} />
          </IconButton>
          <IconButton
            color="primary"
            onClick={async () => {
              await commandController.executeCommand("code");
            }}
          >
            <FontAwesomeIcon icon={faCode} />
          </IconButton>
          <IconButton
            color="primary"
            onClick={async () => {
              await commandController.executeCommand("headingLevel1");
            }}
          >
            <FontAwesomeIcon icon={faHeading} />
          </IconButton>
        </Flex>
        <TextField
          label="Markdown Editor"
          multiline
          rows={4}
          ref={t => {
            // @ts-ignore
            ref.current = t?.childNodes?.[1]?.childNodes?.[0];
          }}
          placeholder="I'm a markdown editor"
        />
      </Flex>
    </div>
  );
};

export default MUIDemo;
