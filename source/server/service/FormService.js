import { FormModel } from "../src/models/FormModel.js";

const getFormByIdService = async (id) => {
  return await FormModel.findById(id);
};

const getAllFormsService = async () => {
  return await FormModel.find({});
};

const deleteFormService = async (formId) => {
  return await FormModel.findByIdAndDelete(formId);
};

const createFormService = async (formName, formHeaderImage, fields) => {
  return await FormModel.create({
    formName: formName,
    formHeaderImg: formHeaderImage,
    fields: fields,
  });
};

export {
  createFormService,
  getAllFormsService,
  deleteFormService,
  getFormByIdService,
};
