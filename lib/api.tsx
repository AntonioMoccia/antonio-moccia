import { FormProps } from "@/components/Contacts";

export const sendContactForm = async (data:FormProps) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data.values),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });