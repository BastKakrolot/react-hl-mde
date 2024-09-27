import { Command } from "../../helpers/command";
import { makeList } from "../../utils/list";

export const unorderedListCommand: Command = {
  execute: ({ initialState, textApi }) => {
    makeList(initialState, textApi, "- ");
  }
};
