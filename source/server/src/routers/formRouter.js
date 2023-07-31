import {
  createFormController,
  createFormNController,
  deleteFormController,
  deleteFormNController,
  getAllFormsController,
  getAllFormsNController,
  getFormByIdController,
  getFormByIdNController,
  getFormResponesesController,
  handleFormResponseController,
  handleFormResponseNController,
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
FormRouterNew.post("/response/:id", handleFormResponseNController);
FormRouterNew.delete("/:id", deleteFormNController);
FormRouterNew.get("/:id", getFormByIdNController);
FormRouterNew.get("/", getAllFormsNController);

export { FormRouter, FormRouterNew };
