import { headers } from "../lib/headers.js";
import axios from "axios";

const url = "https://api.openai.com/v1/models";

export const getModels = async () => {
  try {
    const res = await axios.get(url, { headers });
    console.log("available models: ", JSON.stringify(res.data, null, 2));
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
