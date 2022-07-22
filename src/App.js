import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import AuthContainer from './Auth/AuthContainer';
import Login from './Auth/Login';
import Navbar from './Navbar/Navbar';
import PatientDashboard from './Dashboard/PatientDashboard';
import FamMemDashboard from './Dashboard/FamMemDashboard';
import DoctorDashboard from './Dashboard/DoctorDashboard';
import SignUp from './Auth/SignUp';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <Navbar/>
      </div>
        <BrowserRouter>
        <Routes>
            <Route path="/auth/*" element={<AuthContainer/>} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard/patient" element={<PatientDashboard />} />
            <Route path="/dashboard/FamMem" element={<FamMemDashboard />} />
            <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
            <Route path="/" element={<Login/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
