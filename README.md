# Task Manager

A simple and responsive Task Manager application built with the MERN stack. It allows users to create, view, update, and delete tasks through an easy-to-use interface.

## Features

- Create tasks with a title and description.
- View all saved tasks.
- Update existing tasks with prefilled details.
- Delete tasks when they are no longer needed.
- Store tasks in MongoDB for persistent data storage.
- Responsive interface built with React and Tailwind CSS.

## Tech Stack

**Frontend**
- React
- Vite
- React Router
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```text
Task-Manager/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB database

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Task-Manager
```

### 2. Set up the backend

Navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder and add your environment variables:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
npm run dev
```

### 3. Set up the frontend

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite in your browser.

## API Endpoints

The backend provides the following endpoints for task management.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks/createTask` | Create a new task |
| GET | `/api/tasks/getTask` | Get all tasks |
| GET | `/api/tasks/getTask/:id` | Get a specific task |
| PATCH | `/api/tasks/editTask/:id` | Update a task |
| DELETE | `/api/tasks/deleteTask/:id` | Delete a task |

## Deployment

The application can be deployed using:

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas


## Future Improvements

- Mark tasks as completed.
- Add task filtering and sorting.
- Add user authentication.
- Add due dates and task priorities.

## Author

Yash Kathait

GitHub: https://github.com/YashKathait28
