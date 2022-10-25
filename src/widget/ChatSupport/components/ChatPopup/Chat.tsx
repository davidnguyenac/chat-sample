import { FC } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import TuneIcon from "@mui/icons-material/Tune";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import { ChatSupportIcon } from "../../../../components/icon";
import { useChatSupportProvider } from "../../../../context";
import { setChatStep } from "../../../../context/IntercomChatSupportProvider/reducers";
import { ChatPopupStep } from "../../../../context/IntercomChatSupportProvider/types";

export const Chat: FC = () => {
  const { dispatch } = useChatSupportProvider();

  const goToSetting = () => {
    setChatStep(dispatch, ChatPopupStep.Settings);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "50px 290px 109px 68px",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #E8EBF5",
          padding: "12px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "24px", height: "24px", color: "#1448F3" }}>
          <ChatSupportIcon />
        </Box>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "14px",
            color: "#262949",
            lineHeight: "17px",
            marginLeft: "20px",
          }}
        >
          Customer Support
        </Typography>
        <IconButton
          sx={{
            marginLeft: "auto",
            display: "flex",
            placeItems: "center",
          }}
          onClick={goToSetting}
        >
          <TuneIcon sx={{ color: "#80829D", cursor: "pointer" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #E8EBF5",
          padding: "10px 16px 0",
          overflow: "hidden",
          height: "100%",
          "&:hover": {
            overflow: "hidden scroll",
          },
        }}
      ></Box>
      <Box sx={{ borderBottom: "1px solid #E8EBF5" }}></Box>
      <Box
        sx={{
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button variant="contained">Send</Button>
        <IconButton sx={{ marginLeft: "20px" }}>
          <InsertEmoticonIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
