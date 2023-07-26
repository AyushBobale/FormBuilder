import {
  createFormService,
  getAllFormsService,
} from "../../service/FormService.js";

const getAllFormsController = async (req, res, next) => {
  try {
    const forms = await getAllFormsService();
    if (forms) {
      console.log(forms);
      return res.status(200).json({
        success: true,
        message: "Forms found",
        errors: [],
        data: { forms: forms },
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not get forms",
      errors: [],
      data: { forms: [] },
    });
  } catch (error) {
    next(error);
  }
};

const createFormController = async (req, res, next) => {
  try {
    const form = await createFormService(
      req.body.formName,
      req.body.formHeaderImage,
      req.body.fields
    );
    if (form) {
      return res.status(200).json({
        success: true,
        message: "Created form",
        errors: [],
        data: {},
      });
    }

    return res.status(400).json({
      success: false,
      message: "Could not create form",
      errors: [],
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
const editFormController = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
const deleteFormController = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export {
  createFormController,
  editFormController,
  deleteFormController,
  getAllFormsController,
};
