import prompt from "prompt";

import handle from "./handler";

// conf promptQrcode
import confPromptQrcode from "../../promptsSchema/qrcodeSchema";

const createQrCode = async () => {
    prompt.get(confPromptQrcode,  handle);
    prompt.start();
}

export default createQrCode;