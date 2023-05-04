// import Login2 from "./Component/Pages/Login/Login2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from "./Component/Pages/Employee/Employees";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Register from "./Component/Pages/Register/Register";
import Admin from "./Component/Admin Page/Admin/Admin";
import AdminEmployees from "./Component/Admin Page/AdminEmployee/AdminEmployee";
import AddEmployee from "./Component/Admin Page/AdminEmployee/AddEmployee";


// import AdminCalendar from "./Component/Admin Page/AdminCalendar/AdminCalendar";
import AdminAddEvents from "./Component/Admin Page/AdminCalendar/AdminAddEvents";
import Calendar from "./Component/Pages/Calendar/Calendar";
import AddEvents from "./Component/Pages/AddEvents/AddEvents";
import AdminNoti from "./Component/Admin Page/AdminNoti/AdminNoti";
import Noti from "./Component/Pages/Noti/Noti";
import AdminTeam from "./Component/Admin Page/AdminTeam/AdminTeam";
import AdminLeave from "./Component/Admin Page/AdminLeave/AdminLeave";
import AdminAddTeam from "./Component/Admin Page/AdminTeam/AdminAddTeam";

import AdminEditEmployee from "./Component/Admin Page/AdminEmployee/AdminEditEmployee";
import AdminEditTeam from "./Component/Admin Page/AdminTeam/AdminEditTeam";
import AdminAddLeave from "./Component/Admin Page/AdminLeave/AdminAddLeave";
import AdminEditLeave from "./Component/Admin Page/AdminLeave/AdminEditLeave";
import AdminCalendar from "./Component/Admin Page/AdminCalendar/AdminCalendar";


function App() {
  const LoggedInAdmin = window.localStorage.getItem("isLoggedInAdmin");
  const LoggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={LoggedIn ? <Home /> : <Login />} />
          <Route index element={LoggedInAdmin ? <Admin /> : <Login />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="employee" element={<Employees />} />
          <Route path="home" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="addevent" element={<AddEvents />} />
          <Route path="noti" element={<Noti />} />

          <Route path="/admin">
            <Route index element={<Admin />} />
            <Route path="employee" element={<AdminEmployees />} />
            <Route path="addemployee" element={<AddEmployee />} />
            <Route path="calendar" element={<AdminCalendar />} />
            <Route path="addevent" element={<AdminAddEvents/>} />
            <Route path="team" element={<AdminTeam/>} />
            <Route path="edit/team/:id" element={<AdminEditTeam/>} />
            <Route path="addteam" element={<AdminAddTeam/>} />
            <Route path="leave" element={<AdminLeave/>} />
            <Route path="noti" element={<AdminNoti/>} />
            <Route path="edit/employee/:id" element={<AdminEditEmployee/>} />
            <Route path="editleave/:id" element={<AdminEditLeave/>} />
            <Route path="addleave" element={<AdminAddLeave/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
