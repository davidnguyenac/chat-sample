import { FC, useState } from "react";

import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

import { ChatSupportIcon } from "../../components/icon";
import { IntercomChatSupportProvider } from "../../context";

import { IconButton } from "./components/IconButton";
import { ChatPopup } from "./components/ChatPopup";

export const ChatSupport: FC = () => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBubbleHandler = () => setIsOpen(!isOpen);

  return (
    <IntercomChatSupportProvider>
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          boxSizing: "border-box",
        }}
      >
        {isOpen && <ChatPopup />}
        <Box sx={{ textAlign: "right" }}>
          <IconButton
            color="primary"
            onClick={toggleChatBubbleHandler}
            sx={{
              transition: "all 0.3s ease-in-out",
              border: `3px solid ${theme.palette.primary.main}`,
              backgroundColor: isOpen ? theme.palette.primary.main : "white",
              color: isOpen ? "white" : theme.palette.primary.main,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            <ChatSupportIcon />
          </IconButton>
        </Box>
      </Box>
    </IntercomChatSupportProvider>
  );
};
