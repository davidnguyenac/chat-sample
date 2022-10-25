import { Dispatch } from "react";
export declare enum ChatPopupStep {
    Greeting = "greeting",
    Chat = "chat",
    Settings = "settings"
}
export interface ChatSupportStates {
    isOpen: boolean;
    step: ChatPopupStep;
}
export declare enum ChatSupportKind {
    ToggleChatBubble = "TOGGLE_CHAT_BUBBLE",
    SetChatStep = "SET_CHAT_STEP"
}
export interface ChatSupportAction {
    type: ChatSupportKind;
    payload: unknown;
}
export interface ChatSupportContextValue {
    states: ChatSupportStates;
    dispatch: Dispatch<ChatSupportAction>;
}
