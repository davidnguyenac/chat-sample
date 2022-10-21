import { Dispatch } from "react";
import { ChatSupportAction, ChatSupportKind, ChatSupportStates } from "./types";

export const chatSupportReducer = (
  state: ChatSupportStates,
  action: ChatSupportAction
): ChatSupportStates => {
  switch (action.type) {
    case ChatSupportKind.ToggleChatBubble:
      return { ...state, isOpen: action.payload as boolean };

    default:
      return state;
  }
};

export const toggleChatBubble = (
  dispatch: Dispatch<ChatSupportAction>,
  value: boolean
) => dispatch({ type: ChatSupportKind.ToggleChatBubble, payload: value });
