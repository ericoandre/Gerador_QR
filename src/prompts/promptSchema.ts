import chalk from "chalk";

const promptSchema = [
    {
        name:"select",
        description: chalk.yellow.bold(`Escolha a ferramenta \n${chalk.green("(1 - QRCODE)")}\n${chalk.green("(2 - PASSWORD)")}\n`),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha 1 ou 2"),
        required: true
    }
];

export default promptSchema;