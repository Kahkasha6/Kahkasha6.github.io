var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function sendEmail(){
    Email.send({
        SecureToken : "c17f8d45-55ac-46d7-83c6-c632b67b0e57",
        To : "kahkashatarannum4220@gmail.com",
        From : "kahkashatarannum4220@gmail.com",
        Subject : "from "+document.getElementById("email").value,
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
}




