import nodemailer from "nodemailer";

const accountConfirmationEmail = async (data) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const { name, email, token } = data;

  await transport.sendMail({
    from: "realstate.com",
    to: email,
    subject: "Confirm your 'real state'account...",
    text: "Confirm your 'real state'account...",
    html: "<p>Hello " + name + "!</p> <br /> <a href='' >Verify account</a>",
  });

  console.log(data);
};

export { accountConfirmationEmail };
