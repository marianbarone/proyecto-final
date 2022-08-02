import admin from 'firebase-admin';
const serviceAccount = require ('./keys.json');

console.log(serviceAccount)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nodeecommerce-ab326.firebaseio.com",
});

export const db = admin.firestore();

console.log(db)
console.log('Se ha establecido la conexion con Firebase')

export default admin;