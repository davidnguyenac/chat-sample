import { FC, useState } from "react";

import TuneIcon from "@mui/icons-material/Tune";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";

import { styled } from "@mui/material";

// icons
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { IntercomChatSupportProvider } from "../../context";
import { ChatSupportIcon } from "../icon";

export interface SampleComponentProps {
  label?: string;
}

const CustomInput = styled("input")(({ theme }) => ({
  width: "auto",
  height: "100%",
  flex: 1,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
}));

export const SampleComponent: FC<SampleComponentProps> = ({ label }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    setIsAuth(true);
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
            minHeight: "517px",
            border: "1px solid #E8EBF5",
            borderRadius: "4px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.04)",
            bgcolor: "white",
            marginBottom: "6px",
            cursor: "default",
          }}
        >
          {/* Auth */}
          {isAuth ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateRows: "50px auto 109px 68px",
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
                height: "100%",
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
              <Box sx={{ marginTop: "24px", marginBottom: "35px" }}>
                <Typography
                  sx={{
                    fontSizse: "1rem",
                    fontWeight: 800,
                    lineHeight: "20px",
                  }}
                >
                  Get notifications for your support request
                </Typography>
                <Box sx={{ marginTop: "20px", width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px",
                      color: "#80829D",
                      bgcolor: "#F5F6FB",
                      borderRadius: "6px",
                    }}
                  >
                    <EmailIcon sx={{ color: "#B6B8D5" }} />
                    <CustomInput
                      placeholder="Email address"
                      sx={{ marginLeft: "14px" }}
                    />
                  </Box>
                </Box>
                <Divider sx={{ margin: "8px 0" }}>OR</Divider>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px",
                      color: "#80829D",
                      bgcolor: "#F5F6FB",
                      borderRadius: "6px",
                    }}
                  >
                    <PhoneIphoneIcon sx={{ color: "#B6B8D5" }} />
                    <CustomInput
                      placeholder="xxx-xxx-xxxx"
                      sx={{ marginLeft: "14px" }}
                    />
                  </Box>
                </Box>
                <Divider sx={{ margin: "8px 0" }}>OR</Divider>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: "12px",
                      color: "#80829D",
                      bgcolor: "#F5F6FB",
                      borderRadius: "6px",
                    }}
                  >
                    <TelegramIcon sx={{ color: "#B6B8D5" }} />
                    <CustomInput
                      placeholder="Telegram ID"
                      sx={{ marginLeft: "14px" }}
                    />
                  </Box>
                </Box>
                <Divider sx={{ margin: "8px 0" }}>OR</Divider>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Opt in to browser alerts</Typography>
                  <Switch inputProps={{ "aria-label": "optin" }} />
                </Box>
              </Box>
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
                  onClick={handleAuth}
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
