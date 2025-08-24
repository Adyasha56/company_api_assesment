# Company API Assessment

This is a full-stack project built with **Node.js (Express)** for the backend and **React (Vite)** for the frontend. The application provides APIs for managing companies and displays the data in a clean UI.

---

## 🚀 Tech Stack

* **Backend**: Node.js, Express, MongoDB, Mongoose
* **Frontend**: React (Vite), Axios, TailwindCSS
* **Other Tools**: Git, Postman

---

## 📂 Project Structure

```
company_api_assessment/
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── server.js         # Entry point
│   └── .env              # Environment variables
│
├── client/               # Frontend folder (React + Vite)
│   ├── src/
│   │  
│   │   ├── App.jsx       # Main app file
│   │   └── main.jsx      # React entry
│   └── index.html
│//other dependecies files
└── README.md             # Documentation
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Adyasha56/company_api_assessment.git
cd company_api_assessment
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` and add:

```
PORT=5000
MONGO_URI=your_mongo_connection_url
```

Run the server:

```bash
npm start
```

Backend runs on: `http://localhost:5000`

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
```

Run the React app:

```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## 📡 API Endpoints

* `GET /api/companies` → Fetch all companies
* `POST /api/companies` → Create a new company
* `PUT /api/companies/:id` → Update company by ID
* `DELETE /api/companies/:id` → Delete company by ID

---

## 🌟 Features

✅ Backend APIs with CRUD operations
✅ MongoDB Database connection
✅ Frontend UI with company listing
✅ Axios integration with backend
✅ Vite + React for fast development

---


