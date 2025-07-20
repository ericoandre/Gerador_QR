import prompt from "prompt";

import handle from "./handler";

// conf promptQrcode
import confPromptQrcode from "../../prompts/qrcodeSchema";

const createQrCode = async () => {
    prompt.get(confPromptQrcode,  handle);
    prompt.start();
}

export default createQrCode;