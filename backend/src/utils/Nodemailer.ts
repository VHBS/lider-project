import nodemailer from 'nodemailer';
import { google } from 'googleapis';

require('dotenv').config();

const { OAuth2 } = google.auth;

const {
  NODEMAILER_USER,
  NODEMAILER_CLIENT_ID,
  NODEMAILER_CLIENT_SECRET,
  NODEMAILER_CLIENT_REFRESH_TOKEN,
  NODEMAILER_CLIENT_ACCESS_TOKEN,
} = process.env;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const OAuth2Client = new OAuth2(NODEMAILER_CLIENT_ID, NODEMAILER_CLIENT_SECRET, OAUTH_PLAYGROUND);

OAuth2Client.setCredentials({ refresh_token: NODEMAILER_CLIENT_REFRESH_TOKEN });

export default class Nodemailer {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: NODEMAILER_USER,
        clientId: NODEMAILER_CLIENT_ID,
        clientSecret: NODEMAILER_CLIENT_SECRET,
        refreshToken: NODEMAILER_CLIENT_REFRESH_TOKEN,
        accessToken: NODEMAILER_CLIENT_ACCESS_TOKEN,
      },
    });
  }

  public async createAccount(emailTo: string) {
    const mailSent = await this.transporter.sendMail({
      text: 'CONSEGUI BRUNÃO!!!!!!',
      subject: 'Confirmação de cadastro',
      from: `Victor Schlichting <${NODEMAILER_USER}>`,
      to: emailTo,
    });
    console.log(mailSent);
  }
}
