// import admin from "firebase-admin";
// import config from  "../config";

// admin.initializeApp ({
//   credential: admin.credential.cert(config.firebase),
// });

// const db = admin.firestore();

// class FirebaseContainer {
//   collection: any;
//   constructor(nameCollection) {
//     this.collection = db.collection(nameCollection);

//   }
//   async get(id){ //este esta con firebase. Hay que cambiar el resto a firebase porque estan con fs.
//     const doc = await this.collection.doc(id).get();
//     const data = doc.data();
//     return {... data, id};
//   }
