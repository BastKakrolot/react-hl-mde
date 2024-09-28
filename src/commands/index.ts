import { Command } from "../helpers/command";
import { headingLevel1Command } from "./markdown-commands/headingLevel1Command";
import { boldCommand } from "./markdown-commands/boldCommand";
import { italicCommand } from "./markdown-commands/italicCommand";
import { strikethroughCommand } from "./markdown-commands/strikethroughCommand";
import { linkCommand } from "./markdown-commands/linkCommand";
import { quoteCommand } from "./markdown-commands/quoteCommand";
import { imageCommand } from "./markdown-commands/imageCommand";
import { codeBlockCommand } from "./markdown-commands/codeBlockCommand";
import { checkedListCommand } from "./markdown-commands/checkedListCommand";
import { orderedListCommand } from "./markdown-commands/orderedListCommand";
import { unorderedListCommand } from "./markdown-commands/unorderedListCommand";
import { headingLevel2Command } from "./markdown-commands/headingLevel2Command";
import { headingLevel3Command } from "./markdown-commands/headingLevel3Command";
import { headingLevel4Command } from "./markdown-commands/headingLevel4Command";
import { headingLevel5Command } from "./markdown-commands/headingLevel5Command";
import { headingLevel6Command } from "./markdown-commands/headingLevel6Command";
import { codeCommand } from "./markdown-commands/codeCommand";

const Commands: Record<string, Command> = {
  bold: boldCommand,
  italic: italicCommand,
  strikethrough: strikethroughCommand,
  link: linkCommand,
  quote: quoteCommand,
  h1: headingLevel1Command,
  h2: headingLevel2Command,
  h3: headingLevel3Command,
  h4: headingLevel4Command,
  h5: headingLevel5Command,
  h6: headingLevel6Command,
  image: imageCommand,
  code: codeCommand,
  codeBlock: codeBlockCommand,
  cl: checkedListCommand,
  ol: orderedListCommand,
  ul: unorderedListCommand
};

export default Commands;
