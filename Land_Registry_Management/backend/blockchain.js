// backend/blockchain.js

// const crypto = require('crypto');

// class Block {
//     constructor(index, timestamp, data, previousHash = '') {
//         this.index = index;
//         this.timestamp = timestamp;
//         this.data = data;
//         this.previousHash = previousHash;
//         this.hash = this.calculateHash();
//     }

//     calculateHash() {
//         return crypto.createHash('sha256').update(
//             this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)
//         ).digest('hex');
//     }
// }

// class Blockchain {
//     constructor() {
//         this.chain = [this.createGenesisBlock()];
//     }

//     createGenesisBlock() {
//         return new Block(0, Date.now().toString(), "Genesis Block", "0");
//     }

//     getLatestBlock() {
//         return this.chain[this.chain.length - 1];
//     }

//     addBlock(newBlock) {
//         newBlock.previousHash = this.getLatestBlock().hash;
//         newBlock.hash = newBlock.calculateHash();
//         this.chain.push(newBlock);
//     }

//     isLandRegistered(landID) {
//         return this.chain.some(block => block.data.type === 'registration' && block.data.landID === landID);
//     }

//     registerLand(landID, ownerName, location, size) {
//         if (this.isLandRegistered(landID)) {
//             return { error: true, message: 'Land already registered with this ID.' };
//         }
//         const newBlock = new Block(
//             this.chain.length,
//             Date.now().toString(),
//             { type: 'registration', landID, ownerName, location, size },
//             this.getLatestBlock().hash
//         );
//         this.addBlock(newBlock);
//         return { error: false, message: 'Land registered successfully', block: newBlock };
//     }

//     transferLand(landID, newOwnerName) {
//         const newBlock = new Block(
//             this.chain.length,
//             Date.now().toString(),
//             { type: 'transfer', landID, newOwnerName },
//             this.getLatestBlock().hash
//         );
//         this.addBlock(newBlock);
//         return newBlock;
//     }

//     getAllBlocks() {
//         return this.chain;
//     }
// }

// module.exports = Blockchain;





const crypto = require('crypto');

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto.createHash('sha256').update(
            this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)
        ).digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [];
        this.createGenesisBlock();
    }

    createGenesisBlock() {
        const genesisBlock = {
            index: 0,
            timestamp: Date.now(),
            data: "Genesis Block",
            previousHash: "0",
            hash: this.calculateHash("Genesis Block"),
        };
        this.chain.push(genesisBlock);
    }

    calculateHash(data) {
        // Simple hash function (for illustration)
        return require('crypto').createHash('sha256').update(data).digest('hex');
    }

    addBlock(data) {
        const previousBlock = this.chain[this.chain.length - 1];
        const newBlock = {
            index: this.chain.length,
            timestamp: Date.now(),
            data,
            previousHash: previousBlock.hash,
            hash: this.calculateHash(JSON.stringify(data) + previousBlock.hash),
        };
        this.chain.push(newBlock);
        return newBlock;
    }

    registerLand(landID, ownerName, location, size) {
        if (this.isLandRegistered(landID)) {
            return { error: true, message: "Land already registered." };
        }

        const data = { landID, ownerName, location, size };
        const newBlock = this.addBlock(data);
        return { message: "Land registered successfully.", block: newBlock };
    }

    isLandRegistered(landID) {
        return this.chain.some((block) => block.data.landID === landID);
    }

    transferLand(landID, newOwnerName) {
        const landBlock = this.chain.find((block) => block.data.landID === landID);
        if (landBlock) {
            landBlock.data.ownerName = newOwnerName;
            return this.addBlock({ ...landBlock.data });
        }
        return null;
    }

    getAllBlocks() {
        return this.chain;
    }

    searchLandByID(landID) {
        // Method to search for land details by ID
        const landBlock = this.chain.find((block) => block.data.landID === landID);
        if (landBlock) {
            const { ownerName, location, size } = landBlock.data;
            return { ownerName, location, size };
        }
        return null;
    }
}

module.exports = Blockchain;
