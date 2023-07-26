import {
  createFormController,
  deleteFormController,
  getAllFormsController,
  getFormByIdController,
} from "../controllers/FormController.js";

import { Router } from "express";

const FormRouter = Router();

FormRouter.post("/", createFormController);
FormRouter.delete("/:id", deleteFormController);
FormRouter.get("/:id", getFormByIdController);
FormRouter.get("/", getAllFormsController);

export { FormRouter };
