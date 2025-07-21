let randomnumber1 = Math.floor(Math.random()*6)+1

let randomdiceimage = "dice"+randomnumber1+".png";

let randomimagesrc = "images/"+randomdiceimage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesrc);

let randomnumber2 = Math.floor(Math.random()*6)+1

let randomdiceimage2 = "dice"+randomnumber2+".png";

let randomimagesrc2 = "images/"+randomdiceimage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesrc2);

if(randomdiceimage>randomdiceimage2)
{
    document.querySelector("h1").innerHTML="player1 wins"
}

else if(randomdiceimage===randomdiceimage2)
{
     document.querySelector("h1").innerHTML="match draw"
}
else{
     document.querySelector("h1").innerHTML="player2 wins"
}
function exit(){
    document.querySelector("h1").innerHTML= "want to play again ? "
}
document.querySelector(".button").addEventListener("click",exit)