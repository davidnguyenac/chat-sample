import styled from "@mui/material/styles/styled";
import TextField from "@mui/material/TextField";

export const Input = styled(TextField)(() => ({
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
