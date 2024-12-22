import axios from "axios";
import { headers } from "../lib/headers.js";

const fileId = "file-XdV4ajYpN1uC3TZsK9v4LN";
const model = "gpt-4o-mini-2024-07-18";
const suffix = "fine-tuned-model";

const url = "https://api.openai.com/v1/fine-tunes";

const data = {
  training_file: fileId,
  model: model,
  suffix: suffix,
};

export const fineTune = async () => {
  try {
    const res = await axios.post(url, data, { headers });
    console.log("fine-tuning started successfully ", res.data);
  } catch (err) {
    if (err.response) {
      console.error(
        "error response: ",
        JSON.stringify(err.response.data, null, 2)
      );
    } else {
      console.error("error: ", err.message);
    }
  }
};
