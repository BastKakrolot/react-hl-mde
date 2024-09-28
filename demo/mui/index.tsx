import * as React from "react";
import BaseLayout from "../layout/base-layout";
import useTAMDE, { CommandsKeys } from "../hooks/use-textarea-mde";
import { IconMap } from "../constants";
import { IconButton, TextField } from "@mui/material";

export const MUIDemo: React.FC = () => {
  const { ref, commandController } = useTAMDE();
  const toolbar = React.useMemo<JSX.Element>(() => {
    return (
      <>
        {CommandsKeys.map(key => {
          return (
            <IconButton
              color="primary"
              key={key}
              onClick={() => commandController.executeCommand(key)}
            >
              {IconMap[key]}
            </IconButton>
          );
        })}
      </>
    );
  }, []);

  return (
    <BaseLayout
      name="MUI"
      toolbar={toolbar}
      textarea={
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
      }
    />
  );
};

export default MUIDemo;
