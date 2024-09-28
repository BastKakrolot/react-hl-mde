import { Commands } from "../../src";
import { useMDE } from "../../src";
const useTAMDE = () =>
  useMDE({
    commandMap: {
      ...Commands
    }
  });

const CommandsKeys = Object.keys(Commands);

export default useTAMDE;

export { CommandsKeys };
