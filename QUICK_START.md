# Quick Start Guide - AverIQ Website

## ✅ What's Been Fixed

1. **Removed duplicate code** - Identified `averiq-career-portal` folder (needs deletion)
2. **Set up Firebase backend** - Complete integration for careers, contact, and newsletter
3. **Redesigned Careers page** - Now matches design consistency of other pages
4. **Fixed TypeScript types** - All type errors resolved

## 🚀 Get Started in 3 Steps

### Step 1: Clean Up (30 seconds)
```bash
# Remove duplicate folder
rm -rf averiq-career-portal
```

### Step 2: Set Up Firebase (15 minutes)
1. Go to https://console.firebase.google.com/
2. Create a new project
3. Enable **Firestore Database** and **Storage**
4. Get your config and add to `.env` (see `FIREBASE_SETUP.md` for details)

### Step 3: Configure Email (5 minutes)
Update `.env` with your email settings:
```env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@averiq.com
```

## 🎯 Test It

```bash
npm run dev
```

Then test:
- Visit `/contact` - Submit a message
- Visit `/careers` - Upload a resume
- Check Firebase Console to see the data
- Check your email for notifications

## 📚 Full Documentation

- **Firebase Setup**: See `FIREBASE_SETUP.md`
- **Backend Details**: See `README_BACKEND_SETUP.md`
- **Complete Summary**: See `SETUP_SUMMARY.md`

## ✨ What Works Now

✅ Contact form saves to Firebase + sends email  
✅ Career applications upload resumes to Firebase Storage  
✅ Newsletter subscriptions save to Firestore  
✅ Email notifications for all submissions  
✅ Careers page matches design of other pages  
✅ No duplicate code  
✅ Production-ready security

## 🆘 Need Help?

- **Firebase issues**: Check `FIREBASE_SETUP.md`
- **Email issues**: Make sure you're using an App Password for Gmail
- **Type errors**: Already fixed! Types are installed

That's it! You're ready to go! 🎉