
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDEjoZ9ASY2gcph-p2q3-DWzX0MrX0swsw",
    authDomain: "notes-app-login-form.firebaseapp.com",
    projectId: "notes-app-login-form",
    storageBucket: "notes-app-login-form.appspot.com",
    messagingSenderId: "780090867546",
    appId: "1:780090867546:web:cfbd6409953e3bb49cfd63",
    measurementId: "G-R8C09KDGWQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function SignUp() {
    var email = document.getElementaryById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up")
}