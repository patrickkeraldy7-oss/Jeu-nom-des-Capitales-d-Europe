
// installer nodemailer : npm install nodemailer
const nodemailer = require('nodemailer');

async function envoyerEmail() {
    try {
        // Configuration du transport SMTP
        let transporter = nodemailer.createTransport({
            host: "", // ex: smtp.gmail.com
            port: 587,
            secure: false, // true pour 465, false pour autres ports
            auth: {
                user: "",
                pass: "" // ⚠️ utiliser un mot de passe d'application
            }
        });

        // Contenu du message
        let info = await transporter.sendMail({
            from: '"Mon App" <keraldypatrick@gmail.com>',
            to: "keraldypatrick@gmail.com",
            subject: "Test d'envoi",
            text: "Bonjour, ceci est un test d'envoi d'email en JavaScript.",
            html: "<b>Bonjour</b>, ceci est un test d'envoi d'email en <i>JavaScript</i>."
        });

        console.log("Message envoyé : %s", info.messageId);
    } catch (error) {
        console.error("Erreur lors de l'envoi :", error);
    }
}

envoyerEmail();