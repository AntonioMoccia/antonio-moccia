import { FormProps } from "@/components/Contacts";

export const sendContactForm = async (data: FormProps) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data.values),
    headers: { "Content-Type": "application/html", Accept: "application/html" },
  }).then((res) => {
    return res
  }).catch(error => {
    return error
  });