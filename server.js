const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// --- PHASE 3: CUSTOM MIDDLEWARE ---
// Log HTTP Method, URL path, and timestamp
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    console.log(`[${req.method}] ${req.url} - ${time}`);
    next();
});

// In-memory database for blog posts
let blogPosts = [];

// --- PHASE 3: AUTH SCAFFOLDING ---
// Return a mock JSON Web Token
app.post('/login', (req, res) => {
    res.json({ token: "mock_jwt_token_12345_abcdef" });
});

// --- PHASE 2: REST API ENDPOINTS ---

// GET all posts
app.get('/posts', (req, res) => {
    res.json(blogPosts);
});

// GET a specific post by ID
app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const post = blogPosts.find(p => p.id === postId);
    
    // If post is not found, return 404 error
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    
    // If found, return the post
    res.status(200).json(post);
});

// POST a new post
app.post('/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = Date.now().toString(); 
    blogPosts.push(newPost);
    res.status(201).json({ message: "Post added successfully", post: newPost });
});

// PUT (Update) a specific post by ID
app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const postIndex = blogPosts.findIndex(p => p.id === postId);
    
    // If post is not found, return 404 error
    if (postIndex === -1) {
        return res.status(404).json({ message: "Post not found" });
    }
    
    // Extract new title and content from request body
    const { title, content } = req.body;
    
    // Update the fields if they are provided
    if (title) {
        blogPosts[postIndex].title = title;
    }
    if (content) {
        blogPosts[postIndex].content = content;
    }
    
    // Return success message and the updated post
    res.status(200).json({ 
        message: "Post updated successfully",
        post: blogPosts[postIndex]
    });
});

// DELETE a specific post by ID
app.delete('/posts/:id', (req, res) => {
    const idToDelete = req.params.id;
    blogPosts = blogPosts.filter(post => post.id !== idToDelete);
    res.json({ message: `Post with ID ${idToDelete} deleted successfully` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});