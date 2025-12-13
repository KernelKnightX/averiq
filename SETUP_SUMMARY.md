# AverIQ Website - Setup Summary

## ✅ What I've Done

### 1. **Identified and Documented Duplicate Code**
- **Found**: `averiq-career-portal/` folder with duplicate career functionality
- **Action Required**: Delete this folder as it's redundant
  ```bash
  rm -rf averiq-career-portal
  ```

### 2. **Set Up Firebase Backend Integration**

#### Created New Files:
- `src/config/firebase.ts` - Firebase client configuration
- `src/services/firebaseService.ts` - Firebase service functions for:
  - Career application submissions
  - Contact form submissions  
  - Newsletter subscriptions
- `FIREBASE_SETUP.md` - Complete Firebase setup guide
- `README_BACKEND_SETUP.md` - Backend documentation
- `SETUP_SUMMARY.md` - This file

#### Updated Files:
- `src/components/ResumeUploader.tsx` - Now uses Firebase for uploads with better UI
- `src/pages/Careers.tsx` - Redesigned to match other pages' design consistency
- `src/pages/Contact.tsx` - Now saves to Firebase in addition to sending emails
- `server.js` - Added graceful Firebase initialization with error handling
- `.env` - Added Firebase configuration variables
- `.env.example` - Updated with Firebase variables
- `.gitignore` - Added `firebase-service-account.json` to prevent accidental commits

### 3. **Improved Career Page Design**
The Careers page now matches the design consistency of other pages with:
- Hero section with gradient background
- "Why Join AverIQ" section with benefits cards
- "Our Values" section
- Open positions list with better styling
- Improved application form design
- CTA section at the bottom

### 4. **Backend Status**

#### ✅ Already Working:
- **Contact Form**: Sends emails via Nodemailer
- **Newsletter**: Sends welcome emails
- **Server**: Express server with security middleware

#### ✨ Now Added:
- **Firebase Integration**: 
  - Career applications save to Firestore
  - Resumes upload to Firebase Storage
  - Contact forms save to Firestore
  - Newsletter subscriptions save to Firestore
- **Email Notifications**: 
  - Admin gets notified of new applications with resume attachment
  - Users get confirmation emails
- **Error Handling**: Graceful fallback if Firebase isn't configured

## 📋 What You Need to Do

### Step 1: Remove Duplicate Folder
```bash
rm -rf averiq-career-portal
```

### Step 2: Set Up Firebase (15-20 minutes)

Follow the detailed guide in `FIREBASE_SETUP.md`. Quick overview:

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com/
   - Create new project

2. **Enable Services**
   - Enable Firestore Database
   - Enable Storage
   - Configure security rules (provided in guide)

3. **Get Credentials**
   - Copy Firebase config for frontend (add to `.env`)
   - Download service account JSON for backend (save as `firebase-service-account.json`)

4. **Update `.env` File**
   ```env
   # Add these Firebase variables
   VITE_FIREBASE_API_KEY=your-key
   VITE_FIREBASE_AUTH_DOMAIN=your-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   
   FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
   FIREBASE_STORAGE_BUCKET=your-bucket
   ```

### Step 3: Configure Email (5 minutes)

Update `.env` with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Use App Password for Gmail
CONTACT_EMAIL=info@averiq.com
```

**For Gmail:**
1. Enable 2FA on your Google account
2. Generate App Password at https://myaccount.google.com/apppasswords
3. Use that password in `SMTP_PASS`

### Step 4: Install Dependencies (if needed)
```bash
npm install
```

### Step 5: Test Everything
```bash
npm run dev
```

Then test:
1. **Contact Form** (`/contact`) - Submit a message
2. **Career Application** (`/careers`) - Upload a resume
3. **Check Firebase Console** - Verify data is saved
4. **Check Email** - Verify you received notifications

## 🎯 How It Works Now

### Contact Form Flow:
1. User fills form on `/contact`
2. **Frontend**: Saves to Firebase Firestore
3. **Backend**: Sends email to your configured `CONTACT_EMAIL`
4. **Backend**: Sends auto-reply to user
5. User sees success message

### Career Application Flow:
1. User fills form and uploads resume on `/careers`
2. **Frontend**: Uploads file to Firebase Storage
3. **Frontend**: Saves application data to Firestore
4. **Backend**: Sends email to admin with resume attachment
5. User sees success message

### Data Storage:
- **Firestore Collections**:
  - `career_applications` - All job applications
  - `contact_submissions` - All contact form submissions
  - `newsletter_subscribers` - All newsletter signups
- **Storage**:
  - `careers/` folder - All resume uploads

## 📊 Viewing Submissions

### Firebase Console:
1. Go to https://console.firebase.google.com/
2. Select your project
3. **Firestore Database** - View all submissions
4. **Storage** - View uploaded resumes

### Email:
- All submissions also sent to your email
- Career applications include resume as attachment

## 🔒 Security

✅ **Implemented:**
- Rate limiting (100 requests per 15 min)
- CORS protection
- File type validation (PDF, DOC, DOCX only)
- File size limits (5MB max)
- Email validation
- Firebase security rules (write-only from frontend)
- Sensitive files in `.gitignore`

## 🚀 Production Deployment

When ready to deploy:

1. Set all environment variables on your hosting platform
2. Upload `firebase-service-account.json` securely (don't commit!)
3. Update `FRONTEND_URL` to your production domain
4. Run `npm run build` and `npm start`

## 📚 Documentation

- `FIREBASE_SETUP.md` - Complete Firebase setup guide with screenshots
- `README_BACKEND_SETUP.md` - Backend API documentation
- `SETUP_SUMMARY.md` - This file

## ❓ Troubleshooting

### Firebase not working?
- Check console for errors
- Verify all environment variables are set
- Make sure `firebase-service-account.json` exists
- See `FIREBASE_SETUP.md` for detailed troubleshooting

### Email not sending?
- Verify SMTP credentials
- For Gmail, use App Password (not regular password)
- Check spam folder
- See server logs for errors

### Resume upload fails?
- Check file type (must be PDF, DOC, DOCX)
- Check file size (must be < 5MB)
- Verify Firebase Storage is enabled and rules are set

## 🎉 Summary

**Before:**
- ❌ Duplicate career portal folder
- ❌ No backend for career applications
- ❌ Contact form only sent emails (no database)
- ❌ Careers page didn't match design of other pages

**After:**
- ✅ Clean codebase (once you delete duplicate folder)
- ✅ Full Firebase backend integration
- ✅ Career applications with resume upload
- ✅ Contact forms save to database + send emails
- ✅ Careers page matches design consistency
- ✅ Comprehensive documentation
- ✅ Production-ready security

## Next Steps

1. Delete `averiq-career-portal` folder
2. Follow `FIREBASE_SETUP.md` to configure Firebase
3. Configure email in `.env`
4. Test all features
5. Deploy to production! 🚀