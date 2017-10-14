// Get elements
const txtEmail    = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin    = document.getElementById('btnLogin');
const btnSignUp   = document.getElementById('btnSignUp');

btnLogin.addEventListener('click', e =>{
  const email = txtEmail.value;
  const pass  = txtPassword.value;
  const auth  = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));

});

btnSignUp.addEventListener('click', e=>{
  const email = txtEmail.value + '@kangaroo.com';
  const pass  = txtPassword.value;
  const auth  = firebase.auth();

  const promise = auth.createUserWithEmailAndPassword(email,pass);
  promise.catch(e => console.log(e.message));
});

btnLogout.addEventListener('click', e=>{
  firebase.auth().signOut();
});

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser){
    console.log(firebaseUser);
  } else {
    console.log('not logged in');
  }
})