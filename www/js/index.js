// ---------------------------------
// Initialize the app F7
// ---------------------------------

var myApp = new Framework7();

// If your using custom DOM library, then save it to $$ variable
var $$ = Dom7;

// Add the view
var mainView = myApp.addView('.view-main', {
// enable the dynamic navbar for this view:
dynamicNavbar: true
});

// ---------------------------------
// Phonegap
// ---------------------------------
document.addEventListener("deviceready", onDeviceReady, false);

// ---------------------------------
// Initialize Firebase
// ---------------------------------

var config = {
  apiKey: "AIzaSyBs1h4yBkTqq_V89TVtqyFoq0ahDHNXEDg",
  authDomain: "test-328b5.firebaseapp.com",
  databaseURL: "https://test-328b5.firebaseio.com",
  projectId: "test-328b5",
  storageBucket: "test-328b5.appspot.com",
  messagingSenderId: "902118517534"
};

firebase.initializeApp(config);

var db = firebase.firestore();

// ---------------------------------
// Initialize user
// ---------------------------------
var player = {
  name      : 'mroguljic',
  longitude : null,
  latitude  : null,
  timestamp : null
}
