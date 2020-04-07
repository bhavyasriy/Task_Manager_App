const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bhavyasri.y@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "bhavyasri.y@gmail.com",
    subject: "Sorry to see you go!",
    text: `GoodBye, ${name}. I hope to see you again. Let me know your feedback using the application.`,
  });
};
module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

// sgMail.send({
//   to: "bhavyasri.y@gmail.com",
//   from: "bhaavyasri.y@gmail.com",
//   subject: "First",
//   text: "hiii",
// });
