interface IPrompt {
  prompt: string;
}

interface ILlama3Service {
  formattedMessage(modelResponse: object[]): Promise<any>;
}

interface ILlama3Factory {
  createMessage(prompt: IPrompt);
}

interface IModelResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

export { IPrompt, ILlama3Service, ILlama3Factory, IModelResponse };
