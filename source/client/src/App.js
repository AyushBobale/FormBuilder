import "./App.css";

import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Fill from "./pages/Fill/Fill";
import Forms from "./pages/Forms/Forms";
import { Home } from "./pages/Home/Home";
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
          <Route path={ROUTES.FORMS} element={<Forms />} />
          <Route path={ROUTES.FILL(":id")} element={<Fill />} />
          <Route path={ROUTES.RESPONSES(":id")} element={<Responses />} />
          <Route path={ROUTES.EDIT(":id")} element={<Home />} />
          <Route path={ROUTES.PREVIEW(":id")} element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
