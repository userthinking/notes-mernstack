# Notes App - MERN Stack

A modern, full-stack notes application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, real-time note management, and a beautiful UI.

## 🚀 Features

### Authentication
- User registration and login
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes and API endpoints

### Notes Management
- Create, read, update, and delete notes
- Random background colors for visual appeal
- Real-time search functionality
- Responsive grid layout
- Smooth animations and transitions

### User Experience
- Modern, responsive design
- Intuitive user interface
- Loading states and error handling
- Toast notifications for user feedback
- Persistent authentication state

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **React Toastify** - Notifications

## 📁 Project Structure

```
notes-mernstack/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── auth/       # Authentication components
│   │   │   │   ├── Auth.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   ├── AppContent.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Note.jsx
│   │   │   ├── NoteForm.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/        # React contexts
│   │   │   ├── AuthContext.jsx
│   │   │   └── NotesContext.jsx
│   │   ├── api/           # API functions
│   │   │   ├── auth.js
│   │   │   └── notes.js
│   │   ├── pages/         # Page components
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                # Backend Node.js application
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   │   ├── note.controllers.js
│   │   │   └── user.controllers.js
│   │   ├── models/        # Database models
│   │   │   ├── note.model.js
│   │   │   └── user.model.js
│   │   ├── routes/        # API routes
│   │   │   ├── note.routes.js
│   │   │   └── user.routes.js
│   │   ├── middlewares/   # Custom middlewares
│   │   │   └── auth.middleware.js
│   │   ├── utils/         # Utility functions
│   │   │   ├── createToken.js
│   │   │   └── sendError.util.js
│   │   ├── db/           # Database connection
│   │   │   └── connectDB.js
│   │   ├── app.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd notes-mernstack
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the server directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/notes_db
   JWT_SECRET=your_jwt_secret_key_here
   PORT=3001
   CLIENT_URL=http://localhost:5173
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**
   ```bash
   cd server
   npm run dev
   ```

   **Frontend (Terminal 2):**
   ```bash
   cd client
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 🔧 API Endpoints

### Authentication
- `POST /api/users/signup` - User registration
- `POST /api/users/login` - User login
- `GET /api/users` - Get all users (admin)
- `GET /api/users/:id` - Get user by ID

### Notes (Protected Routes)
- `GET /api/notes` - Get user's notes
- `POST /api/notes` - Create new note
- `GET /api/notes/:id` - Get note by ID
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## 🔐 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- Protected API routes
- CORS configuration
- Input validation and sanitization
- Error handling middleware

## 🎨 UI/UX Features

- Responsive design for all devices
- Smooth animations and transitions
- Modern gradient backgrounds
- Interactive hover effects
- Loading states and spinners
- Toast notifications
- Search functionality
- Random note colors

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Deploy to platforms like Heroku, Railway, or DigitalOcean
3. Configure MongoDB connection (Atlas recommended for production)

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or GitHub Pages
3. Update API base URLs for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the existing issues
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Happy Note-Taking! 📝✨**

