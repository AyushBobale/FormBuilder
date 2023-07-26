import {
  createFormController,
  deleteFormController,
  getAllFormsController,
  getFormByIdController,
  getFormResponesesController,
  handleFormResponseController,
} from "../controllers/FormController.js";

import { Router } from "express";

const FormRouter = Router();

FormRouter.post("/", createFormController);
FormRouter.get("/response/:id", getFormResponesesController);
FormRouter.post("/response/:id", handleFormResponseController);
FormRouter.delete("/:id", deleteFormController);
FormRouter.get("/:id", getFormByIdController);
FormRouter.get("/", getAllFormsController);

export { FormRouter };
