import { FC, useMemo } from "react";

import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

import { useChatSupportProvider } from "../../../../context";

import { ChatPopupStep } from "../../types";

import { Chat } from "./Chat";
import { Greeting } from "./Greeting";
import { Settings } from "./Settings";

const renderStep = (type: ChatPopupStep) => {
  switch (type) {
    case ChatPopupStep.Greeting:
      return <Greeting />;

    case ChatPopupStep.Chat:
      return <Chat />;

    case ChatPopupStep.Settings:
      return <Settings />;

    default:
      return null;
  }
};

export const ChatPopup: FC = () => {
  const theme = useTheme();

  const {
    states: { step },
  } = useChatSupportProvider();
  console.log("🚀 ~ file: index.tsx ~ line 32 ~ step", step);

  const stepComponent = useMemo(() => renderStep(step), [step]);

  return (
    <Box
      sx={{
        width: "364px",
        minHeight: "519px",
        border: `1px solid #E8EBF5`,
        borderRadius: "4px",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.04)",
        marginBottom: "5px",
      }}
    >
      {stepComponent}
    </Box>
  );
};
