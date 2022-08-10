const nodemailer = require("nodemailer");

async function main() {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: 'example@hotmail.com',
      pass: '',
    },
  });

  let info = await transporter.sendMail({
    from: '"Nickname" <example@hotmail.com>',
    to: "example2@hotmail.com",
    subject: "Hello",
    text: "Hello world!",
    html: "<b>Hello world!</b>",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);