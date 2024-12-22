import axios from "axios";
import { headers } from "../lib/headers.js";

const url = "https://api.openai.com/v1/usage";

export const getUsage = async () => {
  try {
    const queryParams = { date: "2024-12-22" };
    const res = await axios.get(url, { headers, params: queryParams });
    console.log("API usage data: ", JSON.stringify(res.data, null, 2));
  } catch (err) {
    if (err.response) {
      console.error(
        "error response : ",
        JSON.stringify(err.response.data, null, 2)
      );
    } else {
      console.error("error: ", err.message);
    }
  }
};
