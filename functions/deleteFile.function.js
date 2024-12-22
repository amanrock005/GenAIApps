import axios from "axios";
import { headers } from "../lib/headers.js";

const fileId = "file-Ac3bYiryNKf6jhXJqmWQV3";
const url = `https://api.openai.com/v1/files/${fileId}`;

export const deleteFile = async () => {
  try {
    const res = await axios.delete(url, { headers });
    console.log("file deleted successfully: ", res.data);
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
