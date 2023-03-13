const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: process.env.NEXT_PUBLIC_HOST_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: `${process.env.NEXT_PUBLIC_AUTH_USER}`,
    pass: `${process.env.NEXT_PUBLIC_AUTH_PASSWORD}`
},
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: `${process.env.NEXT_PUBLIC_TO_MAIL }`, // list of receivers
    phone: req.body.phone ? req.body.phone : "",
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
  });

  res.status(200).json(info.messageId);
}
