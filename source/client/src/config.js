export const ROUTES = {
  ROOT: "/",
  EDIT: (id) => `/edit/${id}`,
  PREVIEW: (id) => `/preview/${id}`,
  FILL: (id) => `/fill/${id}`,
  RESPONSES: (id) => `/responses/${id}`,
  FORMS: "/forms",
  NEW_FORMS: "/new_form",
  NEW_FORM_BUILDER: "/new_form/builder",
  ABOUT: "/about",
  DRAG_AND_DROP: "/drag_and_drop",
};

// export const BASE_URL = "https://form-builder-app.onrender.com/";
export const BASE_URL = "http://localhost:5000";
