interface IEmailTo {
    nome: string;
    email: string;
}

interface IEmailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to:IEmailTo; 
    message: IEmailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService{
    sendMail({to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.nome} : ${message.subject}`);
    }
}

export default EmailService;