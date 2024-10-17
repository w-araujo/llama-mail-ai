import { IEmail } from "interfaces/email";

class Email implements IEmail {
  public from: string;
  public to: string[];
  public subject: string;
  public text: string;
  public html: string;

  constructor(
    from: string,
    to: string[],
    subject: string,
    text: string,
    html: string
  ) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.html = html;
  }
}

export { Email };
