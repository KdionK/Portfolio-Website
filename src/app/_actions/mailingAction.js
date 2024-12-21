"use server";
import * as z from "zod";
import { sendMail } from "../_data/mailing";
export const mailingAction = async (formdata) => {
  const emailParser = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    message: z.string().nonempty(),
  });

  try {
    const data = {
      name: formdata.get("name"),
      email: formdata.get("email"),
      message: formdata.get("message"),
    };
    emailParser.parse(data);
    await sendMail(formdata);
  } catch (error) {
    return error.issues;
  }
};
