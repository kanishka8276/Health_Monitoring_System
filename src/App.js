import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import AuthContainer from './Auth/AuthContainer';
import Login from './Auth/Login';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
      <Navbar/>
      </div>
        <BrowserRouter>
        <Routes>
            <Route path="/signUp/*" element={<AuthContainer/>} />
            <Route path="/" element={<Login/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
