import axios from "axios";
import { headers } from "../lib/headers.js";

const url = "https://api.openai.com/v1/chat/completions";

const payload = {
  model: "gpt-4o-mini",
  messages: [
    {
      role: "user",
      content: "what is the capital of India?",
    },
  ],
};

export const callChatGPT = async () => {
  try {
    const res = await axios.post(url, payload, { headers });
    console.log("Response:", JSON.stringify(res.data, null, 2));
  } catch (err) {
    if (err.response) {
      console.error(
        "Error Response:",
        JSON.stringify(err.response.data, null, 2)
      );
    } else {
      console.error("Error: ", err.message);
    }
  }
};
