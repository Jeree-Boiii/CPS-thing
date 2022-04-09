let button = document.getElementById("cps-button");
let cpsLabel = document.getElementById("cps-label");
let highestLabel = document.getElementById("highest");
let speedLabel = document.getElementById("speed-display");

var clicks = 0;
var highestCps = 0;

const crashSound = document.getElementById("crash");

const slowMusic = document.getElementById("slow-music");
const moderateMusic = document.getElementById("moderate-music");
const fastishMusic = document.getElementById("fastish-music");
const kindaFastMusic = document.getElementById("kinda-fast-music");
const fastMusic = document.getElementById("fast-music");
const superFastMusic = document.getElementById("super-fast-music");

slowMusic.loop = true;
moderateMusic.loop = true;
fastishMusic.loop = true;
kindaFastMusic.loop = true;
fastMusic.loop = true;
superFastMusic.loop = true;

button.addEventListener("click", function(e){
    if (!crashed){
        clicks++
        button.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
        e.preventDefault();
    }
});

var crashed = false;

setInterval(cpsDisplay, 1000);
function cpsDisplay(){

    if (!crashed){    

        if (clicks > highestCps){
            highestCps = clicks;
        };
        
        cpsLabel.innerText = `CPS: ${clicks}`;
        highestLabel.innerText = `Highest CPS: ${highestCps}`

        if (clicks === 0){
            speedLabel.innerText = "Click on this thing I guess";
            button.style.background = "white";
        };

        if (clicks >= 1 && clicks < 6){
            slowMusic.play();
            speedLabel.innerText = "Are you even trying?";
        }
        else{
            slowMusic.pause();
        };
        
        if (clicks >= 6 && clicks < 10){
            fastishMusic.play();
            speedLabel.innerText = "I see you're taking this nice and easy";
        }
        else{
            fastishMusic.pause();
        };

        if (clicks >= 10 && clicks < 13){
            moderateMusic.play();
            speedLabel.innerText = "This is pretty fast";
        }
        else{
            moderateMusic.pause();
        };


        if (clicks >= 13 && clicks < 16){
            kindaFastMusic.play();
            speedLabel.innerText = "You have become s p e e d";
        }
        else{
            kindaFastMusic.pause();
        };
        
        if (clicks >= 16 && clicks < 20){
            fastMusic.play();
            speedLabel.innerText = "SUPA SPEED ACTIVAAAAAATE";
        }
        else{
            fastMusic.pause();
        };

        if (clicks >= 20 && clicks < 30){
            superFastMusic.play();
            speedLabel.innerText = "AAAAAAAAAAAAAAAAAAAAAAAAH";
        }
        else{
            superFastMusic.pause();
        };
        
        if (clicks >= 30){
            speedLabel.innerText = "Error found: diagnosing problem...";
            speedLabel.style.color = "red";

            button.style.backgroundColor = "black";
            button.style.color = "red";
            button.innerText = "this is the end for you buddy";

            document.body.style.backgroundColor = "black";

            crashSound.play()

            setTimeout(function(){
                window.location.replace("autoclick.html");
            }, 5000);

            crashed = true;
        
    }
        
    };

    clicks = 0;
};
