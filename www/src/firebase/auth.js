const config = {
  apiKey: "AIzaSyBs1h4yBkTqq_V89TVtqyFoq0ahDHNXEDg",
  authDomain: "test-328b5.firebaseapp.com",
  databaseURL: "https://test-328b5.firebaseio.com",
  projectId: "test-328b5",
  storageBucket: "test-328b5.appspot.com",
  messagingSenderId: "902118517534"
};

// Location: src/firebase/src/firebase.js
firebase.initializeApp(config);

// Location: src/firebase/src/firebase-firestore.js
var database = firebase.firestore();

var login_screen_trigger = true;

// Add a realtime listener
var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser){
  if(firebaseUser){
  	updateOnLogin(firebaseUser.uid)
    //console.log(firebaseUser.uid);
    if (!login_screen_trigger){
      myApp.closeModal(myApp.loginScreen());
    }
    // console.log('logged in');
    myApp.alert('logged in', 'Kangaroo');
  } else {
    // console.log('not logged in');
    myApp.alert('not logged in', 'Kangaroo');
    myApp.loginScreen();
  }
})

// Get elements
const txtUsername = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnSignIn   = document.getElementById('signin');
const btnSignUp   = document.getElementById('signup');
const btnSignOut  = document.getElementById('signout');

// Button handler
btnSignIn.addEventListener('click', function(){
  const email = txtUsername.value;
  const pass  = txtPassword.value;
  const auth  = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(function(e){
    console.log(e.message)
    myApp.alert(e.message, 'Kangaroo')
  });
  login_screen_trigger = false;
});

btnSignUp.addEventListener('click', function(){
  const email = txtUsername.value;
  const pass  = txtPassword.value;
  const auth  = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email,pass)
  promise.catch(function(e){
    console.log(e.message)
    myApp.alert(e.message, 'Kangaroo')
  });
  login_screen_trigger = false;
});

btnSignOut.addEventListener('click', function(){
  firebase.auth().signOut();
  login_screen_trigger = true;
});



function updateOnLogin(idToken){
//Execute on each log in
	getLocation()
	//console.log(idToken);
}