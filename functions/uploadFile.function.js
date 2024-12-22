import axios from "axios";
import { headers } from "../lib/headers.js";
import fs from "fs";
import FormData from "form-data";

const url = "https://api.openai.com/v1/files";
const filePath = "./training-data.jsonl";
const purpose = "fine-tune";

// "message": "'fine-tuning' is not one of ['fine-tune', 'assistants', 'batch', 'user_data', 'vision', 'evals'] - 'purpose'"

export const uploadFile = async () => {
  try {
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));
    form.append("purpose", purpose);
    const formHeaders = form.getHeaders();
    const allHeaders = { ...headers, ...formHeaders };

    const res = await axios.post(url, form, {
      headers: allHeaders,
    });
    console.log(
      "File uploaded successfully: ",
      JSON.stringify(res.data, null, 2)
    );
  } catch (err) {
    if (err.response) {
      console.error(
        "Error Response: ",
        JSON.stringify(err.response.data, null, 2)
      );
    } else {
      console.error("Error: ", err.message);
    }
  }
};
