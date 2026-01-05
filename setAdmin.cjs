const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const ADMIN_EMAILS = [
  'dashboardadmin1@averiq.ai',
  'admin@averiq.com',
  'admin@averiq.ai',
  // Add more admin emails here
];

async function setAdminRole(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log(`✅ Admin role set for ${email}`);
  } catch (error) {
    console.error(`❌ Error setting admin for ${email}:`, error.message);
  }
}

async function main() {
  console.log('Setting up admin roles...\n');
  for (const email of ADMIN_EMAILS) {
    await setAdminRole(email);
  }
  console.log('\nDone!');
}

main();
