// frontend/src/components/AdminUserPage.js

import React, { useEffect, useState } from 'react';
import '../styles.css';

function AdminUserPage() {
    const [blockchainData, setBlockchainData] = useState([]);
    const [searchLandID, setSearchLandID] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchError, setSearchError] = useState('');

    useEffect(() => {
        const fetchBlockchainData = async () => {
            const response = await fetch("http://localhost:5000/blockchain");
            const data = await response.json();
            setBlockchainData(data);
        };

        fetchBlockchainData();
    }, []);

    const searchLand = async () => {
        try {
            const response = await fetch(`http://localhost:5000/searchLand?landID=${searchLandID}`);
            const data = await response.json();
            if (response.ok) {
                setSearchResult(data);
                setSearchError('');
            } else {
                setSearchResult(null);
                setSearchError(data.message || 'An error occurred while searching for land.');
            }
        } catch (error) {
            setSearchResult(null);
            setSearchError('An error occurred while searching for land.');
        }
    };

    return (
        <div className="admin-user-page">
            <h2>Admin Dashboard - Blockchain Explorer</h2>
            <ul>
                {blockchainData.map((block, index) => (
                    <li key={index}>
                        <h3>Block {index + 1}</h3>
                        <p>Hash: {block.hash}</p>
                        <p>Previous Hash: {block.previousHash}</p>
                        <p>Timestamp: {block.timestamp}</p>
                        <p>Data: {JSON.stringify(block.data)}</p>
                    </li>
                ))}
            </ul>

            <div className="search-section">
                <h3>Search Land by ID</h3>
                <input 
                    type="text" 
                    placeholder="Enter Land ID" 
                    value={searchLandID} 
                    onChange={(e) => setSearchLandID(e.target.value)} 
                />
                <button onClick={searchLand}>Search</button>
                {searchError && <p className="error-message">{searchError}</p>}
                {searchResult && (
                    <table>
                        <thead>
                            <tr>
                                <th>Owner Name</th>
                                <th>Location</th>
                                <th>Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{searchResult.ownerName}</td>
                                <td>{searchResult.location}</td>
                                <td>{searchResult.size}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default AdminUserPage;
