import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./view/common/Header";
import Footer from "./view/common/Footer";
import Home from "./view/Home";
import NotFound from "./view/NotFound";
import Faq from "./view/Faq";
import Contact from "./view/Contact";
import CreateUser from "./view/dashboard/CreateUser";
import UserList from "./view/dashboard/UserList";
import View from "./view/dashboard/View";
import EditUser from "./view/dashboard/EditUser";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./routes/ProtectRoute";
import AccessDenied from "./view/dashboard/AccessDenied";
function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container bodyContainer">
          <Header />
          <div className="main">
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/registration" element={<CreateUser />} />
              <Route
                path="/userlist"
                element={
                  <ProtectedRoute>
                    <UserList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/userview/:userid"
                element={
                  <ProtectedRoute>
                    <View />
                  </ProtectedRoute>
                }
              />
              <Route path="/accessdenied" element={<AccessDenied />} />
              <Route
                path="/EditUser/:userid"
                element={
                  <PrivateRoute>
                    <EditUser />
                  </PrivateRoute>
                }
              />
              {/* Nested Menu
              <Route path="/contact" element={<Contact />}>
                <Route path="nested" element={<nested/>}/>
                </Route> */}
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
