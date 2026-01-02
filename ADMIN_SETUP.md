# Admin Setup Guide

This guide covers setting up the admin dashboard and creating admin users for the AverIQ website.

## Prerequisites

- Firebase project set up with Authentication enabled
- Firestore and Storage configured
- Admin SDK access (for setting custom claims)

## Setting Up Admin Users

Admin users require custom claims to access the admin dashboard. You can set these claims using one of the following methods:

### Option 1: Using Firebase Admin SDK (Node.js Script)

1. **Download Service Account Key**:
   - Go to Firebase Console → Project Settings → Service Accounts
   - Generate a new private key
   - Save the JSON file as `serviceAccountKey.json` in the project root

2. **Install Dependencies** (already done):
   ```bash
   npm install --save-dev firebase-admin
   ```

3. **Run the Admin Setup Script**:
   ```bash
   node setAdmin.js
   ```

   The script will set admin claims for the email specified in the script. Update the email in `setAdmin.js` before running.

### Option 2: Using Firebase Console + Cloud Function

1. **Set up Firebase Cloud Functions**:
   - Initialize Firebase Functions in your project
   - Install firebase-functions and firebase-admin in the functions directory

2. **Deploy the Cloud Function**:
   Create `functions/src/index.ts` with:

   ```typescript
   import * as functions from 'firebase-functions';
   import * as admin from 'firebase-admin';

   admin.initializeApp();

   export const setAdminClaim = functions.https.onCall(async (data, context) => {
     // Only allow if called by existing admin or use a secret key
     const SECRET_ADMIN_KEY = 'your-super-secret-key-change-this';

     if (data.secretKey !== SECRET_ADMIN_KEY) {
       throw new functions.https.HttpsError('permission-denied', 'Invalid secret key');
     }

     try {
       await admin.auth().setCustomUserClaims(data.uid, { admin: true });
       return { success: true, message: `Admin role granted to ${data.uid}` };
     } catch (error) {
       throw new functions.https.HttpsError('internal', error.message);
     }
   });
   ```

3. **Deploy the function**:
   ```bash
   firebase deploy --only functions:setAdminClaim
   ```

4. **Call the function** from your app or use Firebase Console to trigger it.

## Admin Dashboard Access

1. **Create Admin User**:
   - Go to Firebase Console → Authentication → Users
   - Add user with email/password
   - Or allow users to register and then set admin claims

2. **Set Admin Claims**:
   - Use one of the methods above to set `{ admin: true }` custom claims

3. **Access Dashboard**:
   - Navigate to `/admin/login`
   - Login with admin credentials
   - Access dashboard at `/admin/dashboard`

## Security Notes

- Admin routes are protected by Firebase Authentication
- Custom claims are verified on the client-side
- Firestore rules should restrict admin operations to users with admin claims
- Keep service account keys secure and never commit to version control

## Troubleshooting

- **Admin login fails**: Ensure custom claims are set correctly
- **Dashboard not accessible**: Check Firestore security rules
- **Custom claims not working**: Verify the user exists in Firebase Auth

## Firebase Security Rules

Update your Firestore rules to allow admin operations:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write for authenticated users
    match /{document=**} {
      allow read, write: if request.auth != null;
    }

    // Admin-only operations
    match /admin/{document=**} {
      allow read, write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## Next Steps

- Test admin functionality
- Configure additional admin permissions as needed
- Set up monitoring for admin activities