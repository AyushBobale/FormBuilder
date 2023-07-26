import {
  createFormController,
  getAllFormsController,
} from "../controllers/FormController.js";

import { Router } from "express";

const FormRouter = Router();

FormRouter.post("/", createFormController);
FormRouter.get("/", getAllFormsController);

export { FormRouter };
