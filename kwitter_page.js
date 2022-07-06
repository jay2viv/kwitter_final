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
user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
// a
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
likes = message_data['likes'];
namehtml = "<h4> "+name1+"<img class='user_tick'src='tick.png'></h4> ";
messagehtml = "<h4 class='message_h4'>"+ message + "</h4>";
likehtml = "<button class='btn btn-primary' onclick='update_like(this.id)' id="+firebase_message_id+" value="+likes+">";
iconhtml = "<span class='glyphicon glyphicon-thumbs-up'>like: "+likes+"</span></button><hr>";

document.getElementById("output").innerHTML += namehtml+messagehtml+likehtml+iconhtml;
// z
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("text").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            likes:0
      });

      document.getElementById("text").value = "";
}

function logout()
{
      window.location = "index.html"
      localStorage.removeItem("username");
}

function update_like(message_id)
{
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}