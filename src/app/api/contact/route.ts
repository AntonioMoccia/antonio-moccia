import { Resend } from 'resend'
import ContactMe from '@/components/Emails/ContactMe';

export async function POST(request: Request) {

    const bodyRequest = await request.body?.getReader().read()
    const bodyString = bodyRequest?.value?.toString()
    const body = JSON.parse(bodyString!)
    console.log(body);

    const { name, number, email, subject, object } = body

    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        resend.emails.send({
            from: 'website@resend.dev',
            subject,
            to: "moccia.ant@gmail.com",
            react: ContactMe({
                name, tel:number, from: email, idea: object
            })
        })
        return Response.json({ success: true });
    } catch (err: any) {
        console.log(err);
        
        return Response.json({ success: false });
    }
}