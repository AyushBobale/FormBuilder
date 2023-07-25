import { createFormService } from "../../service/FormService";

const createFormController = async (req, res, next) => {
  try {
    const form = await createFormService(
      req.body.formName,
      req.body.formHeaderImage,
      req.body.fields
    );
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

export { createFormController, editFormController, deleteFormController };
