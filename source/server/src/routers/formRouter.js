import {
  createFormController,
  createFormNController,
  deleteFormController,
  getAllFormsController,
  getFormByIdController,
  getFormResponesesController,
  handleFormResponseController,
} from "../controllers/FormController.js";

import { Router } from "express";

const FormRouter = Router();
const FormRouterNew = Router();

FormRouter.post("/", createFormController);
FormRouter.get("/response/:id", getFormResponesesController);
FormRouter.post("/response/:id", handleFormResponseController);
FormRouter.delete("/:id", deleteFormController);
FormRouter.get("/:id", getFormByIdController);
FormRouter.get("/", getAllFormsController);

FormRouterNew.post("/", createFormNController);
FormRouterNew.get("/response/:id", getFormResponesesController);
FormRouterNew.post("/response/:id", handleFormResponseController);
FormRouterNew.delete("/:id", deleteFormController);
FormRouterNew.get("/:id", getFormByIdController);
FormRouterNew.get("/", getAllFormsController);

export { FormRouter, FormRouterNew };
