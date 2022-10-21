import { FC } from "react";

import Box from "@mui/material/Box";

import { IntercomChatSupportProvider } from "../../context";

export const IntercomChatSupport: FC = () => {
  return (
    <IntercomChatSupportProvider>
      <Box
        sx={{
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #1448F3",
          position: "absolute",
          right: "30px",
          bottom: "30px",
        }}
      >
        C
      </Box>
    </IntercomChatSupportProvider>
  );
};
