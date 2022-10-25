import { Dispatch } from "react";
import {
  ChatPopupStep,
  ChatSupportAction,
  ChatSupportKind,
  ChatSupportStates,
} from "./types";

export const chatSupportReducer = (
  state: ChatSupportStates,
  action: ChatSupportAction
): ChatSupportStates => {
  switch (action.type) {
    case ChatSupportKind.ToggleChatBubble:
      return { ...state, isOpen: action.payload as boolean };
    case ChatSupportKind.SetChatStep:
      return { ...state, step: action.payload as ChatPopupStep };
    default:
      return state;
  }
};

export const toggleChatBubble = (
  dispatch: Dispatch<ChatSupportAction>,
  value: boolean
) => dispatch({ type: ChatSupportKind.ToggleChatBubble, payload: value });

export const setChatStep = (
  dispatch: Dispatch<ChatSupportAction>,
  value: ChatPopupStep
) => dispatch({ type: ChatSupportKind.SetChatStep, payload: value });
