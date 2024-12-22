import { generateImage } from "./dalle3/generateImage.dalle3.js";
import { callChatGPT } from "./functions/callChatGPT.function.js";
import { deleteFile } from "./functions/deleteFile.function.js";
import { fineTune } from "./functions/fineTune.function.js";
import { getModels } from "./functions/getModels.function.js";
import { getUsage } from "./functions/getUsage.function.js";
import { uploadFile } from "./functions/uploadFile.function.js";

// callChatGPT();
// getModels();
// getUsage();
// uploadFile();
// deleteFile();

//  "id": "file-XdV4ajYpN1uC3TZsK9v4LN"
// fineTune();

generateImage();
