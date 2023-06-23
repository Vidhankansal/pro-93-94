const firebaseConfig = {
  apiKey: "AIzaSyDsrdoUZ_xOuQgLi2X61Mb5flQCQCBgOpI",
  authDomain: "kwitter-4b6a1.firebaseapp.com",
  databaseURL: "https://kwitter-4b6a1-default-rtdb.firebaseio.com",
  projectId: "kwitter-4b6a1",
  storageBucket: "kwitter-4b6a1.appspot.com",
  messagingSenderId: "746193640580",
  appId: "1:746193640580:web:86581caba523a3095036d1",
  measurementId: "G-RYX11VQB3C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");

document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("Username");
localStorage.removeItem("room_name");
    window.location = "Main.html";
}
