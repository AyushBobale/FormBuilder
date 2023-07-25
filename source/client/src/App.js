import "./App.css";

import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { ROUTES } from "./config";
import { UserLayout } from "./pages/Layouts/User/UserLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<UserLayout />}>
          <Route path={ROUTES.ROOT} element={<Home />} />
          <Route path={ROUTES.EDIT} element={<Home />} />
          <Route path={ROUTES.PREVIEW} element={<Home />} />
          <Route path={ROUTES.FILL} element={<Home />} />
          <Route path={ROUTES.RESPONSES} element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
