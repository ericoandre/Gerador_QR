import permittedChar from './utils/permittedCharacters';

const handle = async () => {
    let characters: string[]  = await permittedChar();
    let password: string = "";

    const passwordLength: number = Number(process.env.PASSWORD_LENGHT);
    for (let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random()*characters.length);
        password += characters[index]; 
    }
    return password;
}

export default handle;