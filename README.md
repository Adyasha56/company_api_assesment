# 🏢 Companies API

A **RESTful API** built with **Node.js, Express, and MongoDB** to manage company records.
Supports CRUD operations and advanced filtering options.

---

## 📂 Project Structure

```
companies-api/
│── server.js                  # Entry point
│── config/
│   └── db.js                  # MongoDB connection
│── models/
│   └── Company.js             # Company schema
│── routes/
│   └── companyRoutes.js       # API routes
│── controllers/
│   └── companyController.js   # Controller logic
│── .env                       # Environment variables
│── package.json
│── README.md                  # Documentation
```

---

## 🚀 Features

* Create new company records
* Get all companies with **filtering** options
* Fetch a single company by ID
* Update company details
* Delete company records
* Filters supported:

  * `industry`, `location`, `size`, `ceo`, `foundedYear`
  * Revenue range: `minRevenue`, `maxRevenue`

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB + Mongoose
* **Environment Variables**: dotenv
* **Dev Tool**: Nodemon

---

## ⚙️ Setup Instructions

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/companies-api.git
   cd companies-api
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Add environment variables in `.env`

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server

   ```bash
   npm run dev
   ```

   Server will run on: `http://localhost:5000`

---

## 📡 API Endpoints

### Base URL

```
http://localhost:5000/api/companies
```

### 1. Create Company

**POST** `/api/companies`

```json
{
  "name": "TechCorp",
  "industry": "Software",
  "location": "Bangalore",
  "size": "500+",
  "ceo": "John Doe",
  "foundedYear": 2012,
  "revenue": 1500000
}
```

---

### 2. Get All Companies (with filters)

**GET** `/api/companies?industry=Software&location=Bangalore&minRevenue=100000`

---

### 3. Get Company by ID

**GET** `/api/companies/:id`

---

### 4. Update Company

**PUT** `/api/companies/:id`

```json
{
  "location": "Hyderabad",
  "revenue": 2000000
}
```

---

### 5. Delete Company

**DELETE** `/api/companies/:id`

---

## ⚠️ Error Handling

* Invalid MongoDB ID → `400 Bad Request`
* Company not found → `404 Not Found`
* Missing required fields → `400 Validation Error`

---





