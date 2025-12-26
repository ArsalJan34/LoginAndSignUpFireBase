  const db = firebase.database()
  var loadingimg = document.getElementById("loadingimg")
  var submit =document.getElementById("submit")



  function signUp() {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("number").value;
  var gender = document.getElementById("gender").value;
  var name = document.getElementById("name").value
  var dateofBirth = document.getElementById("date").value


  const auth = firebase.auth();


  if (email == "" || password == "" || number==""|| gender=="" || name==""|| dateofBirth=="") {
    alert("ENTER EMAIL AND PASSWORD");
  } else {
    loadingimg.style.display="inline"
    submit.style.display="none"
    auth
      .createUserWithEmailAndPassword(email, password)
      .then( async (userdata) => {
        var user = userdata;
        console.log(userdata.user.uid)

        var object = {
        email,
      password,
      gender,
      name,
        dateofBirth,
         number:number,
         uid : userdata.user.uid

        }

        await db.ref("Users").child(userdata.user.uid).set(object)



        alert("Sign up Successfully")

        window.location.href="./login.html"


      })
      .catch((error) => {
            loadingimg.style.display="none"
    submit.style.display="inline"
        var errorCode = error.code; //200,201,404,401
        var errorMessage = error.message;
        alert(errorMessage)

      });
  }
}

// function signUp(){
//   // try{ .then
//     console.log("test")
//     console.log("sghgshd sdghsghd dgshgdhsd")
//     console.log("smit ")

//     console.log(smit)
//   // }
//   // catch(e){ .catch
//   //   console.log(e)

//   // }
//   // finally{
//     console.log("ok")
//   // }
// }
