# DashFlow: User & Product Management Hub

## Overview

DashFlow is a powerful web application built with React.js, Axios, JSON-server, Formik, and powered by Vite. It provides an intuitive dashboard for efficient user and product management, featuring real-time updates, user authentication, and a responsive interface.

## Features

- **Dashboard Overview:** Dynamic counts for users and products.
- **Sidebar Navigation:** Seamless access to user and product management.
- **User Management:**
  - User list with the option to add new users.
  - Edit and delete buttons for each user, with a form for easy modifications.
- **Product Management:**
  - Product list with the option to add new products.
  - Edit and delete buttons for each product, accompanied by a form for quick adjustments.
- **Authentication:**
  - Login page with an option to access the user registration page.
  - User registration creates a new user in the JSON server.

## Technologies Used

- React.js
- React Router
- Axios
- JSON-server
- Formik
- Vite
- Bootstrap
- FontAwesome

## How to Run

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/a-bhish3k/DashFlow.git
   cd dashflow

   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start JSON-server for Data Storage:**

   ```bash
   npx json-server -w db.json --port 8000
   ```

4. **Start the React App:**
   ```bash
   npm run dev
   ```

## Contribution

- Contributions are welcome! Fork this repository, create a branch, and submit a pull request.
