# EmployWise

This is a React-based user management app built using the ReqRes API. It includes a login system, a paginated users list, and functionality to edit or delete user details. The app is fully responsive, handles API errors gracefully, and stores login state securely.

## Features

🔐 Authentication
Login with email and password using POST /api/login, storing the token securely in local storage.

📋 Users List with Pagination
Fetches and displays users in a structured format using GET /api/users?page=1, with pagination or infinite scroll.

✏️ Edit Users
Update user details (first name, last name, email) using PUT /api/users/{id}.

❌ Delete Users
Remove users from the list using DELETE /api/users/{id} with instant UI update.

🧭 React Router Integration
Smooth navigation between Login, User List, and Edit screens.

🔍 Search
Client-side search to quickly find users by name or.

💅 Responsive UI
Built with Tailwind CSS for a clean and responsive design.

⚠️ Error Handling & Validation
Form validation and user-friendly error messages on failed API calls or invalid inputs.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ankitranjan1028/EmployWise.git
   ```
2. Navigate to the project directory:
   ```bash
   cd EmployWise
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.


## Live Demo

Check out the deployed version here: [Live Site](https://employ-wise-neon.vercel.app/)



