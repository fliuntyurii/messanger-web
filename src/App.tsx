import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './store/store';

import { Home } from './components/Home/Home';
import { Login } from './components/Auth/Login';
import { Dialogue } from './components/Dialogue/Dialogue';
import { LOGOUT } from './constants/actions';
import { useDispatch } from 'react-redux';
import { REFRESH_TOKEN } from './constants/auth';

const ResetPassword = React.lazy(() => import('./components/Auth/ResetPassword'));
const ForgotPassword = React.lazy(() => import('./components/Auth/ForgotPassword'));
const Register = React.lazy(() => import('./components/Auth/Register'));
// const Contact = React.lazy(() => import('./components/'));

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/dialogue" element={isLoggedIn ? <Dialogue /> : <Navigate to="/login" />} />
        {/* <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/login" />} /> */}

        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login /> } />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register /> } />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;