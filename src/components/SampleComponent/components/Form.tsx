import { FC } from "react";

import {
  Box,
  Divider,
  FormControl,
  InputAdornment,
  styled,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const CustomInputV2 = styled(TextField)(() => ({
  "&": {
    width: "100%",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#F5F6FB",
    borderStyle: "none",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
  },
  "& input": {
    padding: "12px 14px 12px 0",
    "&::placeholder": {
      fontSize: "14px",
      color: "#80829D",
    },
  },
  "& .MuiInputAdornment-outlined": {
    color: "#B6B8D5",
  },
  "& .MuiOutlinedInput-root:hover": {
    outline: "none",
    border: "none",
  },
}));

const Form: FC = () => {
  return (
    <FormControl>
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
          <CustomInputV2
            id="input-with-icon-adornment"
            className="customInput"
            placeholder="Email address"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Divider sx={{ margin: "8px 0" }}>OR</Divider>
        <Box sx={{ width: "100%" }}>
          <CustomInputV2
            id="input-with-icon-adornment"
            className="customInput"
            placeholder="xxx-xxx-xxxx"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Divider sx={{ margin: "8px 0" }}>OR</Divider>
        <Box sx={{ width: "100%" }}>
          <CustomInputV2
            id="input-with-icon-adornment"
            className="customInput"
            placeholder="Telegram ID"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TelegramIcon />
                </InputAdornment>
              ),
            }}
          />
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
    </FormControl>
  );
};

export default Form;
