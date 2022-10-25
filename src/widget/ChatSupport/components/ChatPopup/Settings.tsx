import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useChatSupportProvider } from "../../../../context";
import { setChatStep } from "../../../../context/IntercomChatSupportProvider/reducers";
import { ChatPopupStep } from "../../types";
import { Form } from "./Form";

export const Settings: FC = () => {
  const { dispatch } = useChatSupportProvider();

  const backToChat = () => {
    setChatStep(dispatch, ChatPopupStep.Chat);
  };

  return (
    <Box
      sx={{
        padding: "0 16px",
        display: "grid",
        gridTemplateRows: "50px auto",
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
        <IconButton sx={{ color: "#80829D" }} onClick={backToChat}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "14px",
            color: "#262949",
            lineHeight: "17px",
            marginLeft: "20px",
          }}
        >
          Settings
        </Typography>
      </Box>

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
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};
