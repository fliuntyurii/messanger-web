import { Route, BrowserRouter, Routes, Navigate, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Home } from './components/Home/Home';
import { Profile } from './components/User/Profile';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { Dialogue } from './components/Dialogue/Dialogue';
import { User } from './components/User/User';

import { ResetPassword } from './components/Auth/ResetPassword';
import { ForgotPassword } from './components/Auth/ForgotPassword';
import { RootState } from './store/store';

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/dialogue" element={isLoggedIn ? <Dialogue /> : <Navigate to="/login" />} />
          <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;