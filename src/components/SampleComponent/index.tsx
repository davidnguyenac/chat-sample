import { FC, useCallback, useState } from "react";

import TuneIcon from "@mui/icons-material/Tune";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// icons
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import { IntercomChatSupportProvider } from "../../context";
import { ChatSupportIcon } from "../icon";
import Form from "./components/Form";

export interface SampleComponentProps {
  label?: string;
}

export const SampleComponent: FC<SampleComponentProps> = ({ label }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const toggleSettingHandler = useCallback(() => {
    setShowChat(false);
  }, []);

  const startChatHandler = () => {
    // todo add validate user info
    const validate = true;

    //* if pass, goto chatting
    if (validate) {
      setShowChat(true);
      return;
    }

    //* if not, stay at current screen
  };

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
        <Box
          sx={{
            width: "364px",
            height: "auto",
            border: "1px solid #E8EBF5",
            borderRadius: "4px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.04)",
            bgcolor: "white",
            marginBottom: "6px",
            cursor: "default",
          }}
        >
          {/* Auth */}
          {showChat ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
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
                  onClick={toggleSettingHandler}
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
          ) : (
            <Box
              sx={{
                height: "517px",
                padding: "40px 24px 24px",
                textAlign: "center",
              }}
            >
              <Typography
                component="h3"
                sx={{
                  color: "#262949",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: "27px",
                }}
              >
                Your Company Support
              </Typography>
              <Typography
                sx={{
                  color: "#80829D",
                  fontSize: "1rem",
                  lineHeight: "116%",
                  marginTop: "5px",
                }}
              >
                Start chatting with our team to get support. We’re here for you
                24/7!
              </Typography>
              <Form />
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: "16px",
                    textTransform: "capitalize",
                    height: "50px",
                  }}
                  onClick={startChatHandler}
                >
                  Start Chatting
                </Button>
              </Box>
            </Box>
          )}
          {/* Conversation */}
        </Box>
        <Box sx={{ textAlign: "right" }}>
          <Fab color="primary" aria-label="customer support">
            icon
          </Fab>
        </Box>
      </Box>
    </IntercomChatSupportProvider>
  );
};
