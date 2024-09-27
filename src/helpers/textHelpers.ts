import { SelectionRange } from "../types/SelectionRange";
import { TextState } from "../types/CommandOptions";
/**
 * 类型定义，用于描述修改行的函数，它可以是一个字符串或一个函数
 */
export type AlterLineFunction = (line: string, index: number) => string;
/**
 * 获取光标周围的单词选择范围
 * @param text - 要进行操作的文本
 * @param position - 当前光标的位置
 * @returns 单词的选择范围
 * 
 * 此函数通过识别空格和换行符来界定单词的边界，从而返回光标周围的单词选择范围
 */
export function getSurroundingWord(
  text: string,
  position: number
): SelectionRange {
  if (!text) throw Error("Argument 'text' should be truthy");

  const isWordDelimiter = (c: string) => c === " " || c.charCodeAt(0) === 10;

  // leftIndex 初始化为 0，因为如果选择位置为 0，它甚至不会进入迭代
  let start = 0;
  // rightIndex 初始化为 text.length，因为如果选择位置等于 text.length，它甚至不会进入迭代
  let end = text.length;

  // 向左迭代
  for (let i = position; i - 1 > -1; i--) {
    if (isWordDelimiter(text[i - 1])) {
      start = i;
      break;
    }
  }

  // 向右迭代
  for (let i = position; i < text.length; i++) {
    if (isWordDelimiter(text[i])) {
      end = i;
      break;
    }
  }

  return { start, end };
}

/**
 * 如果光标位于一个单词内且（selection.start === selection.end）
 * 返回一个新的选择，其中整个单词被选中
 * @param text - 要进行操作的文本
 * @param selection - 当前的选择范围
 * @returns 新的选择范围，覆盖整个单词
 * 
 * 此函数通过调用 getSurroundingWord 函数实现，旨在当光标位于单词内时，扩展选择范围至整个单词
 */
export function selectWord({ text, selection }: TextState): SelectionRange {
  if (text && text.length && selection.start === selection.end) {
    // 用户正指向一个单词
    return getSurroundingWord(text, selection.start);
  }
  return selection;
}

/**
 * 获取在给定的 'startPosition' 之前需要插入的换行符数量
 * 以确保 'startPosition' 和前一个文本之间有一个空行
 * @param text - 要进行操作的文本
 * @param startPosition - 当前光标的位置
 * @returns 需要插入的换行符数量
 * 
 * 此函数通过分析光标位置前的文本，计算出需要插入的换行符数量，以确保文本之间有一个空行
 */
export function getBreaksNeededForEmptyLineBefore(
  text = "",
  startPosition: number
): number {
  if (startPosition === 0) return 0;

  // 规则：
  // - 如果我们在第一行，不需要换行符
  // - 否则，在前一个字符之前必须有 2 个换行符。根据已存在的换行符数量，我们
  //      可能需要插入 0、1 或 2 个换行符

  let neededBreaks = 2;
  let isInFirstLine = true;
  for (let i = startPosition - 1; i >= 0 && neededBreaks >= 0; i--) {
    switch (text.charCodeAt(i)) {
      case 32: // 空格
        continue;
      case 10: // 换行符
        neededBreaks--;
        isInFirstLine = false;
        break;
      default:
        return neededBreaks;
    }
  }
  return isInFirstLine ? 0 : neededBreaks;
}

/**
 * 获取在给定的 'startPosition' 之后需要插入的换行符数量
 * 以确保 'startPosition' 和下一个文本之间有一个空行
 * @param text - 要进行操作的文本
 * @param startPosition - 当前光标的位置
 * @returns 需要插入的换行符数量
 * 
 * 此函数通过分析光标位置后的文本，计算出需要插入的换行符数量，以确保文本之间有一个空行
 */
export function getBreaksNeededForEmptyLineAfter(
  text = "",
  startPosition: number
) {
  if (startPosition === text.length - 1) return 0;

  // 规则：
  // - 如果我们在第一行，不需要换行符
  // - 否则，在前一个字符之前必须有 2 个换行符。根据已存在的换行符数量，我们
  //      可能需要插入 0、1 或 2 个换行符

  let neededBreaks = 2;
  let isInLastLine = true;
  for (let i = startPosition; i < text.length && neededBreaks >= 0; i++) {
    switch (text.charCodeAt(i)) {
      case 32:
        continue;
      case 10: {
        neededBreaks--;
        isInLastLine = false;
        break;
      }
      default:
        return neededBreaks;
    }
  }
  return isInLastLine ? 0 : neededBreaks;
}

/**
 * 获取当前选择的文本
 * @param textSection - 包含要操作的文本和选择范围的文本状态对象
 * @returns 当前选择的文本内容
 * 
 * 此函数通过文本状态对象的text和selection属性，返回当前选择的文本内容
 */
export function getSelectedText(textSection: TextState): string {
  return textSection.text.slice(
    textSection.selection.start,
    textSection.selection.end
  );
}

/**
 * 获取选择前的字符
 * @param textState - 包含要操作的文本和选择范围的文本状态对象
 * @param characters - 要获取的字符数量
 * @returns 选择前的字符内容
 * 
 * 此函数用于获取当前选择范围开始位置之前指定数量的字符
 */
export function getCharactersBeforeSelection(
  textState: TextState,
  characters: number
): string {
  return textState.text.slice(
    textState.selection.start - characters,
    textState.selection.start
  );
}

/**
 * 获取选择后的字符
 * @param textState - 包含要操作的文本和选择范围的文本状态对象
 * @param characters - 要获取的字符数量
 * @returns 选择后的字符内容
 * 
 * 此函数用于获取当前选择范围结束位置之后指定数量的字符
 */
export function getCharactersAfterSelection(
  textState: TextState,
  characters: number
): string {
  return textState.text.slice(
    textState.selection.end,
    textState.selection.end + characters
  );
}

/**
 * 在每行前插入插入字符串
 * @param selectedText - 被选择的文本
 * @param insertBefore - 要在每行前插入的字符串或处理每行的函数
 * @returns 包含修改后文本和插入长度的对象
 * 
 * 此函数通过将选定文本拆分为行，并在每行前插入指定的字符串或通过指定的函数处理每行，从而生成修改后的文本
 */
export function insertBeforeEachLine(
  selectedText: string,
  insertBefore: string | AlterLineFunction
): { modifiedText: string; insertionLength: number } {
  const lines = selectedText.split(/\n/);

  let insertionLength = 0;
  const modifiedText = lines
    .map((item, index) => {
      if (typeof insertBefore === "string") {
        insertionLength += insertBefore.length;
        return insertBefore + item;
      } else if (typeof insertBefore === "function") {
        const insertionResult = insertBefore(item, index);
        insertionLength += insertionResult.length;
        return insertBefore(item, index) + item;
      }
      throw Error("insertion is expected to be either a string or a function");
    })
    .join("\n");

  return { modifiedText, insertionLength };
}