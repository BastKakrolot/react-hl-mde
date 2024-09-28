import * as React from "react";
import { ChakraProvider, Textarea, IconButton } from "@chakra-ui/react";
import BaseLayout from "../layout/base-layout";
import useTAMDE, { CommandsKeys } from "../hooks/use-textarea-mde";
import { IconMap } from "../constants";

export const ChakraDemo: React.FC = () => {
  const { ref, commandController } = useTAMDE();
  const toolbar = React.useMemo<JSX.Element>(() => {
    return (
      <>
        {CommandsKeys.map(key => {
          return (
            <IconButton
              variant={"outline"}
              size={"sm"}
              color={"gray.600"}
              aria-label={key}
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
    <ChakraProvider>
      <BaseLayout
        name="ChakraUI"
        toolbar={toolbar}
        textarea={
          <Textarea
            ref={ref}
            placeholder="I'm a markdown editor"
            fontFamily={"monospace"}
          />
        }
      />
    </ChakraProvider>
  );
};

export default ChakraDemo;
