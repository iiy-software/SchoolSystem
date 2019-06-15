//signup
var signupform = document.querySelector('#signupform');
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user details
    const mail = signupform['email'].value;
    const password = signupform['password'].value;

    //sign up the user
    auth.signInWithEmailAndPassword(mail, password).then(cred => {
        console.log(cred);
        signupform.reset();
    });
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user);
            window.location = 'dashboard.html'; //After successful login, user will be redirected to dashboard.html
        }
        // else {
        //     signupform.reset();
        //     window.alert('User does not exist');
        // }
    });
});

// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         window.alert('User signed Out Successfully');
//     });
// });

// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//         {
//             provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//             requireDisplayName: false
//         }
//     ]
// });

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());


// var uiConfig = {
//     callbacks: {
//         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
//             // User successfully signed in.
//             // Return type determines whether we continue the redirect automatically
//             // or whether we leave that to developer to handle.
//             return true;
//         },
//         uiShown: function () {
//             // The widget is rendered.
//             // Hide the loader.
//             document.getElementById('loader').style.display = 'none';
//         }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: 'dashboard.html',
//     signInOptions: [
//         // Leave the lines as is for the providers you want to offer your users.
//         firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
// };


// firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//         // User is signed in.
//         // var displayName = user.displayName;
//         // var email = user.email;
//         // var emailVerified = user.emailVerified;
//         // var photoURL = user.photoURL;
//         // var isAnonymous = user.isAnonymous;
//         // var uid = user.uid;
//         // var providerData = user.providerData;
//         window.location = "dashboard.html";
//     } else {
//         // User is signed out.
//         window.alert("Sign in with your credentials");
//         // ...
//     }
// });


// function login() {
//     var mail = document.getElementById('mail').value;
//     var pass = document.getElementById('password').value;
//     firebase.auth().signInWithEmailAndPassword(mail, pass).catch(function (error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         window.alert("Error Occured with error code-" + errorCode + "and error message" + errorMessage);
//     });

// }

