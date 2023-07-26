import {
  createFormController,
  deleteFormController,
  getAllFormsController,
  getFormByIdController,
  handleFormResponseController,
} from "../controllers/FormController.js";

import { Router } from "express";

const FormRouter = Router();

FormRouter.post("/", createFormController);
FormRouter.post("/response/:id", handleFormResponseController);
FormRouter.delete("/:id", deleteFormController);
FormRouter.get("/:id", getFormByIdController);
FormRouter.get("/", getAllFormsController);

export { FormRouter };
