import { Request, Response } from "express";
import { ILlama3Service, ILlama3Factory } from "../interfaces/llama3";

class Llama3Controller {
  constructor(
    private readonly llama3Service: ILlama3Service,
    private readonly llama3Factory: ILlama3Factory
  ) {}

  async createMessage(req: Request, res: Response): Promise<Response> {
    try {
      const { prompt } = req.body;
      const createdMessage = await this.llama3Factory.createMessage(prompt);
      // @ts-ignore
      const message = await this.llama3Service.formattedMessage(createdMessage);
      return res.status(201).json(message);
    } catch (error) {
      return res.status(400).json({ error: (error as Error).message });
    }
  }
}

export { Llama3Controller };
