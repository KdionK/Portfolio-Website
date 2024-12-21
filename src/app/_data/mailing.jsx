"use server";
import emailjs from "emailjs-com";
import { revalidatePath } from "next/cache";

export const sendMail = async (data) => {
  await emailjs
    .sendForm("service_agfngrm", "template_o6c320w", data, "l1Sxl4FfXOm593Hn6")
    .then(
      () => {
        console.log("SUCCESS!");
        revalidatePath("/");
      },
      (error) => {
        console.log(error.text);
      }
    );
};
