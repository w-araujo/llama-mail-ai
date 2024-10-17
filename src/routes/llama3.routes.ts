import { Router } from "express";
import { Llama3Service } from "../services/Llama3Service";
import { Llama3Controller } from "../controllers/Llama3Controller";
import { Llama3Factory } from "../factories/Llama3Factory";

const llama3Service = new Llama3Service();
const llama3Factory = new Llama3Factory();
const llama3Controller = new Llama3Controller(llama3Service, llama3Factory);
const llama3Router = Router();

// @ts-ignore
llama3Router.post("/createMessage", (req, res) =>
  llama3Controller.createMessage(req, res)
);

export { llama3Router };
