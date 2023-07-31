export const ROUTES = {
  ROOT: "/",
  EDIT: (id) => `/edit/${id}`,
  PREVIEW: (id) => `/preview/${id}`,
  FILL: (id) => `/fill/${id}`,
  RESPONSES: (id) => `/responses/${id}`,
  FORMS: "/forms",

  NEW_FORMS: "/new_form",
  NEW_FORM_BUILDER: "/new_form/builder",
  VEIW_NEW_FORMS: "/new_form/view",
  FILL_NEW: (id) => `/new_fill/${id}`,
  RESPONSES_NEW: (id) => `/new_responses/${id}`,
  RESPONSE_FULL: (id) => `/new_responses/full/${id}`,

  ABOUT: "/about",
  DRAG_AND_DROP: "/drag_and_drop",
};

export const BASE_URL = "https://form-builder-app.onrender.com";
// export const BASE_URL = "http://localhost:5000";
