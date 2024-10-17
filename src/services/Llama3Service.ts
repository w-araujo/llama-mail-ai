import { ILlama3Service, IModelResponse } from "interfaces/llama3";

class Llama3Service implements ILlama3Service {
  async formattedMessage(modelResponse: Array<IModelResponse>): Promise<any> {
    const modelResponseMap = modelResponse.map((item) => {
      return item.response;
    });

    const textJoin = modelResponseMap.join("");

    const textFormatted = textJoin.replace(/\n\n/g, "\n");

    return textFormatted;
  }
}

export { Llama3Service };
