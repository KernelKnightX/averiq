# Firebase Setup Guide for AverIQ

This guide will help you set up Firebase for the AverIQ website to handle:
- Career application resume uploads
- Contact form submissions
- Newsletter subscriptions

## Prerequisites

- A Google account
- Node.js installed on your machine

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or "Create a project"
3. Enter project name: `averiq-website` (or your preferred name)
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Set up Firebase Storage

1. In your Firebase project, click on "Storage" in the left sidebar
2. Click "Get started"
3. Choose "Start in production mode" (we'll configure rules later)
4. Select a Cloud Storage location (choose closest to your users)
5. Click "Done"

### Configure Storage Rules

Click on the "Rules" tab and update to:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read access to all files
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // Allow uploads to careers folder
    match /careers/{fileName} {
      allow write: if request.resource.size < 5 * 1024 * 1024 // 5MB limit
                   && request.resource.contentType.matches('application/pdf|application/msword|application/vnd.openxmlformats-officedocument.wordprocessingml.document');
    }
  }
}
```

## Step 3: Set up Firestore Database

1. Click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in production mode"
4. Select a location (same as Storage for best performance)
5. Click "Enable"

### Configure Firestore Rules

Click on the "Rules" tab and update to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Career applications - write only
    match /career_applications/{document} {
      allow write: if true;
      allow read: if false; // Only admins can read via Firebase Console
    }
    
    // Contact submissions - write only
    match /contact_submissions/{document} {
      allow write: if true;
      allow read: if false;
    }
    
    // Newsletter subscribers - write only
    match /newsletter_subscribers/{document} {
      allow write: if true;
      allow read: if false;
    }
  }
}
```

## Step 4: Get Firebase Configuration (Frontend)

1. Click on the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon `</>` to add a web app
5. Register app with nickname: "AverIQ Website"
6. Copy the `firebaseConfig` object

Update your `.env` file with these values:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Step 5: Set up Firebase Admin SDK (Backend)

1. In Firebase Console, go to "Project settings" > "Service accounts"
2. Click "Generate new private key"
3. Save the JSON file as `firebase-service-account.json` in your project root
4. **IMPORTANT**: Add this file to `.gitignore` to keep it secure

Update your `.env` file:

```env
FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
```

## Step 6: Update .gitignore

Make sure your `.gitignore` includes:

```
.env
firebase-service-account.json
```

## Step 7: Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test the Career page:
   - Navigate to `/careers`
   - Fill out the form and upload a resume
   - Check Firebase Console > Storage to see the uploaded file
   - Check Firebase Console > Firestore to see the application data

3. Test the Contact page:
   - Navigate to `/contact`
   - Submit the contact form
   - Check Firebase Console > Firestore to see the submission

## Viewing Submissions

### Via Firebase Console

1. **Career Applications**: Firestore Database > career_applications
2. **Contact Submissions**: Firestore Database > contact_submissions
3. **Newsletter Subscribers**: Firestore Database > newsletter_subscribers
4. **Resume Files**: Storage > careers folder

### Via Email

- Contact form submissions will also be sent to the email configured in `CONTACT_EMAIL`
- Career applications will be sent to the same email with a download link

## Security Best Practices

1. **Never commit** `.env` or `firebase-service-account.json` to version control
2. **Rotate keys** if they are ever exposed
3. **Set up Firebase App Check** for production to prevent abuse
4. **Monitor usage** in Firebase Console to detect unusual activity
5. **Set up billing alerts** to avoid unexpected charges

## Troubleshooting

### "Firebase not initialized" error
- Make sure all environment variables are set correctly
- Restart your development server after updating `.env`

### "Permission denied" errors
- Check your Firestore and Storage rules
- Make sure the rules allow write access

### Resume upload fails
- Check file size (must be < 5MB)
- Check file type (PDF, DOC, DOCX only)
- Check Storage rules

### Email not sending
- Verify SMTP credentials in `.env`
- For Gmail, use an "App Password" instead of your regular password
- Check spam folder

## Production Deployment

When deploying to production:

1. Update environment variables on your hosting platform
2. Upload `firebase-service-account.json` securely (don't commit to repo)
3. Update `FRONTEND_URL` in `.env` to your production domain
4. Consider setting up Firebase App Check for additional security

## Support

For issues specific to:
- **Firebase**: Check [Firebase Documentation](https://firebase.google.com/docs)
- **AverIQ Website**: Contact your development team