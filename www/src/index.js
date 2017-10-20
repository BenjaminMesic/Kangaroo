// ---------------------------------
// Initialize F7
var myApp = new Framework7();

// If your using custom DOM library, then save it to $$ variable
var $$ = Dom7;

// Add the main view
var mainView = myApp.addView('.view-main', {
});

// ---------------------------------
// App initalisation
// ---------------------------------

// Display
var loginPopupTrigger = true // needed in case of closing the app

// Misc
var map               = null
var markerKangaroo    = null
var markerPlayer      = null
var database          = null
var realtimeUpdatesListener = null

// Player
var userID            = null
var kangoos           = null
var geopointPlayer    = null
var geopointKangaroo  = null
var timestampPlayer   = null
var timestampKangaroo = null
var timestampBounty   = null

function initalize(){

  // Initalize firebase
  firebase.initializeApp(FIREBASE_CONFIG);
  database = firebase.firestore();

  firebase.auth().onAuthStateChanged(function(firebaseUser){
    if(firebaseUser){
      // console.log('logged in');
      // myApp.alert('logged in', 'Kangaroo');
      userID = firebase.auth().currentUser.uid
      
      if (!loginPopupTrigger){
        myApp.closeModal('.popup-login')
      }

      // Listen for realtime updates
      realtimeUpdatesListener = realtimeUpdates()

      // Google maps handler, needs google key from config
      loadGoogleMapsDynamically()

      myApp.closeModal('.login-screen')

    } else {     
      // myApp.alert('not logged in', 'Kangaroo');
      myApp.popup('.popup-login')
    }
  });
};

$(initalize)