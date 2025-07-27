const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.getUserGreeting = functions.https.onCall(async (data, context) => {
  return { message: "Hello from ZippUp!" };
});
