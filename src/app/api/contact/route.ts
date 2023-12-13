import { mailOptions, transporter } from "../../../../config/nodemailer";

export async function POST(request: Request) {

    const body = await request.body?.getReader().read()
    const bodyString = body?.value?.toString()
    if (!bodyString) return Response.json({
        message: 'errore'
    })

    try {
        await transporter.sendMail({
            ...mailOptions,
            html: `
                <h4>Nuova email da: </h4> ${JSON.parse(bodyString).name}<br />    
                <h4>email: </h4> ${JSON.parse(bodyString).email}<br />
                <h4>phon number: </h4> ${JSON.parse(bodyString).number}<br />
                <br />
                <h1> Testo email </h1><br />              
                <p>${JSON.parse(bodyString).text}</p>`,
            subject: `${JSON.parse(bodyString).subject}`
        });

        return Response.json({ success: true });
    } catch (err: any) {

        return Response.json({ message: err.message });
    }
}