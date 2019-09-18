var button4On = true; //for button4 to show floor is selected
var button3On = true; //for button3 to show floor is selected
var button2On = true; //for button2 to show floor is selected
var button1On = true; //for button1 to show floor is selected
var helpOn = true; //for help button to show floor is selected

var moveY2 = 570; //starts at height of 570 used for mini-map

var buttonPress; //for pressing the button
var goingUp; //for when you start going up the floors
var floorOne; //sound for first floor
var floorTwo; //sound for second floor
var floorThree; //sound for third floor
var floorFour; //sound for fourth floor

function preload() {
  //used to load the sound effect for elevator button and floor sounds
  buttonPress = loadSound('soundEffects/buttonPress.wav');
  floorOne = loadSound('soundEffects/firstFloor.wav');
  floorTwo = loadSound('soundEffects/secondFloor.mp3');
  floorThree = loadSound('soundEffects/thirdFloor.wav');
  floorFour = loadSound('soundEffects/fourthFloor.wav');
  goingUp = loadSound('soundEffects/goingUp.wav');
}

function setup() {
  createCanvas(600, 650);
}

function draw() {
  background(50, 50, 50);
  time_date_and_map_text();
  miniMap();

  button4();
  button3();
  button2();
  button1();
  buttonHelp();

  //all the elevator buttons
}

function mousePressed() {
  //used for pressing the elevator buttons
  if (mouseX > 430 && mouseX < 550 && mouseY > 470 && mouseY < 600) {
    helpOn = !helpOn;
    if (helpOn == false) {
      buttonPress.play();
    } else {
      buttonPress.pause();
    }
  }
  if (mouseX > 200 && mouseX < 350 && mouseY > 50 && mouseY < 150) {
    //for button4
    if (button3On == false || button2On == false || button1On == false) {
      //used to comply with mini map because demo will show from going to ascending order
      button1On = true;
      button2On = true;
      button3On = true;
      button4On = !button4On;
    }
    button4On = !button4On;
    if (button4On == false) {
      //used for toggling the button sounds
      buttonPress.play();
    } else {
      buttonPress.pause();
    }
  } else if (mouseX > 200 && mouseX < 350 && mouseY > 200 && mouseY < 300) {
    //for button3
    if (button4On == false || button2On == false || button1On == false) {
      //used to comply with mini map because demo will show from going to ascending order
      button1On = true;
      button2On = true;
      button4On = true;
      button3On = !button3On;
    }
    button3On = !button3On;
    if (button3On == false) {
      buttonPress.play();
    } else {
      buttonPress.pause();
    }
  } else if (mouseX > 200 && mouseX < 350 && mouseY > 350 && mouseY < 450) {
    //for button2
    if (button4On == false || button3On == false || button1On == false) {
      //used to comply with mini map because demo will show from going to ascending order
      button1On = true;
      button3On = true;
      button4On = true;
      button2On = !button2On;
    }
    button2On = !button2On;
    if (button2On == false) {
      buttonPress.play();
    } else {
      buttonPress.pause();
    }
  } else if (mouseX > 200 && mouseX < 350 && mouseY > 500 && mouseY < 600) {
    //for button1

    if (button4On == false || button2On == false || button3On == false) {
      //used to comply with mini map because demo will show from going to ascending order
      button2On = true;
      button3On = true;
      button4On = true;
      button1On = !button1On;
    }
    button1On = !button1On;
    if (button1On == false) {
      buttonPress.play();
      floorOne.play();
    } else {
      buttonPress.pause();
    }
  }
}

function time_date_and_map_text() {
  fill(255);
  noStroke(); //removes button 1 highlighting bug where everything is being highlighted

  //for the map name
  textSize(32);
  text('Map', 65, 155);

  //for the time
  textSize(32);
  text('3:00 PM', 20, 40);

  //for the date
  textSize(32);
  text('09/20/2019', 430, 40);

  //for the braille language translation
  textSize(32);
  text('1', 290, 560);

  textSize(32);
  text('2', 290, 410);

  textSize(32);
  text('3', 290, 260);

  textSize(32);
  text('4', 290, 110);

  textSize(32);
  text('Help', 467, 558);
  //used for braille language for people with disabilities
}

function miniMap() {
  //moveY2 = 570
  //map functionality
  noFill();
  stroke(255); //used to create shape of narrow ellipse
  ellipse(100, 400, 110, 480); //narrow ellipse
  fill(255, 0, 0);
  ellipse(100, moveY2, 70, 70); //ellipse on the first floor

  if (button1On == false) {
    //CLEAR
    ellipse(100, moveY2, 70, 70); //ellipse on the first floor
  }

  if (button2On == false) {
    //CLEAR
    //if button 2 is turned on
    if (moveY2 <= 570) {
      moveY2 = moveY2 - 1;
      goingUp.play();
    }

    if (moveY2 <= 568) {
      //used to identify when the announcer says "Going Up"
      goingUp.pause();
    }

    if (moveY2 <= 481) {
      floorTwo.play(); //when elevator is about to arrive at floor, the audio must be played to avoid it repeating.
    }

    if (moveY2 <= 480) {
      //when object reaches the second floor
      moveY2 = 480;
      floorTwo.pause();
    }
  }

  //if button 3 is activated
  if (button3On == false) {
    //if button 3 is turned on
    if (moveY2 <= 480) {
      //when object is on second floor
      moveY2 = moveY2 - 1;
      goingUp.play();
    }

    if (moveY2 <= 478) {
      goingUp.pause();
    }

    if (moveY2 <= 391) {
      floorThree.play();
    }

    if (moveY2 <= 390) {
      //when object has reached third floor
      moveY2 = 390;
      floorThree.pause();
    }
  }

  //if button 4 is activated
  if (button4On == false) {
    //if button 4 is turned on
    if (moveY2 <= 390) {
      //when object is on third floor
      moveY2 = moveY2 - 1;
      goingUp.play();
    }

    if (moveY2 <= 388) {
      goingUp.pause();
    }

    if (moveY2 <= 251) {
      floorFour.play();
    }

    if (moveY2 <= 250) {
      //when object has reached fourth floor
      moveY2 = 250;
      floorFour.pause();
    }
  }
}

function buttonHelp() {
  if (helpOn) {
    noStroke();
  } else {
    stroke(255, 0, 0);
    strokeWeight(4);
  }
  fill(255, 255, 255, 55);
  ellipse(500, 550, 100, 100);
}

function button4() {
  if (button4On) {
    noStroke();
  } else {
    stroke(255, 0, 0);
    strokeWeight(4);
  }

  fill(255, 255, 255, 55);
  ellipse(300, 100, 100, 100); //button4
}

function button3() {
  if (button3On) {
    noStroke();
  } else {
    stroke(255, 0, 0);
    strokeWeight(4);
  }
  fill(255, 255, 255, 55);
  ellipse(300, 250, 100, 100); //button3
}

function button2() {
  if (button2On) {
    noStroke();
  } else {
    stroke(255, 0, 0);
    strokeWeight(4);
  }

  fill(255, 255, 255, 55);
  ellipse(300, 400, 100, 100); //button2
}

function button1() {
  if (button1On) {
    noStroke();
  } else {
    stroke(255, 0, 0);
    strokeWeight(4);
  }

  fill(255, 255, 255, 55);
  ellipse(300, 550, 100, 100); //button1
}
