import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import {Register} from './Register';
import {Dashboard} from './Dashboard';
import { Myprofile } from './Myprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<Myprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
