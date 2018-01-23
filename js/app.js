$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyCR-3g5Nd4LWmti1EpV8bp7JOwJQ8Ps_Kg',
    authDomain: 'mi-proyecto-3b344.firebaseapp.com',
    databaseURL: 'https://mi-proyecto-3b344.firebaseio.com',
    projectId: 'mi-proyecto-3b344',
    storageBucket: '',
    messagingSenderId: '978784732774'
  };
  firebase.initializeApp(config);

  // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  var provider = new firebase.auth.GoogleAuthProvider();

  $('#button-google').click(function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    });
  });
});