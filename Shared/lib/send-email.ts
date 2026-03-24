import { Resend } from 'resend';
import { PayOrderTemplate } from '../../components/email-template/pay-order';

export const sendEmail = async (subject: string, template: React.ReactNode) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['Viktor2006@yandex.ru'],
        subject: 'Hello world',
        react: template,
    });

    if (error) {
        throw error;
    }

    return data;
};
