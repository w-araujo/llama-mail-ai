import { Router } from "express";
import { EmailService } from "../services/EmailService";
import { EmailController } from "../controllers/EmailController";
import { EmailFactory } from "../factories/EmailFactory";
import { LoggerFactory } from "../factories/LoggerFactory";

const emailService = new EmailService();
const emailFactory = new EmailFactory();
const loggerFactory = new LoggerFactory();
const emailController = new EmailController(
  emailService,
  emailFactory,
  loggerFactory
);
const emailRouter = Router();

// @ts-ignore
emailRouter.post("/send", async (req, res) =>
  emailController.sendEmail(req, res)
);

export { emailRouter };
