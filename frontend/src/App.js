import './assets/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import { UserContext } from './api/userApi';
import { userSession } from './api/userApi';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  return (
    <UserContext.Provider value={userSession}>
      <Router>
        <div className="w-100">
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={
                                              <ProtectedRoute>
                                                <Dashboard />
                                              </ProtectedRoute>
                                            } />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <ToastContainer position='bottom-right' theme='dark' />
          </div>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
