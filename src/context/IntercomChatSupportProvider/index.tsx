import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import { chatSupportReducer } from "./reducers";
import { ChatSupportContextValue, ChatSupportStates } from "./types";

const ChatSupportContext = createContext(
  undefined as unknown as ChatSupportContextValue
);

const initialValue: ChatSupportStates = {
  isOpen: false,
};

export const IntercomChatSupportProvider: FC<PropsWithChildren<any>> = ({
  children,
}) => {
  const [states, dispatch] = useReducer(chatSupportReducer, initialValue);

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
