import { Command } from "../../helpers/command";
import { makeList } from "../../utils/list";

export const checkedListCommand: Command = {
  execute: ({ initialState, textApi }) => {
    makeList(initialState, textApi, () => `- [ ] `);
  }
};
