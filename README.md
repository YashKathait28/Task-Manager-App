# Task Manager

A full-stack Task Manager application built using the **MERN stack**. It allows users to register, log in, create and manage tasks, track task completion, and filter tasks through a clean, responsive interface.

## Live Demo

- **Frontend:** https://task-manager-app-fmjf.vercel.app/
- **Backend:** https://task-manager-app-3hrv.onrender.com/

## Features

### Authentication
- User registration and login.
- Secure password hashing using bcrypt.
- JWT-based authentication.
- HTTP-only cookie-based authentication.
- Protected task routes.
- Logout functionality.

### Task Management
- Create tasks with a title and description.
- View all tasks.
- Update existing tasks with prefilled details.
- Delete tasks.
- Mark tasks as completed or pending.
- View completed tasks separately.
- View pending tasks separately.

### Search and Filtering
- Search tasks by title.
- Filter tasks by creation date.
- Clear search and date filters.
- Display empty-state messages when no tasks match.

### User Interface
- Responsive layout for different screen sizes.
- React Router for navigation.
- Tailwind CSS styling.
- Material UI switch for task completion.
- Task cards with edit and delete actions.

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Material UI

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- dotenv
- CORS

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Project Structure

```text
Task-Manager/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── filters/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account or local MongoDB

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Task-Manager
```

### 2. Set Up the Backend

Navigate to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Replace the MongoDB connection string and JWT secret with your own values.

Start the backend:

```bash
npm run dev
```

The backend will run locally at:

```text
http://localhost:5000
```

### 3. Set Up the Frontend

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL provided by Vite:

```text
http://localhost:5173
```

Register an account and log in to start managing tasks.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive authentication cookie |
| POST | `/api/auth/logout` | Log out and clear authentication cookie |

### Tasks

All task endpoints require authentication.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks/createTask` | Create a new task |
| GET | `/api/tasks/getTask` | Get all tasks for the logged-in user |
| GET | `/api/tasks/getTask/:id` | Get a specific task |
| PATCH | `/api/tasks/editTask/:id` | Update task details or completion status |
| DELETE | `/api/tasks/deleteTask/:id` | Delete a task |

## Environment Variables

Configure the following environment variables in the backend:

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URL` | MongoDB connection string |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `NODE_ENV` | Application environment (`development` or `production`) |

**Important:** Never commit your `.env` file or expose your JWT secret or database credentials.

## Deployment

### Frontend — Vercel

1. Push the project to GitHub.
2. Import the frontend repository into Vercel.
3. Configure the frontend root directory.
4. Install dependencies and build the project.
5. Deploy the frontend.

### Backend — Render

1. Connect your GitHub repository to Render.
2. Create a backend Web Service.
3. Configure the backend root directory.
4. Set the build and start commands.
5. Add the required environment variables.
6. Deploy the backend.

### Database — MongoDB Atlas

1. Create a MongoDB Atlas cluster.
2. Configure database access.
3. Allow the backend to connect to the database.
4. Add the MongoDB connection string to the backend environment variables.

## Future Improvements

- Task priorities.
- Due dates and reminders.
- Task sorting.
- Dashboard analytics.
- Improved loading and error states.

## Author

**Yash Kathait**

GitHub: [YashKathait28](https://github.com/YashKathait28)

