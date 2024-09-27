import { Command } from "../../helpers/command";
import { setHeaderNextLine} from "../../utils/header";

export const headingLevel1Command: Command = {
  execute: ({ initialState, textApi }) => {
    setHeaderNextLine(initialState, textApi, "#");
  }
};
