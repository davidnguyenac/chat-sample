import { Dispatch } from "react";
import { ChatSupportAction, ChatSupportStates } from "./types";
export declare const chatSupportReducer: (state: ChatSupportStates, action: ChatSupportAction) => ChatSupportStates;
export declare const toggleChatBubble: (dispatch: Dispatch<ChatSupportAction>, value: boolean) => void;
