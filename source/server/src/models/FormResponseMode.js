import mongoose from "mongoose";

const FieldResponse = new mongoose.Schema({
  fieldId: { type: String, required: true },
  response: { type: [String] },
});

const FormResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Types.ObjectId, required: true, ref: "Form" },
  fields: { type: [FieldResponse], default: [] },
});

const FormResponseModel = mongoose.model("FormResponse", FormResponseSchema);

export { FormResponseModel };
