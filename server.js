const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON payloads
app.use(express.json());

// --- MOCK BLOG ENDPOINTS ---

// 1. GET all posts
app.get('/posts', (req, res) => {
    res.json({ message: "Route active" });
});

// 2. GET a single post by ID
app.get('/posts/:id', (req, res) => {
    res.json({ message: "Route active" });
});

// 3. POST a new post
app.post('/posts', (req, res) => {
    res.json({ message: "Route active" });
});

// 4. PUT (update) an existing post by ID
app.put('/posts/:id', (req, res) => {
    res.json({ message: "Route active" });
});

// 5. DELETE a post by ID
app.delete('/posts/:id', (req, res) => {
    res.json({ message: "Route active" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});