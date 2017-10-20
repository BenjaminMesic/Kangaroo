function signin(){
  
  const email = $("#email").val();
  const pass  = $("#password").val();
  const auth  = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email,pass);
  
  promise.then(function(ok){
    // remove password from input div
    $("#password").val('');
    userID    = ok.uid;

  }).catch(function(e){
    console.log(e.message)
    myApp.alert(e.message, 'Kangaroo')
  });

  loginPopupTrigger = false;
}

function signup(){
  
  const email = $("#email").val();
  const pass  = $("#password").val();
  const auth  = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email,pass)

  promise.then(function(ok){
    // remove password from input div
    $("#password").val('');
    userID    = ok.uid;

  }).catch(function(e){
    console.log(e.message)
    myApp.alert(e.message, 'Kangaroo')
  });
  
  loginPopupTrigger = false;
}

function signout(){
  
  firebase.auth().signOut();
  loginPopupTrigger = true;
  // Peacfully deactivate listener without getting errors
  realtimeUpdatesListener()
}

function deleteAccount(){
  
  var user = firebase.auth().currentUser;

  user.delete().then(function() {
    myApp.alert('Account deleted.')
    loginPopupTrigger = true;
    userID            = null;
    // Peacfully deactivate listener without getting errors
    realtimeUpdatesListener();

  }).catch(function(e) {
    console.log(e.message)
    myApp.alert(e.message, 'Kangaroo')
  });
}

