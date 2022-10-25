import { FC, useMemo } from "react";

import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

import { Input } from "../Input";
import { useChatSupportProvider } from "../../../../context";
import { Chat } from "./Chat";
import { ChatPopupStep } from "../../types";

export const Form: FC = () => {
  const {
    states: { step },
  } = useChatSupportProvider();

  const isSetting = useMemo(() => step === ChatPopupStep.Settings, [step]);

  return (
    <Box>
      <Typography
        component="p"
        sx={{
          fontSize: "16px",
          lineHeight: "20px",
          // TODO update color midnight in theme
          color: "#262949",
          textAlign: "center",
          letterSpacing: "0.01em",
          marginTop: "32px",
          fontWeight: 800,
        }}
      >
        Get notifications for your support request
      </Typography>
      <Box sx={{ marginTop: "20px" }} />
      {isSetting && (
        <Typography
          sx={{
            color: "#1448F3",
            fontSize: "13px",
            fontWeight: 800,
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          Resend Verification
        </Typography>
      )}
      <Input
        placeholder="Email address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
      />
      <Divider sx={{ margin: "8px 0", fontSize: "12px", color: "#80829D" }}>
        OR
      </Divider>
      <Input
        placeholder="xxx-xxx-xxxx"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIphoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <Divider sx={{ margin: "8px 0", fontSize: "12px", color: "#80829D" }}>
        OR
      </Divider>
      {isSetting && (
        <Typography
          sx={{
            color: "#1448F3",
            fontSize: "13px",
            fontWeight: 800,
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          Verify ID
        </Typography>
      )}
      <Input
        placeholder="Telegram ID"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TelegramIcon />
            </InputAdornment>
          ),
        }}
      />
      <Divider sx={{ margin: "8px 0", fontSize: "12px", color: "#80829D" }}>
        OR
      </Divider>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "12px",
        }}
      >
        <Typography
          sx={{
            color: "#262949",
            fontSize: "14px",
            lineHeight: "1rem",
            fontWeight: 500,
          }}
        >
          Opt in to browser alerts
        </Typography>
        <Switch inputProps={{ "aria-label": "optin" }} />
      </Box>
    </Box>
  );
};
