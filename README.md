# 🛕 Darshan Ease – Temple Darshan Ticket Booking System

## 📌 Project Overview

Darshan Ease is a MERN Stack web application developed to simplify the process of booking temple darshan tickets online. The system allows devotees to register, log in securely, browse available darshan tickets, view their profile, and manage bookings through an easy-to-use interface.

The project aims to reduce long waiting queues at temples by providing an online booking platform that is simple, secure, and accessible from anywhere.

---

# ✨ Features

- User Registration
- User Login & Logout
- JWT Authentication
- View User Profile
- Browse Darshan Tickets
- View Orders
- Shopping Cart
- MongoDB Database Integration
- Responsive User Interface

---

# 🛠️ Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js
- CORS

### Database
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```
DarshanEase
│
├── Client
│   ├── components
│   ├── pages
│   ├── services
│   └── App.jsx
│
├── Server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── index.js
│
└── README.md
```

---

# 🔑 Authentication

The application uses **JSON Web Token (JWT)** authentication.

Features include:

- Secure Login
- Protected Routes
- User Profile Authentication
- Logout

---

# 📦 Main Modules

### Home
Displays the welcome page and project overview.

### Register
Allows new users to create an account.

### Login
Allows registered users to log into the application securely.

### Profile
Displays logged-in user information.

### Products
Shows available Darshan tickets.

### Orders
Displays booked darshan ticket details.

### Cart
Displays selected booking items.

---

# 🗄️ Database Collections

- Users
- Products
- Orders

---

# ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Install Client Dependencies

```bash
cd Client
npm install
```

### Install Server Dependencies

```bash
cd Server
npm install
```

---

# ▶️ Run Frontend

```bash
cd Client
npm run dev
```

Runs on:

```
http://localhost:5173
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

Runs on:

```
http://localhost:5000
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **Server** folder.

Example:

```env
PORT=5000

MONGO_URI=Your_MongoDB_Atlas_Connection_String

JWT_SECRET=mysecretkey
```

---

# 📸 Screenshots

- Home Page
- Login Page
- Register Page
- Products Page
- Profile Page
- Orders Page
- Cart Page

---

# 🚀 Future Enhancements

- Online Payment Gateway
- Temple Search
- QR Code Ticket Generation
- Email Confirmation
- Admin Dashboard
- Booking History
- Seat Availability
- Temple Reviews

---
👨‍💻 Developers

**Ayinavalli Amrutha Varshini**
**Kosetti Uday Kumar**

Project:

**Darshan Ease – Temple Darshan Ticket Booking System**

---

# 📄 License

This project is developed for educational and learning purposes.
