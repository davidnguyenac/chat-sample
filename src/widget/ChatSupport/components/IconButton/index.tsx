import styled from "@mui/material/styles/styled";
import { default as MuiIconButton } from "@mui/material/IconButton";

export const IconButton = styled(MuiIconButton, {
  shouldForwardProp: (prop: string) => !["isOpen"].includes(prop),
})<{ isOpen?: boolean }>(({ theme }) => {
  return {};
});
