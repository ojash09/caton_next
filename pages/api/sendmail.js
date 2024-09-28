import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, textMessage, htmlMessage, attachmentPath } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: { name: 'Caton Healthcare', address: process.env.USER },
        to: email,
        subject: subject,
        text: textMessage,
        html: htmlMessage,
        attachments: attachmentPath
          ? [{ filename: path.basename(attachmentPath), path: attachmentPath }]
          : [],
      });

      res.status(200).json({ success: true, message: `Email sent: ${info.messageId}` });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
