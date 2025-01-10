const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load .env file

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!!" });
});

const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASS,
    },
});

contactEmail.verify((error, success) => {
    if (error) {
        console.error('[ERROR] Email server setup failed:', error);
    } else {
        console.log('[INFO] Email server is ready to send messages.');
    }
});

app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    const mail = {
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_ADDRESS,
        subject: `New contact submission: ${subject}`,
        html: `
            <p><b>New Submission</b></p>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>The following is a message from the submission:</p>
            <p>${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error('[ERROR] Failed to send email:', error);
            res.status(500).json({ error: 'Failed to send message.' });
        } else {
            console.log('[INFO] Message sent successfully.');
            res.status(200).json({ code: 200, status: "Message sent." });
        }
    });
});

app.listen(PORT, () => {
    console.log(`[INFO] Server is online on port: ${PORT}`);
});
