// pages/api/sendmail.js
import nodemailer from 'nodemailer';
import validator from 'validator';
import { NextResponse } from 'next/server';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export async function POST(req) {
    try {
        const { name, family, email, phone, message } = await req.json();

        // Validation des données
        const errors = [];
        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            errors.push('Le prénom est requis et ne peut pas être vide.');
        }
        if (!family || typeof family !== 'string' || family.trim().length === 0) {
            errors.push('Le nom de famille est requis et ne peut pas être vide.');
        }
        if (!email || !validator.isEmail(email)) {
            errors.push('Un email valide est requis.');
        }
        // Validation du numéro de téléphone
        const phoneRegex = /^(\+?\d{1,3})?(\d{9,10})$/;
        if (!phone || !phoneRegex.test(phone)) {
            errors.push('Un numéro de téléphone valide est requis.');
        }
        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            errors.push('Le message est requis et ne peut pas être vide.');
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
            from: email,
            to: EMAIL_USER,
            subject: 'Nouveau message depuis mon portofolio',
            text: `
                Nom: ${name} ${family}
                Email: ${email}
                Téléphone: ${phone}
                Message:
                ${message}
            `,
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
