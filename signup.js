const firebaseConfig = {
  apiKey: "AIzaSyCcTufUMCNXrFBj0rg95OMm6_WCV56-4Gw",
  authDomain: "signup-40c78.firebaseapp.com",
  projectId: "signup-40c78",
  databaseURL: "https://signup-40c78-default-rtdb.firebaseio.com/",
  storageBucket: "signup-40c78.appspot.com",
  messagingSenderId: "1034251154598",
  appId: "1:1034251154598:web:a55e8b057dc17ef34d3067",
};
const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send() {
  var email = document.getElementById("email").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  detailsRef.push().set({
    email: email,
    username: username,
    password: password,
    last_login: Date.now(),
  });
}
