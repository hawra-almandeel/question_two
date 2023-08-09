
var submitButton = document.getElementById("submit");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");

submitButton.addEventListener("click",
                            function(){
                                alert("Congratulations! "+ firstName.value + " " + lastName.value + " you are now signed up")

});




