# Task Manager - MERN Stack Application

[![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-blue)](https://mern.stack.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A full-stack task management application with CRUD functionality, built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS.

![Task Manager Screenshot](./screenshot.png)

## Features

- Create tasks with title, description, status, and due date
- Update existing tasks
- Delete tasks
- View all tasks in a clean UI
- Responsive design
- Real-time updates
- Status tracking (Pending/In Progress/Completed)

## Technologies Used

- **MongoDB**: Database storage
- **Express.js**: Backend framework
- **React.js**: Frontend library
- **Node.js**: Runtime environment
- **Tailwind CSS**: Styling
- **Axios**: HTTP client
- **Mongoose**: MongoDB object modeling

## Prerequisites

- Node.js (v16+)
- MongoDB Atlas account or local MongoDB installation
- npm (v8+)

## Installation

### Backend Setup

```bash
cd backend
npm install

## Create .env file:
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-task-manager

## Start server:
node server.js

### Frontend setup;
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

## Initialize Tailwind CSS:
npx tailwindcss init -p

## Start React app:
npm start

## API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task by ID
DELETE	/api/tasks/:id	Delete task by ID

Example Request Body:
{
  "title": "Complete Project",
  "description": "Finish MERN stack integration",
  "status": "in progress",
  "dueDate": "2024-03-15"
}

## Deployment
Backend (Render):

Set environment variables:

MONGODB_URI

PORT

Frontend (Vercel):

Set environment variables:

REACT_APP_API_URL
```
