import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import { chatSupportReducer } from "./reducers";
import {
  ChatPopupStep,
  ChatSupportContextValue,
  ChatSupportStates,
} from "./types";

const ChatSupportContext = createContext(
  undefined as unknown as ChatSupportContextValue
);

const initialValue: ChatSupportStates = {
  isOpen: false,
  step: ChatPopupStep.Greeting,
};

export const IntercomChatSupportProvider: FC<PropsWithChildren<any>> = ({
  children,
}) => {
  const [states, dispatch] = useReducer(chatSupportReducer, initialValue);
  console.log("🚀 ~ file: index.tsx ~ line 29 ~ states", states);

  return (
    <ChatSupportContext.Provider
      value={{
        states,
        dispatch,
      }}
    >
      {children}
    </ChatSupportContext.Provider>
  );
};

export const useChatSupportProvider = () => useContext(ChatSupportContext);
