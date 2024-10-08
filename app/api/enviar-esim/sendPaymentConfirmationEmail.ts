import { PaymentEmailInformation } from '@/app/components/Types/TPaymentEmailInformation';
import { paymentConfirmationEmail } from './payment-confirmation-email';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';


export async function sendPaymentConfirmationEmail(paymentEmailInformation: PaymentEmailInformation) {
    //imagenes para el email (inline)
    const faviconPath = path.join(process.cwd(), '/public/media/favicon.png')
    const mujerConTarjetaCreditoPath = path.join(process.cwd(), '/public/media/email/mujer-con-tarjeta-credito.png')
    const facebookPath = path.join(process.cwd(), '/public/media/email/facebook-svgrepo-com.png');
    const instagramPath = path.join(process.cwd(), '/public/media/email/instagram-svgrepo-com.png');
    const youtubePath = path.join(process.cwd(), '/public/media/email/youtube-svgrepo-com.png');
    const twitterPath = path.join(process.cwd(), '/public/media/email/twitter-svgrepo-com.png');
    const tiktokPath = path.join(process.cwd(), '/public/media/email/tiktok-svgrepo-com.png');

    const imagePaths = [facebookPath, instagramPath, youtubePath, twitterPath, tiktokPath, faviconPath, mujerConTarjetaCreditoPath];

    //para que la clave de mailgun este bien guardada
    const mailgunAPIKey = process.env.MAILGUN_API_KEY;
    if (!mailgunAPIKey) {
        console.log('mailgunAPIKey is not set');
    }
    else {

        //crear nuevo email
        const mailgun = new Mailgun(formData);
        const mg = mailgun.client({
            username: 'api',
            key: mailgunAPIKey
        });
        try {
            //leer los archivos de todos los adjuntos (imagenes)
            let files = [];
            for (const imagePath of imagePaths) {
                const file = {
                    filename: path.basename(imagePath),
                    data: await fs.promises.readFile(imagePath)
                }
                files.push(file);
            }
        
            const subject = `Orden #${paymentEmailInformation.orderNumber} confirmado`;
            const text = `Orden #${paymentEmailInformation.orderNumber} confirmado`

            //orderEmail es una funcion que toma como parametros toda la
            //informacion necesaria para el email y retorna el html del email como string
            const html = paymentConfirmationEmail(paymentEmailInformation)
            mg.messages.create('viajaresim.com', {
                from: "ViajareSIM <noreply@viajaresim.com>",
                to: [paymentEmailInformation.email],  //mandar email al correo del cliente
                subject: subject,   //asunto
                text: text,   //texto cualquiera por ahora
                html: html, //html recibido por la funcion orderEmail
                inline: files //todos las imagenes que son insertadas en el html
            })
                .then(msg => console.log(msg)) // logs NextResponse data
                .catch(err => console.log(err)); // logs any error
        } catch (error) {
            console.error(error);
        }
    }
    return NextResponse.json({ message: 'Email sent' })

}