import { Command } from "../../helpers/command";
import { setHeaderNextLine} from "../../utils/header";

export const headingLevel5Command: Command = {
  execute: ({ initialState, textApi }) => {
    setHeaderNextLine(initialState, textApi, "#####");
  }
};
