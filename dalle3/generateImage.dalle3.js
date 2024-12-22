import axios from "axios";
import fs from "fs";
import { headers } from "../lib/headers.js";

const url = "https://api.openai.com/v1/images/generations";

const data = {
  prompt: "a bull dog driving a car in new york",
  n: 1,
  size: "1024x1024",
};

export const generateImage = async () => {
  try {
    const res = await axios.post(url, data, { headers });
    const imageUrl = res.data.data[0].url;
    console.log("Generated Image URL: ", imageUrl);
    console.log("generate Image api response", res.data);
    //to download the image
    const imageRes = await axios.get(imageUrl, { responseType: "stream" });
    const filePath = "./generated_image.jpg";
    imageRes.data.pipe(fs.createWriteStream(filePath));
    console.log(`image saved to ${filePath}`);
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
