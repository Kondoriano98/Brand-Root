 

 
var mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

    function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
















function Forma(){
 
    var ime =  document.getElementById("ime").value;
    var prezime =  document.getElementById("prezime").value;
    var email =  document.getElementById("email").value;
    var predmet =  document.getElementById("predmet").value;
    var poruka =  document.getElementById("poruka").value;

    try {
        if (ime == "" ||
        prezime == "" ||
        email == ""   ||
        predmet == "" ||
        poruka =="") 

            throw "Please fulfil all the parts!";
          if (ime.length>12) throw "Name is too long! Try again!";
            if (prezime.length>12) throw "Username is too long! Try again!";
            if(poruka.length>150) throw "Message too large! Try again!";  
          alert("Message sent.After the review, we will contact you! Thanks!");
       

        }  
       
         catch(err) {
   alert(err);
  }

}
 