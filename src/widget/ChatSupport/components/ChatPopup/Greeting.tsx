import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Form } from "./Form";
import { useChatSupportProvider } from "../../../../context";
import { setChatStep } from "../../../../context/IntercomChatSupportProvider/reducers";
import { ChatPopupStep } from "../../types";
import { ChatSupportKind } from "../../../../context/IntercomChatSupportProvider/types";

export const Greeting: FC = () => {
  const { dispatch } = useChatSupportProvider();

  const startChat = () => {
    try {
      dispatch({
        type: ChatSupportKind.SetChatStep,
        payload: ChatPopupStep.Chat,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: Greeting.tsx ~ line 20 ~ startChat ~ error",
        error
      );
    }
  };

  return (
    <Box sx={{ padding: "40px 16px" }}>
      <Typography
        component="h3"
        sx={{
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "27px",
          // TODO update color midnight in theme
          color: "#262949",
          textAlign: "center",
        }}
      >
        Your Company Support
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: "16px",
          lineHeight: "116%",
          // TODO update color dusk in theme
          color: "#80829D",
          textAlign: "center",
          marginTop: "5px",
        }}
      >
        Start chatting with our team to get support. We’re here for you 24/7!
      </Typography>

      <Form />

      <Box
        sx={{
          marginTop: "36px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            textTransform: "capitalize",
            height: "50px",
            borderRadius: "1rem",
            fontWeight: 700,
          }}
          onClick={startChat}
        >
          Start Chatting
        </Button>
      </Box>
    </Box>
  );
};
