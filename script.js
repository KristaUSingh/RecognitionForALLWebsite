var subscription = $('.email');
var submitBtn = $('button');
var newsletterSignup = $('.newsletter');
var firstName = $('.fName');
var lastName = $('.last');
var homeBtn = $('.contact_section');

submitBtn.on("click", emailSubmit); 

function emailSubmit () {
  var firstName = $('.first').val(); 
  alert("Thank you! You will hear from us shortly")
}
