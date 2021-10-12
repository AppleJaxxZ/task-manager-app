require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const sendgridAPIKEY = process.env.SEND_GRID_API_KEY;

sgMail.setApiKey(sendgridAPIKEY);
const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "smackanalex@gmail.com",
    subject: "Thank you for using the task app",
    text: `Welcome ${name}, Please let me know how your enjoying the app. `,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "smackanalex@gmail.com",
    subject: "TaskApp End Of Service",
    text: `We're sorry to see you go ${name}, we hope TaskApp service was exceptional in providing you all 
       of your task tracking needs.  If there is anything that would have kept you happier with TaskApp
       please let us know how we can better our service moving forward.  Thank you! `,
  });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
