import { TextController, TextState } from "../types/CommandOptions"; 

import type { AlterLineFunction } from "../helpers/textHelpers";


// 导入用于文本操作的帮助函数
import {
  getBreaksNeededForEmptyLineAfter,
  getBreaksNeededForEmptyLineBefore,
  getSelectedText,
  insertBeforeEachLine,
  selectWord,
} from "../helpers/textHelpers";

/**
 * 生成列表项的函数
 * 
 * @param state0 初始的文本状态
 * @param textController 文本控制器，用于操作文本和选择范围
 * @param insertBefore 要插入到每一行之前的字符串或函数
 */
export function makeList(
  state0: TextState,
  textController: TextController,
  insertBefore: string | AlterLineFunction
) {
  // 调整选择范围以包含整个单词（如果光标在单词内）
  const newSelectionRange = selectWord({
    text: state0.text,
    selection: state0.selection
  });
  const state1 = textController.setSelectionRange(newSelectionRange);

  // 计算插入前需要的换行数，并生成相应的换行字符串
  const breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
    state1.text,
    state1.selection.start
  );
  const breaksBefore = Array(breaksBeforeCount + 1).join("\n");

  // 计算插入后需要的换行数，并生成相应的换行字符串
  const breaksAfterCount = getBreaksNeededForEmptyLineAfter(
    state1.text,
    state1.selection.end
  );
  const breaksAfter = Array(breaksAfterCount + 1).join("\n");

  // 获取选定文本并应用插入操作
  const modifiedText = insertBeforeEachLine(
    getSelectedText(state1),
    insertBefore
  );

  // 替换选定区域并添加换行
  textController.replaceSelection(
    `${breaksBefore}${modifiedText.modifiedText}${breaksAfter}`
  );

  // 计算单行时的偏移量，用于调整选择范围
  const oneLinerOffset =
    getSelectedText(state1).indexOf("\n") === -1
      ? modifiedText.insertionLength
      : 0;

  // 计算新的选择范围起点和终点
  const selectionStart =
    state1.selection.start + breaksBeforeCount + oneLinerOffset;
  const selectionEnd =
    selectionStart + modifiedText.modifiedText.length - oneLinerOffset;

  // 调整选择范围以排除插入的特殊字符（如**）
  textController.setSelectionRange({
    start: selectionStart,
    end: selectionEnd
  });
}