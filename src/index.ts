// Individual commands
import { headingLevel1Command } from "./commands/markdown-commands/headingLevel1Command";
import { boldCommand } from "./commands/markdown-commands/boldCommand";
import { italicCommand } from "./commands/markdown-commands/italicCommand";
import { strikethroughCommand } from "./commands/markdown-commands/strikethroughCommand";
import { linkCommand } from "./commands/markdown-commands/linkCommand";
import { quoteCommand } from "./commands/markdown-commands/quoteCommand";
import { imageCommand } from "./commands/markdown-commands/imageCommand";
import { CommandController } from "./commands/command-controller";
import type { TextController } from "./types/CommandOptions";
import { TextAreaTextController } from "./text/textarea-text-controller";
import * as textHelpers from "./helpers/textHelpers";
import * as listBase from "./utils/list";
import * as headerBase from "./utils/header"
import * as toggleBase from "./utils/toggle"
import { codeCommand } from "./commands/markdown-commands/codeCommand";
import { useTextAreaMarkdownEditor } from "./hooks/use-markdown-editor";
import { codeBlockCommand } from "./commands/markdown-commands/codeBlockCommand";
import { checkedListCommand } from "./commands/markdown-commands/checkedListCommand";
import { orderedListCommand } from "./commands/markdown-commands/orderedListCommand";
import { unorderedListCommand } from "./commands/markdown-commands/unorderedListCommand";
import { headingLevel2Command } from "./commands/markdown-commands/headingLevel2Command";
import { headingLevel3Command } from "./commands/markdown-commands/headingLevel3Command";
import { headingLevel4Command } from "./commands/markdown-commands/headingLevel4Command";
import { headingLevel5Command } from "./commands/markdown-commands/headingLevel5Command";
import { headingLevel6Command } from "./commands/markdown-commands/headingLevel6Command";

export {
  // helpers
  textHelpers,
  listBase,
  headerBase,
  toggleBase,
  // controllers
  CommandController,
  TextController,
  TextAreaTextController,
  // commands
  boldCommand,
  italicCommand,
  strikethroughCommand,
  linkCommand,
  quoteCommand,
  codeCommand,
  codeBlockCommand,
  checkedListCommand,
  orderedListCommand,
  unorderedListCommand,
  imageCommand,
  headingLevel1Command,
  headingLevel2Command,
  headingLevel3Command,
  headingLevel4Command,
  headingLevel5Command,
  headingLevel6Command,
  // hooks
  useTextAreaMarkdownEditor
};
