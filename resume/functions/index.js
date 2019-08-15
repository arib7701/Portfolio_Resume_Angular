const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
environment = 'environment.js';

//Parameters
const user_name = environment.user_name;
const refresh_token = environment.refresh_token;
const access_token = environment.access_token;
const client_id = environment.client_id;
const client_secret = environment.client_secret;

var auth = {
  type: 'oauth2',
  user: user_name,
  clientId: client_id,
  clientSecret: client_secret,
  refreshToken: refresh_token
};

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth
});

exports.sendContactMessage = functions.database
  .ref('/messages/{pushKey}')
  .onWrite((change, context) => {
    if (change.before.exists() || !change.after.exists()) {
      //Do nothing if data is edited or deleted
      console.log('Message edited or deleted - skip');
      return;
    }

    const val = change.after.val();

    const mailOptions = {
      to: 'mawusicharles@gmail.com',
      subject: `Website Contact from ${val.name}`,
      html: val.html
    };

    transporter
      .sendMail(mailOptions)
      .then(() => console.log('Email sent.'))
      .catch(error =>
        console.error('There was an error while sending the email:', error)
      );
  });
