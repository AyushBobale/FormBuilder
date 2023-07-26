import { FormModel } from "../src/models/FormModel.js";

const getAllFormsService = async () => {
  return await FormModel.find({});
};

const createFormService = async (formName, formHeaderImage, fields) => {
  return await FormModel.create({
    formName: formName,
    formHeaderImg: formHeaderImage,
    fields: fields,
  });
};

export { createFormService, getAllFormsService };
