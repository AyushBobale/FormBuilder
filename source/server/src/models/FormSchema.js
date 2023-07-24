import mongoose from "mongoose";

const FieldData = new mongoose.Schema({
  fieldId: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String },
  image: { type: String },
  type: { type: String, required: true },
  isRequired: { type: Boolean, required: true, default: false },
});

const FormSchema = new mongoose.Schema({
  formName: { type: String, required: true },
  formHeaderImg: { type: String },
  fields: { type: [FieldData], default: [] },
});

const FormModel = new mongoose.model("FormSchema", FormSchema);

export { FormModel };
