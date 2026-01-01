
    const firebaseConfig = {
      apiKey: "AIzaSyAus_LhA6WhHTliGc4DzBHlEgU0wM_VJhw",
      authDomain: "loginform-887bc.firebaseapp.com",
      projectId: "loginform-887bc",
      storageBucket: "loginform-887bc.firebasestorage.app",
      messagingSenderId: "178270572080",
      appId: "1:178270572080:web:953a0f1a234cc6570127f5"
    };
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();

    function openSignUp() {
      window.location.href = "index.html";
    }

    async function logIn(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please enter email and password");
        return;
      }

      try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;

        // Check if user exists in Firestore
        const userDoc = await db.collection("Users").doc(uid).get();
        if (!userDoc.exists) {
          alert("User data not found!");
          return;
        }

        // Redirect to products page
        window.location.href = "products.html";
      } catch (error) {
        alert(error.message);
      }
    }



