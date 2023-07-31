import "./App.css";

import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import DragAndDrop from "./pages/DragAndDrop/DragAndDrop";
import Fill from "./pages/Fill/Fill";
import Forms from "./pages/Forms/Forms";
import Help from "./pages/Help/Help";
import { Home } from "./pages/Home/Home";
import NewFill from "./pages/Fill/NewFill";
import NewFormBuilder from "./pages/NewFormBuilder/NewFormBuilder";
import NewFormRenderer from "./pages/NewFormRenderer/NewFormRendere";
import NewForms from "./pages/Forms/NewForms";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { ROUTES } from "./config";
import Responses from "./pages/Responses/Responses";
import { UserLayout } from "./pages/Layouts/User/UserLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<UserLayout />}>
          <Route path={ROUTES.ROOT} element={<Home />} />
          <Route path={ROUTES.VEIW_NEW_FORMS} element={<NewForms />} />
          <Route path={ROUTES.FORMS} element={<Forms />} />
          <Route path={ROUTES.NEW_FORMS} element={<NewFormRenderer />} />
          <Route path={ROUTES.NEW_FORM_BUILDER} element={<NewFormBuilder />} />
          <Route path={ROUTES.FILL(":id")} element={<Fill />} />
          <Route path={ROUTES.FILL_NEW(":id")} element={<NewFill />} />
          <Route path={ROUTES.RESPONSES(":id")} element={<Responses />} />
          <Route path={ROUTES.ABOUT} element={<Help />} />
          <Route path={ROUTES.EDIT(":id")} element={<Home />} />
          <Route path={ROUTES.PREVIEW(":id")} element={<Home />} />
          <Route path={ROUTES.DRAG_AND_DROP} element={<DragAndDrop />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
