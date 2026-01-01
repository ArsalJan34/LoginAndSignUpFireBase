
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

    function openLogin() {
      window.location.href = "login.html";
    }

    async function signUp(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const gender = document.getElementById("gender").value;
      const name = document.getElementById("name").value;
      const number = document.getElementById("number").value;
      const dateofBirth = document.getElementById("date").value;

      if (!email || !password || !gender || !name || !number || !dateofBirth) {
        alert("Please fill all fields");
        return;
      }

      try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;

        await db.collection("Users").doc(uid).set({
          uid,
          email,
          name,
          gender,
          number,
          dateofBirth
        });

        alert("Signup successful!");
        window.location.href = "login.html"; // redirect to login
      } catch (error) {
        alert(error.message);
      }
    }
