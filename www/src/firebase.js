import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBs1h4yBkTqq_V89TVtqyFoq0ahDHNXEDg",
  authDomain: "test-328b5.firebaseapp.com",
  databaseURL: "https://test-328b5.firebaseio.com",
  projectId: "test-328b5",
  storageBucket: "test-328b5.appspot.com",
  messagingSenderId: "902118517534"
};

let cachedDb = null
function getDb(cb) {
  if (cachedDb) {
    return cb(cachedDb)
  }

  firebase.initilizeDb(function(db) {
    cachedDb = db
    cb(db)
  })
}


export function updateDb(data, user) {
  getDb(db => {
    db.collection("users").doc(user)
      .userRef.update(data).then(function () {
        console.log("successfully updated!");
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  })
}

export function saveInDb(data, user) {
  getDb(db => {
    db.saveNesto(...)
  })
}