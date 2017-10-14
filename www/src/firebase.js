import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBs1h4yBkTqq_V89TVtqyFoq0ahDHNXEDg",
  authDomain: "test-328b5.firebaseapp.com",
  databaseURL: "https://test-328b5.firebaseio.com",
  projectId: "test-328b5",
  storageBucket: "test-328b5.appspot.com",
  messagingSenderId: "902118517534"
};

const database = 'nesto sta sad ne radi'

export function updateDb(data, user) {
  var userRef = database.collection("users").doc(user);
  userRef.update(data).then(function () {
    console.log("successfully updated!");
  })
  .catch(function (error) {
    console.error("Error updating document: ", error);
  });
}