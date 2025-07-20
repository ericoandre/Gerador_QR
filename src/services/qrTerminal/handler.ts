import chalk from "chalk";
import qr from "qrcode-terminal";

const handle = async (err: any, result: any) => {
    if(err){
        console.log(chalk.red('error on application!'));
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        qrcode
        console.log(chalk.green("QR CODE gerado com sucesso:\n"));
        console.log(chalk.blue(qrcode));
    });
}

export default handle;