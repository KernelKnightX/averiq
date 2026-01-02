# Troubleshooting Career Application Upload Issues

## Common Issues and Solutions

### Issue: Unable to Upload Resume

If you're unable to upload applications on the Careers page, follow these steps:

## ✅ Step 1: Check Firebase Storage Rules

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `backend-for-website-e2118`
3. Click on **Storage** in the left sidebar
4. Click on the **Rules** tab
5. Make sure your rules look like this:

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

6. Click **Publish** to save the rules

## ✅ Step 2: Check Firestore Database Rules

1. In Firebase Console, click on **Firestore Database** in the left sidebar
2. Click on the **Rules** tab
3. Make sure your rules look like this:

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

4. Click **Publish** to save the rules

## ✅ Step 3: Verify Storage Bucket Name

1. In Firebase Console, go to **Storage**
2. Check the bucket name at the top (should be: `backend-for-website-e2118.firebasestorage.app`)
3. Make sure your `.env` file has the correct bucket name:

```env
VITE_FIREBASE_STORAGE_BUCKET=backend-for-website-e2118.firebasestorage.app
```

## ✅ Step 4: Check Browser Console for Errors

1. Open the Careers page
2. Open browser DevTools (F12 or Right-click > Inspect)
3. Go to the **Console** tab
4. Try uploading a resume
5. Look for any error messages

### Common Error Messages:

**Error: "Permission denied"**
- **Solution**: Update Storage rules (Step 1)

**Error: "Storage bucket not configured"**
- **Solution**: Verify `.env` file has correct `VITE_FIREBASE_STORAGE_BUCKET`

**Error: "File size exceeds limit"**
- **Solution**: Make sure file is less than 5MB

**Error: "Invalid file type"**
- **Solution**: Only PDF, DOC, and DOCX files are allowed

## ✅ Step 5: Test with a Sample File

1. Create a small test PDF file (< 1MB)
2. Fill out the career application form completely:
   - Full Name
   - Email Address
   - Position (select from dropdown)
   - Resume file
3. Click "Submit Application"
4. Wait for success message

## ✅ Step 6: Verify Upload in Firebase Console

After successful upload:

1. Go to Firebase Console > **Storage**
2. You should see a `careers/` folder
3. Inside, you'll find the uploaded resume with timestamp prefix
4. Go to Firebase Console > **Firestore Database**
5. Check the `career_applications` collection
6. You should see a new document with your application data

## 🔧 Quick Fix Script

If Storage rules are not set, you can also set them using Firebase CLI:

1. Install Firebase CLI (if not installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase in your project:
```bash
firebase init storage
```

4. Edit `storage.rules` file with the rules from Step 1

5. Deploy the rules:
```bash
firebase deploy --only storage
```

## 📞 Still Having Issues?

If you're still unable to upload:

1. **Check Network**: Make sure you have internet connection
2. **Try Different Browser**: Test in Chrome/Firefox/Safari
3. **Clear Cache**: Clear browser cache and cookies
4. **Restart Dev Server**: Stop and restart `npm run dev`
5. **Check Firebase Status**: Visit [Firebase Status Dashboard](https://status.firebase.google.com/)

## 🎯 Expected Behavior

When everything is working correctly:

1. Fill out all form fields
2. Select a PDF/DOC/DOCX file (< 5MB)
3. Click "Submit Application"
4. See "Uploading Application..." message
5. After 2-5 seconds, see success message: "Application submitted successfully! We'll review it within 48 hours."
6. Form fields are cleared
7. File input is reset

## 📋 Checklist

- [ ] Firebase Storage rules are configured
- [ ] Firestore Database rules are configured
- [ ] `.env` file has correct Firebase credentials
- [ ] Storage bucket name matches in `.env`
- [ ] File is PDF, DOC, or DOCX format
- [ ] File size is less than 5MB
- [ ] All form fields are filled
- [ ] Valid email address format
- [ ] Position is selected from dropdown
- [ ] Browser console shows no errors

---

**Need more help?** Check the main [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) guide for complete setup instructions.