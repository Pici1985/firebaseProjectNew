// make sure document has loaded
document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    console.log(app);    

});

// app.auth().signInAnonymously()
//   .then(() => {
//     console.log('signed in');
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorCode)
//   });

// function googleLogin(){
//     console.log('login fired');
//     const provider = new firebase.auth.GoogleAuthProvider();
    
//     firebase.auth().signInWithRedirect(provider)
//         .then(result => {
//             const user = result.user;
            // document.write(`Hello ${user.displayName}`);
//             console.log(user);    
//         })
//         .catch(console.log);
// };
