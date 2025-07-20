import chalk from "chalk";

const promptQrCodeSchema = [
    {
        name:"link",
        description: chalk.yellow(`Digite o link para gera o QR CODE`),
    },
    {
        name:"type",
        description: chalk.yellow(`Escolha entre o tipo \n${chalk.blue('1 - Normal')}\n${chalk.blue('2 - Terminal')}\n`),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha 1 ou 2"),
        required: true
    }
]

export default promptQrCodeSchema;