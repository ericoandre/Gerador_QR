import prompt from "prompt";

// conf prompt 
import confPrompt from "./promptsSchema/promptSchema";

// services
import createQrCode from "./services/qrTerminal/create";
import createPassword from "./services/password/create";

// Função principal assíncrona
(async function main  () {
    prompt.get(confPrompt, async (err, choose)=>{
        if(choose.select == '1' ) await createQrCode();
        if(choose.select == '2' ) await createPassword();
    });
    prompt.start();
})();