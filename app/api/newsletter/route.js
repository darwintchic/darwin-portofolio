// pages/api/sendmail.js
import nodemailer from 'nodemailer';
import validator from 'validator';
import { NextResponse } from 'next/server';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export async function POST(req) {
    try {
        const { email } = await req.json();

        // Validation des données
        const errors = [];
      
        if (!email || !validator.isEmail(email)) {
            errors.push('Un email valide est requis.');
        }
      
        // Si des erreurs sont trouvées, les retourner
        if (errors.length > 0) {
            return NextResponse.json({ errors }, { status: 400 });
        }

        // Configuration de nodemailer pour envoyer le mail
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
            authMethod: 'LOGIN', // Spécification de la méthode d'authentification
        });

        // Contenu du mail à envoyer
        const mailOptions = {
            from: EMAIL_USER,
            to: EMAIL_USER,
            subject: 'Abonnements newsletter depuis mon portofolio',
            text: `Email: ${email}`,
        };

        // Envoi du mail
        await transporter.sendMail(mailOptions);

        // Réponse si tout s'est bien passé
        return NextResponse.json({ message: 'Email envoyé avec succès.' });

    } catch (error) {
        console.error('Error processing POST request:', error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    }
}
