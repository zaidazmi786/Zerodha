# Zerodha Clone

A full-stack clone of the Zerodha trading platform, built with React (Vite), Node.js, Express, and MongoDB. The project is split into three independent apps: a marketing/landing page, a trading dashboard, and a backend API.

## Project Structure

```
zerodha_clone/
├── backend/       # Node.js + Express API, MongoDB models
├── dashboard/     # Trading dashboard (Holdings, Positions, Orders, Charts)
└── frontend/      # Landing page (Home, About, Pricing, Signup, Login)
```

## Tech Stack

- **Frontend:** React, Vite, React Router, Bootstrap
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Auth:** JWT, bcryptjs
- **Charts:** Chart.js, react-chartjs-2

## Getting Started

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the server:
```bash
npm start
```

### 2. Dashboard

```bash
cd dashboard
npm install
npm run dev
```

### 3. Frontend (Landing Page)

```bash
cd frontend
npm install
npm run dev
```

## Features

- User authentication (Signup/Login with JWT)
- Live watchlist with Buy/Sell order windows
- Holdings, Positions, and Orders views with backend data
- Interactive bar and doughnut charts for portfolio insights
- Responsive design across all pages
- Sticky navigation and independently scrollable panels

## Environment Variables

| Variable      | Description                        | Used In  |
|---------------|-------------------------------------|----------|
| `MONGO_URL`   | MongoDB connection string           | backend  |
| `JWT_SECRET`  | Secret key for signing JWT tokens   | backend  |

## License

This project is for educational purposes only and is not affiliated with Zerodha Broking Ltd.
