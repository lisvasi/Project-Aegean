/*  contact form  */

function validate(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    let text;
    if(firstname.length < 5){
      text = "Please Enter valid Firstname";
      error_message.innerHTML = text;
      return false;
    }
    if(lastname.length < 5){
      text = "Please Enter Correct Lastname";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 40){
      text = "Please Enter More Than 40 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("We will contact with you!");
    return true;
  }

/* button up */

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $("#scroll-top").show();
        }
        else {
            $("#scroll-top").hide();
        }
    })

    $("#scroll-top").click(function(){
        $("html,body").animate({scrollTop:0}, 1000);
    })
})

