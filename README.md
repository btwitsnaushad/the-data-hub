# The Data Hub - RESTful Blog API 🚀

A robust RESTful API built with **Node.js** and **Express.js** for managing blog posts. This project demonstrates backend development concepts including CRUD operations, custom middleware logging, mock JWT authentication, and proper error handling.

---

## 🌐 Live API

**Base URL:**
https://the-data-hub-4i8s.onrender.com

> **Note:** The root URL (`/`) does not contain a route. Please use `/posts` to access the API.

**Example:**
https://the-data-hub-4i8s.onrender.com/posts

---

## ⚙️ Key Features

- In-memory data storage for blog posts.
- Complete CRUD operations (Create, Read, Update, Delete).
- Custom global middleware that logs HTTP method, request URL, and timestamp.
- Mock authentication endpoint that returns a fake JWT token.
- Proper HTTP status codes and JSON error responses.
- Clean RESTful API architecture.
- Tested using Thunder Client.

---

## 🛣️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Fetch all blog posts |
| GET | `/posts/:id` | Fetch a single post by ID |
| POST | `/posts` | Create a new blog post |
| PUT | `/posts/:id` | Update an existing blog post |
| DELETE | `/posts/:id` | Delete a blog post |
| POST | `/login` | Returns a mock JWT token |

---

## 💻 Local Setup

1. Clone the repository

```bash
git clone https://github.com/btwitsnaushad/the-data-hub.git
```

2. Navigate into the project

```bash
cd the-data-hub
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npx nodemon server.js
```

Server runs on:

```
http://localhost:5000
```

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)
- Nodemon
- Thunder Client
- REST API

---

## 📂 Project Structure

```
the-data-hub/
│── server.js
│── package.json
│── package-lock.json
│── README.md
│── Prompt.md
│── .gitignore
```

---

## 👨‍💻 Author

**Naushad Ahamad**

GitHub:
https://github.com/btwitsnaushad

LinkedIn:
https://www.linkedin.com/in/naushad-ahamad-142326390

---

⭐ If you found this project helpful, consider giving it a Star on GitHub.