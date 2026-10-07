import express from 'express';
import dotenv from 'dotenv';
// Load environment variables
dotenv.config();
// Create the Express application
const app = express();
const PORT = Number(process.env.PORT) || 3000;
// Define a route: when someone visits the homepage, send them a greeting
app.get('/', (req, res) => {
    res.send('Welcome to my first Express server!');
});
app.post('/users', (req, res) => {
    res.send('User created successfully!');
});
// Start the server and begin listening for requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
