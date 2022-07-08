import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import AuthContainer from './Auth/AuthContainer';
import Login from './Auth/Login';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/signUp/*" element={<AuthContainer/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
