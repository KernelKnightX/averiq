# AverIQ - Context Engineering Experts

A modern, responsive website for AverIQ showcasing context engineering services, career opportunities, and contact information.

## 🚀 Features

### Public Website
- **Home Page**: Company overview and value proposition
- **About**: Company history and team information
- **Services**: Detailed service offerings
- **Context Engineering**: Specialized context engineering solutions
- **Contact**: Contact form with Firebase integration
- **Careers**: Job listings with resume upload functionality

### Admin Dashboard 🔐
- **Career Applications Management**: View and download all submitted resumes
- **Contact Submissions**: Review all contact form messages
- **Status Tracking**: Update application statuses (pending, reviewed, contacted, rejected)
- **Secure Authentication**: Firebase Auth protected admin area

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Firebase (Firestore + Storage + Auth)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AverIQ-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your Firebase credentials

4. **Set up Firebase** (See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md))
   - Create Firebase project
   - Enable Firestore, Storage, and Authentication
   - Configure security rules
   - Get Firebase config credentials

5. **Set up Admin Dashboard** (See [ADMIN_SETUP.md](./ADMIN_SETUP.md))
   - Enable Firebase Authentication
   - Create admin user
   - Update Firestore security rules

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint code
npm run lint
```

## 🔐 Admin Access

**Admin Dashboard URL**: `http://localhost:5173/admin/login`

**Setup Steps**:
1. Enable Firebase Authentication (Email/Password)
2. Create admin user in Firebase Console
3. Login at `/admin/login`
4. Access dashboard at `/admin/dashboard`

See [ADMIN_SETUP.md](./ADMIN_SETUP.md) for detailed instructions.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Careers.tsx
│   ├── AdminLogin.tsx
│   ├── AdminDashboard.tsx
│   └── ...
├── services/           # Firebase services
│   ├── firebaseService.ts
│   └── adminService.ts
├── config/             # Configuration files
│   └── firebase.ts
├── App.tsx             # Main app component
└── main.tsx           # Entry point
```

## 🔥 Firebase Collections

### Firestore Collections
- `career_applications`: Career application submissions with resume metadata
- `contact_submissions`: Contact form submissions

### Firebase Storage
- `careers/`: Uploaded resume files (PDF, DOC, DOCX)

## 🌐 Routes

### Public Routes
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/context-engineering` - Context Engineering page
- `/contact` - Contact page
- `/careers` - Careers page

### Admin Routes (Protected)
- `/admin/login` - Admin login page
- `/admin/dashboard` - Admin dashboard (requires authentication)

## 📝 Environment Variables

Required environment variables (see `.env.example`):

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## 🔒 Security

- Firebase Authentication for admin access
- Firestore security rules for data protection
- Storage rules for file upload validation
- Environment variables for sensitive data
- Admin routes protected with authentication

## 📚 Documentation

- [Firebase Setup Guide](./FIREBASE_SETUP.md) - Complete Firebase configuration
- [Admin Setup Guide](./ADMIN_SETUP.md) - Admin dashboard setup
- [Quick Start Guide](./QUICK_START.md) - Quick setup instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is proprietary and confidential.

## 🆘 Support

For support and questions:
- Check documentation files
- Review Firebase Console for errors
- Contact the development team

---

**Built with ❤️ by AverIQ Team**