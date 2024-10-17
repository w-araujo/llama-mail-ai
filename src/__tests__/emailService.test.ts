import { EmailService } from "../services/EmailService";
import { IEmail } from "../interfaces/email";
import nodemailer from "nodemailer";
import { template1 } from "../templates/template1";

jest.mock("nodemailer");

describe("EmailService", () => {
  let emailService: EmailService;
  let email: IEmail;

  beforeEach(() => {
    emailService = new EmailService();
    email = {
      from: "test@example.com",
      to: ["receiver@example.com"],
      subject: "Test Subject",
      text: "Test text",
      html: "<b>Test HTML</b>",
    };
    process.env.NODEMAILER_USER = "test@mail.com";
  });

  it("should send email successfully", async () => {
    const sendMailMock = jest
      .fn()
      .mockResolvedValue({ messageId: "messageId123" });
    const createTransportMock = nodemailer.createTransport as jest.Mock;
    createTransportMock.mockReturnValue({ sendMail: sendMailMock });

    const messageId = await emailService.sendEmail(email);

    expect(messageId).toBe("messageId123");
    expect(sendMailMock).toHaveBeenCalledWith(
      expect.objectContaining({
        from: `"Nodemailer Foo Koch 👻: test@example.com" <test@mail.com>`,
        to: email.to,
        subject: email.subject,
        text: email.text,
        html: template1(email.html),
      })
    );
  });

  it("should throw error when email is not provided", async () => {
    await expect(emailService.sendEmail(null)).rejects.toThrow(
      "Informe the email to sent!"
    );
  });

  it("should throw error when email sending fails", async () => {
    const sendMailMock = jest
      .fn()
      .mockRejectedValue(new Error("invalid credentials, email not sent!"));
    const createTransportMock = nodemailer.createTransport as jest.Mock;
    createTransportMock.mockReturnValue({ sendMail: sendMailMock });

    await expect(emailService.sendEmail(email)).rejects.toThrow(
      "invalid credentials, email not sent!"
    );
  });
});
