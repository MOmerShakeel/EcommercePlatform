require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Connect to MongoDB
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ecommerce-cluster.9hpfz.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce-Cluster`;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Your deployment is pinged. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});