const firebaseConfig = {
      apiKey: "AIzaSyBmCkhaLVpJD9zTZfQgoX37RhMznJL-Mf0",
      authDomain: "kondonasia.firebaseapp.com",
      databaseURL: "https://kondonasia-default-rtdb.firebaseio.com",
      projectId: "kondonasia",
      storageBucket: "kondonasia.appspot.com",
      messagingSenderId: "394537735292",
      appId: "1:394537735292:web:75b794229250516a2a65f9"
    };
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "welcome "+  username
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick='reddirectToRoom_Name(this.id)' >#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function addroom()
{
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"creating a folder"
      });
      window.location = "kwitter_page.html";
      localStorage.setItem("room_name",roomname);
}

function reddirectToRoom_Name(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      window.location = "index.html";
      localStorage.removeItem("username");
}