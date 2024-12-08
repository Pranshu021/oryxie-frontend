import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import components from "./components";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import * as reactRouterDom from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <components.NavigationBar /> */}
      <Routes>
        <Route path="/" element={<components.Home />} />
        <Route path="/signup" element={<components.SignUp />} />
        <Route path="/login" element={<components.Login />} />

        <Route
          path="/:user/dashboard"
          element={
            // <components.Dashboard/>
            <PrivateRoute>
              <components.Dashboard />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<components.NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
