import { Dispatch } from "react";
export interface ChatSupportStates {
    isOpen: boolean;
}
export declare enum ChatSupportKind {
    ToggleChatBubble = "TOGGLE_CHAT_BUBBLE"
}
export interface ChatSupportAction {
    type: ChatSupportKind;
    payload: unknown;
}
export interface ChatSupportContextValue {
    states: ChatSupportStates;
    dispatch: Dispatch<ChatSupportAction>;
}
