import { ILlama3Factory } from "../interfaces/llama3";
import { Llama3 } from "../api/Llama3";
import { IPrompt } from "../interfaces/llama3";

class Llama3Factory implements ILlama3Factory {
  async createMessage(prompt: IPrompt) {
    return await new Llama3().createPersonalizedMessage(prompt);
  }
}

export { Llama3Factory };
