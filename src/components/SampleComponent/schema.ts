import * as yup from "yup";

export const registSchema = yup.object({
  email: yup.string().email("Invalid email"),
  phoneNumber: yup.string(),
  telegramId: yup.string(),
});
