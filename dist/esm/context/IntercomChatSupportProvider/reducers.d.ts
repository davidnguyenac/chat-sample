import { Dispatch } from "react";
import { ChatPopupStep, ChatSupportAction, ChatSupportStates } from "./types";
export declare const chatSupportReducer: (state: ChatSupportStates, action: ChatSupportAction) => ChatSupportStates;
export declare const toggleChatBubble: (dispatch: Dispatch<ChatSupportAction>, value: boolean) => void;
export declare const setChatStep: (dispatch: Dispatch<ChatSupportAction>, value: ChatPopupStep) => void;
