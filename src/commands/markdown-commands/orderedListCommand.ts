import { Command } from "../../helpers/command";
import { makeList } from "../../utils/list";

export const orderedListCommand: Command = {
  execute: ({ initialState, textApi }) => {
    makeList(initialState, textApi, (item, index) => `${index + 1}. `);
  }
};
