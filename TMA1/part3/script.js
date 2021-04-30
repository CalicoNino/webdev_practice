//JSON file from books.json
var books = [{
        "image": "./books/1984.png",
        "caption": "1984 by George Orwell"
    },
    {
        "image": "./books/animalfarm.png",
        "caption": "Animal Farm by George Orwell"
    },
    {
        "image": "./books/caseforchrist.png",
        "caption": "The Case for Christ by Lee Strobel"
    },
    {
        "image": "./books/catcherandtherye.png",
        "caption": "the Catcher and the Rye by J. D. Salinger"
    },
    {
        "image": "./books/comtedemonte-cristo.png",
        "caption": "Le Comte de Monte-Cristo by Alexandre Dumas"
    },
    {
        "image": "./books/darkterritory.png",
        "caption": "Dark Territory: The Secret History of Cyebr War by Fred Kaplan"
    },
    {
        "image": "./books/express.png",
        "caption": "Murder on the Orient Express by Agatha Christie"
    },
    {
        "image": "./books/ghostinthewires.png",
        "caption": "Ghost in the Wires by Kevin Mitnick"
    },
    {
        "image": "./books/horla.png",
        "caption": "Le Horla et autres contes fantastiques by Guy de Maupassent"
    },
    {
        "image": "./books/joyland.png",
        "caption": "Joyland by Stephen King"
    },
    {
        "image": "./books/llddz.png",
        "caption": "llddz by Jacques Lazure"
    },
    {
        "image": "./books/lovelybones.png",
        "caption": "The Lovely Bones by Alice Sebold"
    },
    {
        "image": "./books/odyssee.png",
        "caption": "L'Odyssee by Homere"
    },
    {
        "image": "./books/oldmanandthesea.png",
        "caption": "The Old Man and The Seas by Ernest Hemingway"
    },
    {
        "image": "./books/perksofbeingawallflower.png",
        "caption": "The Perks of Being a Wallflower by Stephen Chbosky"
    },
    {
        "image": "./books/poison_rouge.png",
        "caption": "Rouge Poison by Michele Marineau"
    },
    {
        "image": "./books/routedechilfa.png",
        "caption": "La Route de Chlifa"
    },
    {
        "image": "./books/security.png",
        "caption": "Security by Gina Wohsdorf"
    },
    {
        "image": "./books/stuxnet.png",
        "caption": "Coutdown to Zero Day by Kim Zetter"
    },
    {
        "image": "./books/theprince.png",
        "caption": "The Prince by Niccolo Machiavelli"
    },
    {
        "image": "./books/zeros.png",
        "caption": "Zeros by Chuck Wendig"
    }
]


//setup varaibles
var canvas = null;
var ctx = null;
var xImageCoord;
var yImageCoord = 0;

var intervalTimer = null;

var nextImage = null;
var currentImage = null;

var nextCaption = null;
var currentCaption = null;


///Functions

//get current index if sequential, else get random
function getIndex(){
	if(document.getElementById("sequence").value  == "Sequential"){
		return parseInt(sessionStorage.ImageIndex);
	} else{
		return generateRandomNb(19);
	}
}

//generates random number
function generateRandomNb(upperRange){
	return Math.floor(Math.random() * upperRange);
}


//Initializes the System variables
function initializer(){  
    sessionStorage.clear()
	sessionStorage.ImageIndex = 0;
	sessionStorage.Started = "false";

	canvas = document.getElementById("Canvas");
	ctx = canvas.getContext("2d");

	ctx.font="14px Arial";
	ctx.fillStyle = "White"
	ctx.fillText("Click on the Red Start Button to Begin Slideshow!", 100, 100);

	document.getElementById("startStop").value = "Start";
}

//Starts/Stops Slideshow (Sets up interval) and changes button name
function startStop(){
	var started = (sessionStorage.Started == "true");
	if(!started){
		sessionStorage.Started = "true";
		document.getElementById("startStop").value = "Stop";
		intervalTimer = setInterval(loadNextImage, 1000);
	} else{
		clearInterval(intervalTimer);
		sessionStorage.Started = "false";
		document.getElementById("startStop").value = "Start";
	}
}

//Load Next image if sequenctial
function nextBook(){
	if( document.getElementById("sequence").value  != "Sequential") {
		return;
	}
	loadNextImage();
}

//Load Previous image if sequenctial
function previousBook(){
	if(document.getElementById("sequence").value  != "Sequential"){
		return;
	}
	sessionStorage.ImageIndex = parseInt(sessionStorage.ImageIndex) - 2;
    //handle index errors
	if(sessionStorage.ImageIndex == -1 ){ sessionStorage.ImageIndex = 19; }
	if(sessionStorage.ImageIndex == -2){ sessionStorage.ImageIndex = 18; }
	loadNextImage();
}


//Main Function Loads Images
function loadNextImage(){
    var index = getIndex();

	nextImage = new Image();
	nextCaption = books[index].caption;
	nextImage.src = books[index].image;
	
	//Draw image onto canvas when image is loaded to the session storage
	nextImage.onload = function() {
        
        if (document.getElementById("effect").value == "Fade") {
            //reset the interval
		    clearInterval(intervalTimer);
            intervalTimer = setInterval(fadeOut, 30);
        } else {
            xImageCoord = 0;
            //reset the interval
		    clearInterval(intervalTimer);
            intervalTimer = setInterval(slideOut)
        }		
	};
	
    //load next image
	sessionStorage.ImageIndex = parseInt(sessionStorage.ImageIndex) + 1;

    //image loop
	if(sessionStorage.ImageIndex == 20){ sessionStorage.ImageIndex = 0;	}
}

//fade out drawing image
function fadeOut(){
    if(currentImage == null){
        clearInterval(intervalTimer);
        ctx.globalAlpha = 0;
        intervalTimer = setInterval(fadeIn, 30);
        return;
    }
    ctx.globalAlpha -= 0.05;
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(currentImage, 0, 0, 800, 750);

    if(ctx.globalAlpha <= 0.05){
        clearInterval(intervalTimer);
        ctx.globalAlpha = 0;
        intervalTimer = setInterval(fadeIn, 30);
    }
}

//fade in drawing image
function fadeIn(){
	ctx.globalAlpha = ctx.globalAlpha + 0.05;
		
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(nextImage, 0, 0, 800, 800);

	if(ctx.globalAlpha >= 0.95){
        //caption Loading
		ctx.font="20px Arial";
		ctx.fillStyle = "white"
		ctx.fillText(nextCaption, 50, 50);
		
        //resets intervale and session storage
		clearInterval(intervalTimer);
		currentImage = nextImage;
		currentCaption = nextCaption
		nextImage = null;

		if(sessionStorage.Started == "true"){
			intervalTimer = setInterval(loadNextImage, 1000);
		}
	}
}

//slideout image drawing
function slideOut(){
		if(currentImage == null){
			clearInterval(intervalTimer);
			
			xImageCoord = 800;
			intervalTimer = setInterval(slideIn, 100);
			return;
		}

		xImageCoord += 20;
		ctx.clearRect(0, 0, 800, 750);  // clear canvas
  		ctx.drawImage(currentImage, xImageCoord, yImageCoord, 800, 750);

  		if(xImageCoord >= 800){
			clearInterval(intervalTimer);
			intervalTimer = setInterval(slideIn, 30);
  		}

}

//slidein image drawing
function slideIn(){
	xImageCoord -= 20;
    // Canvas Cleared
 	ctx.clearRect(0, 0, 800, 750);
  	ctx.drawImage(nextImage, xImageCoord, yImageCoord, 800, 750);

	if(xImageCoord <= 0){		
        //caption Loading
		ctx.font="20px Arial";
		ctx.fillStyle = "white"
		ctx.fillText(nextCaption, 50, 50);
		
        //resets interval and session storage
		clearInterval(intervalTimer);
		currentImage = nextImage;
		currentCaption = nextCaption
		nextImage = null;

		if(sessionStorage.Started == "true"){
			intervalTimer = setInterval(loadNextImage, 1000);
		}
	}    

}

window.addEventListener("load", initializer, false);