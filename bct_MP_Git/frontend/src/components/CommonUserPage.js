//ye wala acha chal rha hai

// frontend/src/components/CommonUserPage.js

// import React, { useState } from 'react';

// function CommonUserPage() {
//     const [registerLandID, setRegisterLandID] = useState('');
//     const [ownerName, setOwnerName] = useState('');
//     const [location, setLocation] = useState('');
//     const [size, setSize] = useState('');
//     const [transferLandID, setTransferLandID] = useState('');
//     const [newOwnerName, setNewOwnerName] = useState('');
//     const [message, setMessage] = useState('');

//     const registerLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/registerLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: registerLandID, ownerName, location, size }),
//             });

//             const data = await response.json();
//             setMessage(data.message);
//         } catch (error) {
//             setMessage('An error occurred while registering land.');
//         }
//     };

//     const transferLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/transferLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: transferLandID, newOwnerName }),
//             });
            
//             const data = await response.json();
//             if (!response.ok) {
//                 setMessage(data.message); // Display error message if not registered
//             } else {
//                 setMessage(data.message);
//             }
//         } catch (error) {
//             setMessage('An error occurred while transferring land.');
//         }
//     };

//     return (
//         <div className="common-user-page">
//             <h2>Common User Dashboard</h2>

//             <div>
//                 <h3>Register Land</h3>
//                 <input 
//                     type="text" 
//                     placeholder="Land ID" 
//                     value={registerLandID} 
//                     onChange={(e) => setRegisterLandID(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Owner Name" 
//                     value={ownerName} 
//                     onChange={(e) => setOwnerName(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Location" 
//                     value={location} 
//                     onChange={(e) => setLocation(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Size" 
//                     value={size} 
//                     onChange={(e) => setSize(e.target.value)} 
//                 />
//                 <button 
//                     onClick={registerLand} 
//                     disabled={!registerLandID || !ownerName || !location || !size}
//                 >
//                     Register Land
//                 </button>
//             </div>

//             <div>
//                 <h3>Transfer Land</h3>
//                 <input 
//                     type="text" 
//                     placeholder="Land ID" 
//                     value={transferLandID} 
//                     onChange={(e) => setTransferLandID(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="New Owner Name" 
//                     value={newOwnerName} 
//                     onChange={(e) => setNewOwnerName(e.target.value)} 
//                 />
//                 <button 
//                     onClick={transferLand} 
//                     disabled={!transferLandID || !newOwnerName}
//                 >
//                     Transfer Land
//                 </button>
//             </div>

//             {message && <p>{message}</p>}
//         </div>
//     );
// }

// export default CommonUserPage;












//ye sabse acha chal rha hai

// import React, { useState } from 'react';

// function CommonUserPage() {
//     const [registerLandID, setRegisterLandID] = useState('');
//     const [ownerName, setOwnerName] = useState('');
//     const [location, setLocation] = useState('');
//     const [size, setSize] = useState('');
//     const [transferLandID, setTransferLandID] = useState('');
//     const [newOwnerName, setNewOwnerName] = useState('');
//     const [message, setMessage] = useState('');

//     const registerLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/registerLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: registerLandID, ownerName, location, size }),
//             });

//             const data = await response.json();
//             setMessage(data.message);
//         } catch (error) {
//             setMessage('An error occurred while registering land.');
//         }
//     };

//     const transferLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/transferLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: transferLandID, newOwnerName }),
//             });
            
//             const data = await response.json();
//             if (!response.ok) {
//                 setMessage(data.message); // Display error message if not registered
//             } else {
//                 setMessage(data.message);
//             }
//         } catch (error) {
//             setMessage('An error occurred while transferring land.');
//         }
//     };

//     return (
//         <div className="common-user-page">
//             <h2>Common User Dashboard</h2>

//             <div>
//                 <h3>Register Land</h3>
//                 <input 
//                     type="text" 
//                     placeholder="Land ID" 
//                     value={registerLandID} 
//                     onChange={(e) => setRegisterLandID(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Owner Name" 
//                     value={ownerName} 
//                     onChange={(e) => setOwnerName(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Location" 
//                     value={location} 
//                     onChange={(e) => setLocation(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Size" 
//                     value={size} 
//                     onChange={(e) => setSize(e.target.value)} 
//                 />
//                 <button 
//                     onClick={registerLand} 
//                     disabled={!registerLandID || !ownerName || !location || !size}
//                 >
//                     Register Land
//                 </button>
//             </div>

//             <div>
//                 <h3>Transfer Land</h3>
//                 <input 
//                     type="text" 
//                     placeholder="Land ID" 
//                     value={transferLandID} 
//                     onChange={(e) => setTransferLandID(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="New Owner Name" 
//                     value={newOwnerName} 
//                     onChange={(e) => setNewOwnerName(e.target.value)} 
//                 />
//                 <button 
//                     onClick={transferLand} 
//                     disabled={!transferLandID || !newOwnerName}
//                 >
//                     Transfer Land
//                 </button>
//             </div>

//             {message && <p>{message}</p>}
//         </div>
//     );
// }

// export default CommonUserPage;








//ye sabse best chal rha hai
//with error in red colour

// import React, { useState } from 'react';

// function CommonUserPage() {
//     const [registerLandID, setRegisterLandID] = useState('');
//     const [ownerName, setOwnerName] = useState('');
//     const [location, setLocation] = useState('');
//     const [size, setSize] = useState('');
//     const [transferLandID, setTransferLandID] = useState('');
//     const [newOwnerName, setNewOwnerName] = useState('');
//     const [message, setMessage] = useState('');
//     const [isError, setIsError] = useState(false); // New state to track if the message is an error

//     const registerLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/registerLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: registerLandID, ownerName, location, size }),
//             });

//             const data = await response.json();
//             setIsError(!response.ok); // Set error state based on response
//             setMessage(data.message);
//         } catch (error) {
//             setIsError(true);
//             setMessage('An error occurred while registering land.');
//         }
//     };

//     const transferLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/transferLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: transferLandID, newOwnerName }),
//             });

//             const data = await response.json();
//             setIsError(!response.ok); // Set error state based on response
//             setMessage(data.message);
//         } catch (error) {
//             setIsError(true);
//             setMessage('An error occurred while transferring land.');
//         }
//     };

//     return (
//         <div className="common-user-page">
//             <h2>Common User Dashboard</h2>

//             <div>
//                 <h3>Register Land</h3>
//                 <input 
//                     type="text" 
//                     placeholder="Land ID" 
//                     value={registerLandID} 
//                     onChange={(e) => setRegisterLandID(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Owner Name" 
//                     value={ownerName} 
//                     onChange={(e) => setOwnerName(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Location" 
//                     value={location} 
//                     onChange={(e) => setLocation(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="Size" 
//                     value={size} 
//                     onChange={(e) => setSize(e.target.value)} 
//                 />
//                 <button 
//                     onClick={registerLand} 
//                     disabled={!registerLandID || !ownerName || !location || !size}
//                 >
//                     Register Land
//                 </button>
//             </div>

//             <div>
//                 <h3>Transfer Land</h3>
//                 <input 
//                     type="text" 
//                     placeholder="Land ID" 
//                     value={transferLandID} 
//                     onChange={(e) => setTransferLandID(e.target.value)} 
//                 />
//                 <input 
//                     type="text" 
//                     placeholder="New Owner Name" 
//                     value={newOwnerName} 
//                     onChange={(e) => setNewOwnerName(e.target.value)} 
//                 />
//                 <button 
//                     onClick={transferLand} 
//                     disabled={!transferLandID || !newOwnerName}
//                 >
//                     Transfer Land
//                 </button>
//             </div>

//             {message && <p className={isError ? 'error-message' : ''}>{message}</p>}
//         </div>
//     );
// }

// export default CommonUserPage;
















//with search


// frontend/src/components/CommonUserPage.js
// import React, { useState } from 'react';

// function CommonUserPage() {
//     const [registerLandID, setRegisterLandID] = useState('');
//     const [ownerName, setOwnerName] = useState('');
//     const [location, setLocation] = useState('');
//     const [size, setSize] = useState('');
//     const [transferLandID, setTransferLandID] = useState('');
//     const [newOwnerName, setNewOwnerName] = useState('');
//     const [searchLandID, setSearchLandID] = useState('');
//     const [searchResult, setSearchResult] = useState(null);
//     const [message, setMessage] = useState('');
//     const [isError, setIsError] = useState(false);

//     const registerLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/registerLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: registerLandID, ownerName, location, size }),
//             });
//             const data = await response.json();
//             setIsError(!response.ok);
//             setMessage(data.message);
//         } catch (error) {
//             setIsError(true);
//             setMessage('An error occurred while registering land.');
//         }
//     };

//     const transferLand = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/transferLand', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ landID: transferLandID, newOwnerName }),
//             });
//             const data = await response.json();
//             setIsError(!response.ok);
//             setMessage(data.message);
//         } catch (error) {
//             setIsError(true);
//             setMessage('An error occurred while transferring land.');
//         }
//     };

//     const searchLand = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/searchLand/${searchLandID}`);
//             const data = await response.json();
//             if (response.ok) {
//                 setSearchResult(data);
//                 setIsError(false);
//             } else {
//                 setSearchResult(null);
//                 setIsError(true);
//             }
//             setMessage(data.message || '');
//         } catch (error) {
//             setSearchResult(null);
//             setIsError(true);
//             setMessage('An error occurred while searching for the land.');
//         }
//     };

//     return (
//         <div className="common-user-page">
//             <h2>Common User Dashboard</h2>
//             {/* Register and Transfer sections remain the same */}
//             <div>
//                 <h3>Register Land</h3>
//                 <input type="text" placeholder="Land ID" value={registerLandID} onChange={(e) => setRegisterLandID(e.target.value)} />
//                 <input type="text" placeholder="Owner Name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
//                 <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
//                 <input type="text" placeholder="Size" value={size} onChange={(e) => setSize(e.target.value)} />
//                 <button onClick={registerLand} disabled={!registerLandID || !ownerName || !location || !size}>Register Land</button>
//             </div>

//             <div>
//                 <h3>Transfer Land</h3>
//                 <input type="text" placeholder="Land ID" value={transferLandID} onChange={(e) => setTransferLandID(e.target.value)} />
//                 <input type="text" placeholder="New Owner Name" value={newOwnerName} onChange={(e) => setNewOwnerName(e.target.value)} />
//                 <button onClick={transferLand} disabled={!transferLandID || !newOwnerName}>Transfer Land</button>
//             </div>

//             {/* Search Feature */}
//             <div>
//                 <h3>Search Land by ID</h3>
//                 <input type="text" placeholder="Enter Land ID" value={searchLandID} onChange={(e) => setSearchLandID(e.target.value)} />
//                 <button onClick={searchLand} disabled={!searchLandID}>Search</button>
//                 {searchResult && (
//                     <table className="search-result-table">
//                         <thead>
//                             <tr>
//                                 <th>Owner Name</th>
//                                 <th>Location</th>
//                                 <th>Size</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>{searchResult.ownerName}</td>
//                                 <td>{searchResult.location}</td>
//                                 <td>{searchResult.size}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 )}
//             </div>

//             {message && <p className={isError ? 'error-message' : ''}>{message}</p>}
//         </div>
//     );
// }

// export default CommonUserPage;










import React, { useState } from 'react';
import '../styles.css';

function CommonUserPage() {
    const [registerLandID, setRegisterLandID] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [location, setLocation] = useState('');
    const [size, setSize] = useState('');
    const [transferLandID, setTransferLandID] = useState('');
    const [newOwnerName, setNewOwnerName] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [searchLandID, setSearchLandID] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [searchError, setSearchError] = useState('');

    const registerLand = async () => {
        try {
            const response = await fetch('http://localhost:5000/registerLand', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ landID: registerLandID, ownerName, location, size }),
            });
            const data = await response.json();
            setIsError(!response.ok);
            setMessage(data.message);
        } catch (error) {
            setIsError(true);
            setMessage('An error occurred while registering land.');
        }
    };

    const transferLand = async () => {
        try {
            const response = await fetch('http://localhost:5000/transferLand', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ landID: transferLandID, newOwnerName }),
            });
            const data = await response.json();
            setIsError(!response.ok);
            setMessage(data.message);
        } catch (error) {
            setIsError(true);
            setMessage('An error occurred while transferring land.');
        }
    };

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
        <div className="common-user-page">
            <h2>Common User Dashboard</h2>

            <div>
                <h3>Register Land</h3>
                <input 
                    type="text" 
                    placeholder="Land ID" 
                    value={registerLandID} 
                    onChange={(e) => setRegisterLandID(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Owner Name" 
                    value={ownerName} 
                    onChange={(e) => setOwnerName(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Location" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="Size" 
                    value={size} 
                    onChange={(e) => setSize(e.target.value)} 
                />
                <button 
                    onClick={registerLand} 
                    disabled={!registerLandID || !ownerName || !location || !size}
                >
                    Register Land
                </button>
            </div>

            <div>
                <h3>Transfer Land</h3>
                <input 
                    type="text" 
                    placeholder="Land ID" 
                    value={transferLandID} 
                    onChange={(e) => setTransferLandID(e.target.value)} 
                />
                <input 
                    type="text" 
                    placeholder="New Owner Name" 
                    value={newOwnerName} 
                    onChange={(e) => setNewOwnerName(e.target.value)} 
                />
                <button 
                    onClick={transferLand} 
                    disabled={!transferLandID || !newOwnerName}
                >
                    Transfer Land
                </button>
            </div>

            {message && <p className={isError ? 'error-message' : ''}>{message}</p>}

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

export default CommonUserPage;
