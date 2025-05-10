# ToDo Web App

This is a full-stack ToDo web application built with a React frontend and a Node.js/Express backend. The app allows users to manage tasks with features such as adding, editing, deleting, marking complete, and starring tasks.

## Features

- Add, edit, and delete tasks
- Mark tasks as complete or incomplete
- Star important tasks
- Set task priority (High, Medium, Low) with color-coded labels
- Set due dates for tasks
- Responsive and modern UI with Tailwind CSS
- Modal form for adding and editing tasks
- Backend API with RESTful endpoints for task management

## Technologies Used

- Frontend:
  - React
  - Tailwind CSS
  - React Icons
- Backend:
  - Node.js
  - Express
  - MongoDB (or any other database as configured)
- Development:
  - Axios for API requests
  - ESLint and Prettier for code quality

## Project Structure

- `frontend/`: React frontend source code
- `backend/`: Node.js backend source code
- `.gitignore`: Git ignore files for frontend and backend
- `Readme.md`: Project documentation

## Setup and Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Configure environment variables as needed (e.g., API URLs, database connection strings)
5. Run backend server:
   ```bash
   cd backend
   npm start
   ```
6. Run frontend development server:
   ```bash
   cd frontend
   npm start
   ```

## Usage

- Open the frontend app in your browser (usually at `http://localhost:3000`)
- Use the Add Task button to create new tasks
- Edit, delete, star, and mark tasks complete using the UI controls
- Tasks are persisted via the backend API

## Testing

- Critical UI components and API endpoints should be tested for expected behavior
- Testing can be done manually or automated tests can be added

## License

This project is open source and available under the MIT License.
