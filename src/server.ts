import express from 'express';
import path from 'path';
import bookRoutes from './bookRoutes/bookRoutes.js'; 

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use book routes
app.use('/api/books', bookRoutes);

app.use(express.static(path.join(__dirname, '../src')));

// Fallback route handler for the root if index.html isn't picked up by static middleware
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/views/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
