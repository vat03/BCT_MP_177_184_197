// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CommonUserPage from './components/CommonUserPage';
import AdminUserPage from './components/AdminUserPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/common-user" element={<CommonUserPage />} />
                <Route path="/admin-user" element={<AdminUserPage />} />
            </Routes>
        </Router>
    );
}

export default App;
