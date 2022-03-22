const nodemailer = require("nodemailer");

const email = (mensagem, arquivos) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seu-email",
      pass: "**********",
    },
  });

  const mailOptions = {
    from: "seu-email",
    to: ["seu-email"],
    subject: "E-mail diario com os preços VMZ",
    html: mensagem,
    attachments: arquivos
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = email;
