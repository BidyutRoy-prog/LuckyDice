document.getElementById("roll").addEventListener("click", function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var randomImageSource = "./images/dice" + randomNumber + ".png";
    var image = document.querySelector(".dice img");
    image.setAttribute("src", randomImageSource);
});