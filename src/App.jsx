// Styles
import './App.css'

// Authentication and Authorization -
// https://www.freecodecamp.org/news/how-to-secure-your-mern-stack-application/

import { Route, Routes } from "react-router-dom";
import { EmpLogin, EmpSignup, EmpHome } from "./Pages/Employee";
import { DeptLogin, DeptSignup, DeptHome } from "./Pages/Departments";
import { AgencyLogin, AgencySignup, AgencyHome } from "./Pages/Agency";
import { AdminLogin, AdminSignup, AdminHome } from "./Pages/Admin";



function App() {
  return (
    <div className="App">
      <Routes>

        {/* Employee */}
        <Route path="/e/login" element={<EmpLogin/>} />
        <Route path="/e/signup" element={<EmpSignup />} />
        <Route path="/" element={<EmpHome />}/>

        {/* Departments */}
        <Route path="/d/login" element={<DeptLogin/>} />
        <Route path="/d/signup" element={<DeptSignup />} />
        <Route path="/d/" element={<DeptHome />}/>

        {/* Agencies */}
        <Route path="/a/login" element={<AgencyLogin/>} />
        <Route path="/a/signup" element={<AgencySignup />} />
        <Route path="/a/" element={<AgencyHome />}/>

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/" element={<AdminHome />}/>


        {/* common */}
        {/* <Route path="/login_cards" element={<LoginCard />} /> */}

      </Routes>
    </div>
  );
}

export default App;