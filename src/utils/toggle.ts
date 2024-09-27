import { Command } from "../helpers/command";
import {
  getCharactersAfterSelection,
  getCharactersBeforeSelection,
  getSelectedText,
  selectWord
} from "../helpers/textHelpers";

/**
 * 创建一个切换命令，用于在文本的选中部分前后添加或删除指定字符
 * @param toggleChar 要添加或删除的字符
 * @returns 返回一个命令对象，包含执行和撤销操作
 */
export const createToggleCommand: (
  toggleChar: string
) => Command = toggleChar => {
  const len = toggleChar.length;
  return {
    /**
     * 确定是否应该撤销当前操作
     * @param options 包含初始状态和字符长度的选项
     * @returns 如果包围选中文字的前后字符与toggleChar相同，则返回true
     */
    shouldUndo: options => {
      return (
        getCharactersBeforeSelection(options.initialState, len) ===
          toggleChar &&
        getCharactersAfterSelection(options.initialState, len) === toggleChar
      );
    },
    /**
     * 执行切换命令，即在选中文字前后添加toggleChar
     * @param options 包含初始状态和文本API的对象
     */
    execute: ({ initialState, textApi }) => {
      const newSelectionRange = selectWord({
        text: initialState.text,
        selection: initialState.selection
      });
      const state1 = textApi.setSelectionRange(newSelectionRange);
      const state2 = textApi.replaceSelection(
        `${toggleChar}${getSelectedText(state1)}${toggleChar}`
      );
      textApi.setSelectionRange({
        start: state2.selection.end - len - getSelectedText(state1).length,
        end: state2.selection.end - len
      });
    },
    /**
     * 撤销执行切换命令，即删除选中文字前后的toggleChar
     * @param options 包含初始状态和文本API的对象
     */
    undo: ({ initialState, textApi }) => {
      const text = getSelectedText(initialState);
      textApi.setSelectionRange({
        start: initialState.selection.start - len,
        end: initialState.selection.end + len
      });
      textApi.replaceSelection(text);
      textApi.setSelectionRange({
        start: initialState.selection.start - len,
        end: initialState.selection.end - len
      });
    }
  };
};
