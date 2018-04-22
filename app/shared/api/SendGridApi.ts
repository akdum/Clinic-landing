import { IMailBody } from "../interfaces/IMailBody";
import * as WebRequest from 'web-request';

export class SendGridApi {
    static GetQueryString(userId: string, api_key: string, to: string, subject: string, text: string, from: string): string {
        return `api_user=${encodeURI(userId)}&api_key=${encodeURI(api_key)}&to=${encodeURI(to)}&subject=${(subject)}&text=${encodeURI(text)}&from=${encodeURI(from)}`;
    }
    static GetUrl(text: string): string {
        return `https://api.sendgrid.com/api/mail.send.json?${this.GetQueryString(process.env.SEND_GRID_USER_ID, 
                                                                                  process.env.SEND_GRID_API_KEY, 
                                                                                  process.env.SEND_GRID_TO,
                                                                                  process.env.SEND_GRID_SUBJECT,
                                                                                  text,
                                                                                  process.env.SEND_GRID_FROM)}`;
    }
    static async SendMail(data: IMailBody) {
        const text = `Имя:_${data.name};_Телефон:_${data.phone};_Почта:_${data.email}`;
        WebRequest.get(this.GetUrl(text));        
    }
} 