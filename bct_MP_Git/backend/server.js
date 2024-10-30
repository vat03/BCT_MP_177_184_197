//ye wala acha chal rha hai

// const express = require('express');
// const cors = require('cors');
// const Blockchain = require('./blockchain');

// const app = express();
// const blockchain = new Blockchain();

// app.use(cors());
// app.use(express.json());

// // Route to register land
// app.post('/registerLand', (req, res) => {
//     const { landID, ownerName, location, size } = req.body;
//     const result = blockchain.registerLand(landID, ownerName, location, size);
    
//     if (result.error) {
//         res.status(400).json({ message: result.message });
//     } else {
//         res.json({ message: result.message, block: result.block });
//     }
// });

// // Route to transfer land with validation
// app.post('/transferLand', (req, res) => {
//     const { landID, newOwnerName } = req.body;

//     // Check if the land is registered
//     if (!blockchain.isLandRegistered(landID)) {
//         return res.status(400).json({ message: 'Land cannot be transferred as it is not registered yet.' });
//     }

//     // Transfer the land if registered
//     const newBlock = blockchain.transferLand(landID, newOwnerName);
//     res.json({ message: 'Land transferred successfully', block: newBlock });
// });

// // Route to retrieve the entire blockchain
// app.get('/blockchain', (req, res) => {
//     const allBlocks = blockchain.getAllBlocks();
//     res.json(allBlocks);
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Backend server running at http://localhost:${PORT}`);
// });











//with search


// backend/server.js
const express = require('express');
const cors = require('cors');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.use(cors());
app.use(express.json());

// Route to register land
app.post('/registerLand', (req, res) => {
    const { landID, ownerName, location, size } = req.body;
    const result = blockchain.registerLand(landID, ownerName, location, size);

    if (result.error) {
        res.status(400).json({ message: result.message });
    } else {
        res.json({ message: result.message, block: result.block });
    }
});

// Route to transfer land
app.post('/transferLand', (req, res) => {
    const { landID, newOwnerName } = req.body;
    if (!blockchain.isLandRegistered(landID)) {
        return res.status(400).json({ message: 'Land not registered.' });
    }

    const newBlock = blockchain.transferLand(landID, newOwnerName);
    res.json({ message: 'Land transferred successfully', block: newBlock });
});

// Route to search for land by ID
app.get('/searchLand', (req, res) => {
    const { landID } = req.query;
    const landData = blockchain.searchLandByID(landID);

    if (landData) {
        res.json(landData);
    } else {
        res.status(404).json({ message: "Land not found." });
    }
});

// Route to retrieve the entire blockchain
app.get('/blockchain', (req, res) => {
    const allBlocks = blockchain.getAllBlocks();
    res.json(allBlocks);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
