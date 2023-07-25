import { FormModel } from "../src/models/FormModel.js";

const createFormService = async (formName, formHeaderImage, fields) => {
  return await FormModel.create({
    formName: formName,
    formHeaderImg: formHeaderImage | "",
    fields: fields | [],
  });
};

export { createFormService };
