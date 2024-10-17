import axios from "axios";
import "dotenv/config";
import { IPrompt } from "../interfaces/llama3";

axios.defaults.baseURL = process.env.LLAMA3_API_URL;

class Llama3 {
  async createPersonalizedMessage(prompt: IPrompt) {
    try {
      if (!prompt) {
        throw new Error("Inform the prompt");
      }

      const response = await axios.post("/generate", {
        model: process.env.LLAMA3_MODEL,
        prompt,
      });

      let jsonString = response.data;
      let jsonParts = jsonString
        .split("\n")
        .filter((part) => part.trim() !== "");
      let parsedPart = [];

      jsonParts.forEach((part) => {
        try {
          parsedPart.push(JSON.parse(part));
        } catch (error) {
          console.error("Erro ao analisar JSON:", error);
        }
      });

      return parsedPart;
    } catch (error) {
      console.error("Erro ao chamar API", error);
      console.error((error as Error).message);
      throw error;
    }
  }
}

export { Llama3 };
