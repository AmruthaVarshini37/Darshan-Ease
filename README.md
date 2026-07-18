# 🛕 Darshan Ease – Temple Darshan Ticket Booking System

## 📌 Project Overview

Darshan Ease is a MERN Stack web application developed to simplify the process of booking temple darshan tickets online. The system enables devotees to register, log in securely, browse available darshan tickets, manage bookings, and view their profile through a simple and user-friendly interface.

The main objective of this project is to reduce long waiting queues at temples by providing an efficient online booking platform that is secure, responsive, and accessible from anywhere.

---

# ✨ Features

- ✅ User Registration
- ✅ User Login & Logout
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ View User Profile
- ✅ Browse Darshan Tickets
- ✅ Book Darshan Tickets
- ✅ View Orders
- ✅ Shopping Cart
- ✅ MongoDB Database Integration
- ✅ Responsive User Interface

---

# 🛠️ Technologies Used

## Frontend

- React.js
- React Router DOM
- Axios
- HTML5
- CSS3
- JavaScript

## Backend

- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js
- CORS

## Database

- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```text
Darshan-Ease
│
├── Client
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
│
├── Server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   ├── index.js
│   └── package.json
│
├── documentation
│
└── README.md
```

---

# 🔐 Authentication

The application uses **JSON Web Token (JWT)** authentication.

Authentication Features:

- Secure User Login
- Protected Routes
- User Profile Authentication
- Logout Functionality

---

# 📦 Main Modules

### 🏠 Home

Displays the welcome page and project overview.

### 👤 Register

Allows new users to create an account.

### 🔑 Login

Allows registered users to log in securely.

### 🙍 Profile

Displays logged-in user information.

### 🎫 Products

Displays available Darshan tickets.

### 📋 Orders

Displays booked Darshan ticket details.

### 🛒 Cart

Displays selected booking items.

---

# 🔗 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/profile
POST /api/auth/logout
```

## Products

```
GET /api/products
```

## Orders

```
POST /api/orders
GET  /api/orders
```

---

# 🗄️ Database Collections

- Users
- Products
- Orders

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/AmruthaVarshini37/Darshan-Ease.git
```

## Install Backend

```bash
cd Server
npm install
```

## Install Frontend

```bash
cd ../Client
npm install
```

---

# ▶️ Run Backend

```bash
cd Server
node index.js
```

or

```bash
nodemon index.js
```

Backend runs on:

```
http://localhost:5000
```

---

# ▶️ Run Frontend

```bash
cd Client
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **Server** folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mysecretkey
```

---

# 📸 Screenshots

Include screenshots of:

- Home Page
- Register Page
- Login Page
- Products Page
- Profile Page
- Orders Page
- Cart Page

---

# 🎥 Project Demonstration

The project demonstrates the following workflow:

- User Registration
- User Login
- JWT Authentication
- Browse Darshan Tickets
- Book Darshan Ticket
- View Orders
- View User Profile
- Logout

---

# 🚀 Future Enhancements

- Online Payment Gateway
- QR Code Ticket Generation
- Email Confirmation
- SMS Notifications
- Admin Dashboard
- Booking History
- Seat Availability
- Temple Search
- Temple Reviews
- Multi-language Support

---

# 👨‍💻 Developers

- **Ayinavalli Amrutha Varshini**
- **Kosetti Uday Kumar**

---

# 📌 GitHub Repository

Repository Link:

https://github.com/AmruthaVarshini37/Darshan-Ease

---

# 📄 License

This project is developed for educational and learning purposes as part of the SmartBridge Internship Program.
