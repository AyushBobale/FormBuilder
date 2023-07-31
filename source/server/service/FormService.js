import { FormModel } from "../src/models/FormModel.js";
import { FormResponseModel } from "../src/models/FormResponseMode.js";

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

const handleFormResponseService = async (formId, response) => {
  return await FormResponseModel.create({
    formId: formId,
    fields: response,
  });
};

const getFormResponsesService = async (formId) => {
  const form = await FormModel.findById(formId);
  const formJson = JSON.parse(JSON.stringify(form));
  const fieldMapper = {};
  formJson.fields.forEach((element, idx) => {
    fieldMapper[element["fieldId"]] = idx;
  });
  const responses = await FormResponseModel.find({ formId: formId });
  const responseJson = JSON.parse(JSON.stringify(responses));
  const responseFormatted = [];
  responseJson.forEach((elm, idx) => {
    const temp = [];
    elm.fields.forEach((resp, idx) => {
      temp[fieldMapper[resp.fieldId]] = resp.response;
    });
    responseFormatted.push(temp);
  });
  return { form, responses: responseFormatted };
};

// New services -----------------------------------------------
const createFormNService = async (data) => {
  return;
};
// End New services -----------------------------------------------

export {
  createFormService,
  getAllFormsService,
  deleteFormService,
  getFormByIdService,
  handleFormResponseService,
  getFormResponsesService,
  //
  createFormNService,
};
