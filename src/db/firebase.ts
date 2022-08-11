import admin from 'firebase-admin';
const serviceAccount = {
  type: "service_account",
  project_id: "nodeecommerce-ab326",
  private_key_id: process.env.FIREBASE_private_key_id,
  private_key: process.env.FIREBASE_private_key,
  client_email: "firebase-adminsdk-yz8l7@nodeecommerce-ab326.iam.gserviceaccount.com",
  client_id: "108572125430898665670",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yz8l7%40nodeecommerce-ab326.iam.gserviceaccount.com"
}



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
  databaseURL: "https://nodeecommerce-ab326.firebaseio.com",
});

export const db = admin.firestore();

console.log('Se ha establecido la conexion con Firebase')

export default admin;