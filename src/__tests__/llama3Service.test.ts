import { Llama3Service } from "../services/Llama3Service";
import { IModelResponse } from "../interfaces/llama3";

describe("Llama3Service", () => {
  let llama3Service: Llama3Service;
  let modelResponse: IModelResponse[];

  beforeEach(() => {
    llama3Service = new Llama3Service();
    modelResponse = [
      {
        model: "model1",
        created_at: "2023-10-16",
        response: "First part\n\n",
        done: false,
      },
      {
        model: "model2",
        created_at: "2023-10-16",
        response: "Second part\n\n",
        done: false,
      },
      {
        model: "model3",
        created_at: "2023-10-16",
        response: "Third part\n",
        done: true,
      },
    ];
  });

  it("should format message correctly", async () => {
    const result = await llama3Service.formattedMessage(modelResponse);

    expect(result.trim()).toBe("First part\nSecond part\nThird part");
  });

  it("should handle empty response", async () => {
    modelResponse = [];
    const result = await llama3Service.formattedMessage(modelResponse);

    expect(result).toBe("");
  });
});
