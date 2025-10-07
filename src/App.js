import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminDashboard from "./admin/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Layout from "./admin/global/Layout";
import UserDashboard from "./user/UserDashboard";

import { useState } from "react";

import AdminLogin from "./pages/AdminLogin";

import ShowUsers from "./pages/ShowUsers";

import Header from "./components/Shared/Header/Header";

import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./AuthContext";

import CreateTask from "./admin/CreateTask";
import TeacherTasks from "./admin/TeacherTasks";
import TeacherRegister from "./pages/TeacherRegister";
import StudentsList from "./admin/StudentsList";
import Roofing from "./components/Home/Roofing/Roofing";
import Solar from "./components/Solar/Solar";
import Bathroom from "./components/Bathroom/Bathroom";
import Gutter from "./components/Gutter/Gutter";
import Handyman from "./components/Handyman/Handyman";
import Flooring from "./components/Flooring/Flooring";
import Window from "./components/Window/Window";
import Hvac from "./components/Hvac/Hvac";
import Kitchen from "./components/Kitchen/Kitchen";
import Walktub from "./components/Walktub/Walktub";
import Homewarranty from "./components/Homewarranty/Homewarranty";
import TermsAndCondition from "./components/TermsAndCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DoNotCallPolicy from "./pages/DoNotCallPolicy ";
import CCPACompliance from "./pages/CCPACompliance";
import Siding from "./components/Siding/Siding";
import Contact from "./components/Contact";
import About from "./pages/About/About";
//HOC
const AdminDashboardHOC = Layout(AdminDashboard);

const CreateTaskHOC = Layout(CreateTask);
const TeacherTasksHOC = Layout(TeacherTasks);
const StudentsListHOC = Layout(StudentsList);

const UserDashboardHOC = Layout(UserDashboard);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <ProSidebarProvider>
              {/* <ScrollButton /> */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Header />

                      <Home />
                    </>
                  }
                ></Route>
                <Route
                  path="/home"
                  element={
                    <>
                      <Header />
                      <Home />
                    </>
                  }
                ></Route>

                <Route path="/admin-login" element={<AdminLogin />}></Route>
                <Route path="/show-users" element={<ShowUsers />}></Route>
                <Route
                  path="/login"
                  element={
                    <LogIn
                      element={
                        <LogIn setIsAuthenticated={setIsAuthenticated} />
                      }
                    />
                  }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/teacher-register" element={<TeacherRegister />} />


                <Route path="/roofing" element={<Roofing />} />
                <Route path="/solar" element={<Solar />} />
                <Route path="/bathroom" element={<Bathroom />} />
                <Route path="/gutter" element={<Gutter />} />
                <Route path="/handyman" element={<Handyman />} />
                <Route path="/flooring" element={<Flooring />} />
                <Route path="/window" element={<Window />} />
                <Route path="/hvac" element={<Hvac />} />
                <Route path="/kitchen" element={<Kitchen />} />
                <Route path="/walktub" element={<Walktub />} />
                <Route path="/homewarranty" element={<Homewarranty />} />
                <Route path="/siding" element={<Siding />} />
                <Route path="/terms" element={<TermsAndCondition />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/do-not-call-policy" element={<DoNotCallPolicy />} />
                <Route path="/ccpa" element={<CCPACompliance />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />



                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <Header />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminRoute>
                      <AdminDashboardHOC />
                    </AdminRoute>
                  }
                />

                {/* student teacher */}
                <Route
                  path="/teacher/task/create"
                  element={
                    <AdminRoute>
                      <CreateTaskHOC />
                    </AdminRoute>
                  }
                />
                
                <Route
                  path="/teacher/tasks"
                  element={
                    <AdminRoute>
                      <TeacherTasksHOC />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/teacher/students-list"
                  element={
                    <AdminRoute>
                      <StudentsListHOC />
                    </AdminRoute>
                  }
                />

                <Route
                  path="/user/dashboard"
                  element={
                    <UserRoute>
                      <UserDashboardHOC />
                    </UserRoute>
                  }
                />
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </ProSidebarProvider>
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
