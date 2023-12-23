import nodemailer from "nodemailer";
import { google } from "googleapis"
const email = process.env.GOOGLE_EMAIL;
const pass = process.env.GOOGLE_PASS;


const OAuth2 = google.auth.OAuth2;
const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN
  });

  const accessToken: string = await new Promise((resolve, reject) => {
    
    oauth2Client.getAccessToken((err, token) => {
      console.log(err,token);
      if (err) {
        reject("Failed to create access token :(");
      }
      if (token) {
        resolve(token);
      }
      else {
        reject("Failed to create access token :(");
      }
    });
  });




  const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
      type: "OAuth2",
      user: process.env.GOOGLE_EMAIL,
      accessToken: accessToken,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      expires: 1484314697598,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return transporter
}
export const transporter = createTransporter

export const mailOptions = {
  from: email,
  to: email,
};