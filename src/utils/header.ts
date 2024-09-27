import { TextController, TextState } from "../types/CommandOptions";
import {
  getBreaksNeededForEmptyLineAfter,
  getBreaksNeededForEmptyLineBefore,
  getSelectedText,
  selectWord
} from "../helpers/textHelpers";

export function setHeader(
  initialState: TextState,
  api: TextController,
  prefix: string
) {
  // Adjust the selection to encompass the whole word if the caret is inside one
  const newSelectionRange = selectWord({
    text: initialState.text,
    selection: initialState.selection
  });
  const state1 = api.setSelectionRange(newSelectionRange);
  // Add the prefix to the selection
  const state2 = api.replaceSelection(`${prefix}${getSelectedText(state1)}`);
  // Adjust the selection to not contain the prefix
  api.setSelectionRange({
    start: state2.selection.end - getSelectedText(state1).length,
    end: state2.selection.end
  });
}

export function setHeaderNextLine(
  initialState: TextState,
  api: TextController,
  prefix: string
) {
  const len = prefix.length;
  // Adjust the selection to encompass the whole word if the caret is inside one
  const newSelectionRange = selectWord({
    text: initialState.text,
    selection: initialState.selection
  });
  const state1 = api.setSelectionRange(newSelectionRange);

  const breaksBeforeCount = getBreaksNeededForEmptyLineBefore(
    state1.text,
    state1.selection.start
  );
  const breaksBefore = Array(breaksBeforeCount + 1).join("\n");

  const breaksAfterCount = getBreaksNeededForEmptyLineAfter(
    state1.text,
    state1.selection.end
  );
  const breaksAfter = Array(breaksAfterCount + 1).join("\n");

  // Replaces the current selection with the quote mark up
  api.replaceSelection(
    `${breaksBefore}${prefix} ${getSelectedText(state1)}${breaksAfter}`
  );

  const selectionStart = state1.selection.start + breaksBeforeCount + len + 1;
  const selectionEnd = selectionStart + getSelectedText(state1).length;

  api.setSelectionRange({
    start: selectionStart,
    end: selectionEnd
  });
}
