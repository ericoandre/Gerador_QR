import chalk from "chalk";
import handle from "../password/handler";

const createPassword = async ( ) => {
    console.log(chalk.green("Password"));
    const password = await handle();
    console.log(chalk.blue(password));
}

export default createPassword;