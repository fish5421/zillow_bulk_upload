const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body;

  const content = {
    to: "peter@partnerup.online",
    from: "peter@partnerup.online",
    subject: `New Message From ${name} - ${email}`,
    text: message,
    html: `<p>${name} - ${email}</p><p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.log("ERROR", error);
    res.status(400).send("Message not sent");
  }
};
