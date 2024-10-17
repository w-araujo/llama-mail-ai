import { IEmail, IEmailService } from "../interfaces/email";
import nodemailer from "nodemailer";
import "dotenv/config";
import { template1 } from "../templates/template1";

class EmailService implements IEmailService {
  async sendEmail(email: IEmail): Promise<string> {
    if (!email) {
      throw new Error("Informe the email to sent!");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
      logger: true,
    });

    const info = await transporter.sendMail({
      from: `"Nodemailer Foo Koch 👻: ${email.from}" <${process.env.NODEMAILER_USER}>`,
      to: email.to,
      subject: email.subject,
      text: email.text,
      html: template1(email.html),
    });

    if (!info) {
      throw new Error("invalid credentials, email not sent!");
    }

    return info.messageId;
  }
}

export { EmailService };
