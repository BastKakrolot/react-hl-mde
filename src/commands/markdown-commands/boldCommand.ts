import { Command } from "../../helpers/command";
import { createToggleCommand } from "../../utils/toggle";

export const boldCommand: Command = createToggleCommand("**");
