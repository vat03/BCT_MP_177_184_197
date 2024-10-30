// frontend/src/components/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <h1>Land Registry Blockchain</h1>
            <button onClick={() => navigate('/common-user')}>Common User</button>
            <button onClick={() => navigate('/admin-user')}>Admin User</button>
        </div>
    );
}

export default LandingPage;
