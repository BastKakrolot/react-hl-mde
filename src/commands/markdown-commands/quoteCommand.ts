import { Command } from "../../helpers/command";
import { setHeaderNextLine} from "../../utils/header";

export const quoteCommand: Command = {
  execute: ({ initialState, textApi }) => {
    setHeaderNextLine(initialState, textApi, ">");
  }
};
