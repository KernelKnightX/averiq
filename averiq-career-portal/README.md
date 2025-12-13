# AverIQ Career Portal

Welcome to the AverIQ Career Portal! This application allows students to select a career option and upload their resumes, which will be sent to the AverIQ admin via Firebase.

## Project Structure

The project is organized as follows:

```
averiq-career-portal
├── public
│   └── index.html          # Main HTML file serving as the entry point
├── src
│   ├── main.tsx           # Entry point for the React application
│   ├── App.tsx            # Main application component with routing
│   ├── pages
│   │   └── CareerPortal.tsx # Component for career selection and resume upload
│   ├── components
│   │   ├── CareerSelect.tsx  # Component for selecting a career option
│   │   └── ResumeUploader.tsx # Component for uploading resumes
│   ├── firebase
│   │   └── config.ts       # Firebase configuration settings
│   ├── services
│   │   └── firebaseService.ts # Functions for interacting with Firebase
│   ├── hooks
│   │   └── useUpload.ts     # Custom hook for managing file uploads
│   ├── styles
│   │   └── index.css        # Global CSS styles
│   └── types
│       └── index.ts         # TypeScript interfaces and types
├── .env.example             # Template for environment variables
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── vite.config.ts           # Vite configuration file
```

## Getting Started

To get started with the AverIQ Career Portal, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd averiq-career-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Firebase:**
   - Create a Firebase project and obtain your configuration settings.
   - Update the `src/firebase/config.ts` file with your Firebase API keys and project details.

4. **Run the application:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- **Career Selection:** Students can choose from a list of career options.
- **Resume Upload:** Students can upload their resumes, which will be sent to the AverIQ admin.
- **Firebase Integration:** The application uses Firebase for backend services, including file storage and data management.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.