import * as React from "react";
import BaseLayout from "../layout/base-layout";
import useTAMDE, { CommandsKeys } from "../hooks/use-textarea-mde";
import { IconMap } from "../constants";
import { Button, Input } from "antd";
export const AntdDemo: React.FC = () => {
  const { ref, commandController } = useTAMDE();
  const toolbar = React.useMemo<JSX.Element>(() => {
    return (
      <>
        {CommandsKeys.map(key => {
          return (
            <Button
              color="primary"
              // variant="default"
              key={key}
              icon={IconMap[key]}
              onClick={() => commandController.executeCommand(key)}
            />
          );
        })}
      </>
    );
  }, []);

  return (
    <BaseLayout
      name="Antd"
      toolbar={toolbar}
      textarea={
        <Input.TextArea
          style={{ height: 100 }}
          ref={t => {
            // @ts-ignore
            ref.current = t?.resizableTextArea?.textArea;
          }}
          placeholder="I'm a markdown editor"
        />
      }
    />
  );
};

export default AntdDemo;
