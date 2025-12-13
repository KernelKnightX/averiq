# AverIQ Backend Setup Guide

## Overview

The AverIQ website uses a hybrid backend approach:
- **Firebase** for data storage (Firestore) and file uploads (Storage)
- **Node.js/Express** for email notifications and API endpoints
- **Nodemailer** for sending emails via SMTP

## What's Already Set Up

✅ **Contact Form**: Saves to Firebase + sends email notifications  
✅ **Career Applications**: Uploads resumes to Firebase Storage + saves metadata to Firestore + sends email  
✅ **Newsletter**: Saves subscribers to Firestore + sends welcome email  
✅ **Server**: Express server with rate limiting, CORS, and security middleware

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

### 3. Set Up Firebase (Required for Career Applications)

Follow the detailed guide in [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

**Quick steps:**
1. Create a Firebase project at https://console.firebase.google.com/
2. Enable Firestore Database and Storage
3. Get your Firebase config and add to `.env`
4. Download service account JSON and save as `firebase-service-account.json`

### 4. Configure Email (Required for Contact Form)

Update these in your `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # For Gmail, use App Password, not regular password
CONTACT_EMAIL=info@averiq.com
```

**For Gmail:**
1. Enable 2-factor authentication
2. Generate an "App Password" at https://myaccount.google.com/apppasswords
3. Use that password in `SMTP_PASS`

### 5. Start Development Server

```bash
npm run dev
```

This starts both frontend (port 5173) and backend (port 3001) concurrently.

## Features

### Contact Form (`/contact`)
- **Frontend**: Saves to Firebase Firestore
- **Backend**: Sends email to `CONTACT_EMAIL` with submission details
- **Auto-reply**: Sends confirmation email to the user

### Career Applications (`/careers`)
- **Frontend**: Uploads resume to Firebase Storage
- **Backend**: 
  - Saves file to Firebase Storage (`careers/` folder)
  - Saves metadata to Firestore (`career_applications` collection)
  - Sends email to admin with resume attachment
  - Generates signed URL for 7-day access

### Newsletter Signup
- **Frontend**: Saves email to Firestore
- **Backend**: Sends welcome email to subscriber

## API Endpoints

### POST `/api/contact`
Submit contact form

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "+1234567890",
  "interest": "Strategic Advisory",
  "message": "I'm interested in..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### POST `/api/careers/apply`
Submit career application with resume

**Request:** `multipart/form-data`
- `name`: string
- `email`: string
- `role`: string
- `resume`: file (PDF, DOC, DOCX, max 5MB)

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully!",
  "resumeUrl": "https://storage.googleapis.com/..."
}
```

### POST `/api/newsletter`
Subscribe to newsletter

**Request:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter"
}
```

### GET `/api/health`
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## Firestore Collections

### `career_applications`
```javascript
{
  name: string,
  email: string,
  role: string,
  resumePath: string,
  resumeUrl: string,
  mimeType: string,
  size: number,
  createdAt: timestamp
}
```

### `contact_submissions`
```javascript
{
  name: string,
  email: string,
  company: string,
  phone: string,
  interest: string,
  message: string,
  createdAt: timestamp
}
```

### `newsletter_subscribers`
```javascript
{
  email: string,
  subscribedAt: timestamp
}
```

## Firebase Storage Structure

```
/careers/
  ├── 1234567890_John_Doe_Resume.pdf
  ├── 1234567891_Jane_Smith_CV.docx
  └── ...
```

## Security

- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configured for frontend URL only
- **Helmet**: Security headers enabled
- **File Validation**: 
  - Resume uploads limited to PDF, DOC, DOCX
  - Max file size: 5MB
- **Email Validation**: Regex validation on all email inputs
- **Firebase Rules**: Write-only access from frontend, read access only via Firebase Console

## Troubleshooting

### Firebase not working
```
⚠️  Firebase service account file not found. Resume uploads will be disabled.
```
**Solution**: Follow [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) to configure Firebase

### Email not sending
**Common issues:**
- Using regular password instead of App Password (Gmail)
- SMTP credentials incorrect
- Firewall blocking SMTP port 587

**Solution**: 
1. Verify SMTP credentials in `.env`
2. For Gmail, use App Password
3. Check server logs for detailed error messages

### CORS errors
```
Access to fetch at 'http://localhost:3001/api/contact' from origin 'http://localhost:5173' has been blocked by CORS policy
```
**Solution**: Make sure `FRONTEND_URL` in `.env` matches your frontend URL

### Resume upload fails
**Check:**
- File type (must be PDF, DOC, or DOCX)
- File size (must be < 5MB)
- Firebase Storage rules are configured correctly
- Firebase service account JSON is valid

## Production Deployment

### Environment Variables
Set these on your hosting platform (Vercel, Netlify, etc.):

```env
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
PORT=3001
# ... all other variables from .env
```

### Firebase Service Account
- **DO NOT** commit `firebase-service-account.json` to Git
- Upload it securely to your server or use environment variables
- Some platforms (like Vercel) allow you to paste the entire JSON as an environment variable

### Build and Start
```bash
npm run build
npm start
```

## Removing Duplicate Code

The `averiq-career-portal` folder is a duplicate and should be removed:

```bash
rm -rf averiq-career-portal
```

All career functionality is now integrated into the main application.

## Support

- **Firebase Issues**: See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)
- **Email Issues**: Check SMTP configuration and logs
- **General Issues**: Check server logs with `npm run dev:backend`

## Next Steps

1. ✅ Set up Firebase (follow FIREBASE_SETUP.md)
2. ✅ Configure email SMTP settings
3. ✅ Test contact form
4. ✅ Test career application upload
5. ✅ Remove duplicate `averiq-career-portal` folder
6. 🚀 Deploy to production