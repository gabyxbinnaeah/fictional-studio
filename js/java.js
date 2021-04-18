$(document).ready(function() {
    // sets background image
    $("input").val();
    var imageUrl= "images/backgrounds/home1.jpg";
    $("div.landing").css("background-image", "url("+imageUrl+")");

    $("input").val();
    var serviceUrl ="images/backgrounds/comp.jpg";
    $("div.services").css("background-image", "url("+serviceUrl+")");

    $("input").val();
    var portUrl = "images/portfolio/work8.jpg";
    $("div.portpic").css("background-image", "url("+portUrl+")");
   
    $("input").val();
    var contactUrl = "images/backgrounds/c_image.jpg";
    $("div.contact").css("background-image", "url("+contactUrl+")");


      //toggles what we do , display description if prompted

    $("#development").click(function(){
        $("div.development").toggle(2000);
    });

    $("#design").click(function(){
        $("div.design").toggle(2000);
    });

    $("#product").click(function(){
        $("div.product").toggle(2000);
    });

     //hover over portfolio

     $(".work4").hover (function() {
    
        $("div.bg-modal").fadeToggle();
        
     });
 
    $(".work3").hover(function() {
        $("div.bg-work3").fadeToggle();
    });
 
    $(".work2").hover(function() {
     $("div.bg-work2").fadeToggle();
    });
 
    $(".work1").hover(function() {
     $("div.bg-work1").fadeToggle();
    });
 
    $(".work5").hover(function() {
     $("div.bg-work5").fadeToggle();
    });
 
    $(".work6").hover(function() {
     $("div.bg-work6").fadeToggle();
    });
 
    $(".work7").hover(function() {
     $("div.bg-work7").fadeToggle();
    });
 
    $(".outer8").hover(function() {
     $("div.bg-work8").fadeToggle();
    });

 
     // coolects submited inputs and store
     $("form#add").submit(function(event) {
        event.preventDefault();

        let enteredName=$("#name").val();
        alert(enteredName+" "+ "we have recieved your message.Thank you for reaching out to us."); 
        let enteredMail=$("#storedSender").val();
        let enteredText=$("#storedText").val();

        //displays
        $("div.identity").text(enteredName);
        $("div.mail-sender").text(enteredMail);
        $("div.email-message").text(enteredText);

        
    });
    // click functions 
         
    $("#mails").click(function() {
        $("div.all").toggle();
    });



});