require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'localhost',
  port: Number(process.env.SMTP_PORT) || 1025,
  secure: false
});

app.get('/api/health', (request, response) => {
  response.status(200).json({
    message: 'Le serveur fonctionne correctement.'
  });
});

app.post('/api/contact', async (request, response) => {

  const {
    name,
    subject,
    message,
    recipient
  } = request.body;

  if (
    !name ||
    !subject ||
    !message ||
    !recipient
  ) {
    return response.status(400).json({
      message: 'Tous les champs sont obligatoires.'
    });
  }

  try {

    await transporter.sendMail({
      from: '"Trouve ton artisan" <contact@trouve-ton-artisan.fr>',
      to: recipient,
      replyTo: 'visiteur@example.com',
      subject: `[Trouve ton artisan] ${subject}`,
      text: `
Nom : ${name}

Message :
${message}
      `.trim(),
      html: `
        <h1>Nouveau message</h1>

        <p>
          <strong>Nom :</strong>
          ${name}
        </p>

        <p>
          <strong>Objet :</strong>
          ${subject}
        </p>

        <p>
          <strong>Message :</strong>
        </p>

        <p>
          ${message}
        </p>
      `
    });

    return response.status(200).json({
      message: 'Votre message a bien été envoyé.'
    });

  } catch (error) {

    console.error(
      'Erreur pendant l’envoi du message :',
      error
    );

    return response.status(500).json({
      message: 'Le message n’a pas pu être envoyé.'
    });

  }

});

app.listen(PORT, () => {
  console.log(
    `Serveur démarré sur http://localhost:${PORT}`
  );
});