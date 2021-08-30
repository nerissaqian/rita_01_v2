var slide = 0;

var toggle_screen01 = false;
var passToggle = false;

var col1, col2;
var inp;

var passcode;
var array = ["human species", "unknown", "power of my mind", "dangers of my soul", "power of my heart", "complexities of my thoughts"];

var outroText;
var variable;


function preload() {
  outroText = loadStrings("outro.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("mrs-eaves");
  textSize(20);
  noCursor();

  col1 = int(random(150, 225));
  col2 = int(random(150, 225));

  inp = createInput("");
  passcode = array[int(random(0, array.length))];
  variable = height / 2;
}

function draw() {
  // INSTRUCTION SCREEN
  if (slide == 0) {
    background(255);
    inp.hide();
    gridbackground(0);

    fill(0);
    textStyle(ITALIC);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("open console", width / 2, height / 2 - 50);
    text("mac: command + option + j*", width / 2, height / 2);
    text("windows: control + shift + j*", width / 2, height / 2 + 25);
    text("*for firefox users press 'k' instead of 'j'", width / 2, height / 2 + 75);

    textSize(14);
    fill(150);
    textAlign(LEFT, CENTER);
    text("function setup() {", 25, 25);
    text("}", width - 25, height - 25);


    // CURSOR
    stroke(col1, col2, 255, 150);
    strokeWeight(3);
    strokeCap(SQUARE);
    line(mouseX - 5, mouseY, mouseX + 5, mouseY);
    line(mouseX, mouseY - 5, mouseX, mouseY + 5);
  }

  // FIRST PAGE
  else if (slide == 1) {
    background(0);
    inp.hide();


    // SPOTLIGHT CURSOR
    for (var i = 10; i > 5; i -= 0.2) {
      if (dist(mouseX, mouseY, width / 2 - 190, height / 2 - 125) < 100) {
        fill(col1, col2, 255, 10 + i * 3);
      } else {
        fill(255, 10 + i * 3);
      }
      noStroke();
      ellipse(mouseX, mouseY, i * 20, i * 20);
    }

    // TEXT
    fill(0);
    textSize(20);
    textStyle(NORMAL);

    textAlign(LEFT, CENTER);
    text("it matters not", width / 2 - 250, height / 2 - 150);
    text("what color", width / 2 - 250, height / 2 - 125);
    text("is in the light", width / 2 - 50, height / 2);
    text("that pierces the darkness", width / 2 - 50, height / 2 + 25);
    text("out of me.", width / 2 - 50, height / 2 + 150);


    gridbackground(0);
    decorativetext("1");
  }

  // SECOND PAGE
  else if (slide == 2) {
    //var change = map(dist(mouseX, mouseY, col1, col2), 0, height/2, 0, 255);
    background(map(dist(mouseX, mouseY, col1, col2), 0, height / 2, 255, 0));
    inp.hide();
    gridbackground(0);

    // LOG ALL CO-ORDS
    if (mouseX % 5 == 0 && mouseY % 5 == 0) console.log("XYZ: " + mouseX + ", " + mouseY + ", 255");

    // LOG MATCH
    if (toggle_screen01 == true && dist(mouseX, mouseY, col1, col2) < 10) {
      console.log("**XYZ: " + col1 + ", " + col2 + ", 255**");
      strokeWeight(2.5);
    } else {
      strokeWeight(0.5);
    }
    // CROSS HAIRS
    stroke(col1, col2, 255);
    line(mouseX, 0, mouseX, height);
    line(0, mouseY, width, mouseY);

    // TEXT
    fill(map(dist(mouseX, mouseY, col1, col2), 0, height / 2, 0, 255));
    textSize(20);
    textStyle(NORMAL);
    noStroke();
    text("it matters not", col1, col2);
    text("how many pixels", col1, col2 + 25);
    text("it takes to", col1 + 50, col2 + 75);
    text("tell the dark.", col1 + 50, col2 + 100);

    decorativetext("2")
  }

  // SCREEN THREE
  else if (slide == 3) {
    background(0);


    // INPUT BOX
    inp.show();
    inp.position(width / 2 + 120, height / 2 + 230);
    inp.size(225, 35);

    // SPOTLIGHT CURSOR
    for (var i = 10; i > 5; i -= 0.2) {
      fill(255, 10 + i * 3);
      noStroke();
      ellipse(mouseX, mouseY, i * 20, i * 20);
    }

    // BACKGROUND TEXT
    for (var i = 0; i < 200; i++) {
      var x = random(1, 255);
      var y = random(1, 255);
      fill(0);
      textSize(14);
      textStyle(ITALIC);
      textAlign(LEFT, CENTER);
      text(x * y, random(-100, width), random(height));
    }

    // PASSWORD CHECK
    if (keyIsPressed == true) {
      if (keyCode == 13) {
        if (inp.value() != passcode) {
          console.log("hmm your key doesn't seem to fit.");
        } else {
          slide++;
        }
      }
    }

   if (inp.value() == passcode) slide ++;

    gridbackground(255);

    // TEXT
    fill(255);
    textSize(20);
    textStyle(NORMAL);
    text("i am a mind—", width / 2, height / 2 + 25);
    text("a multiverse", width / 2 + 50, height / 2 + 75);
    text("of my most", width / 2 + 50, height / 2 + 150);
    text("disordered products.", width / 2 + 50, height / 2 + 175);
    text("i am the", width / 2 + 50, height / 2 + 250);


    decorativetext("3")

// SCREEN FOUR
  } else if (slide == 4) {
    background(255);
    inp.hide();
    gridbackground(0);

    textAlign(LEFT, CENTER);
    textSize(16);
    textStyle(ITALIC);
    fill(0);


    for (var i = 0; i < outroText.length; i++) {
      text(outroText[i], width / 2 - 200, variable + i * 25);
    }
    variable -= 0.5;
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  // INTRUCTION SCREEN
  if (slide == 0) {
    slide++;
  }

  // SCREEN ONE
  else if (slide == 1) {
    // CLICKED ON COLOUR CIRCLE
    if (dist(mouseX, mouseY, width / 2 - 190, height / 2 - 125) < 100) {
      console.log("it seems like you've found a code...")
      console.log("** RGB: " + col1 + ", " + col2 + ", 255 **");
      toggle_screen01 = true;
      slide++;
      console.log("move towards the light.")
    } else {
      console.log("the colour totally matters.")
    }

  } else if (slide == 2) {
    // CLICKED AT COORDS
    if (dist(mouseX, mouseY, col1, col2) < 10) {
      console.log("oh! you've found a key!")
      console.log("** key: i am the " + passcode + " **");
      slide++;
    } else {
      console.log("hmm it seems that your XYZ co-ordinates don't match your RGB code. moving towards the light might help.");
    }

  } else if (slide == 3) {
    if (mouseX < width / 2 + 120 || mouseX > width / 2 + 350 ||
      mouseY < height / 2 + 231 || mouseY > height / 2 + 265) {
      console.log("hmm this doesn't seem like the right place to enter your key.")
    }
  }
}

function keyPressed() {
  if (slide == 0) {
    if (keyCode == 74 || keyCode == 75) {
      console.log("hello! :)")
      console.log("** the following interactive experience is a short excerpt in testing puzzle-based mechanics. collect clues to proceed though each screen. press 'h' at any time for a hint. **");
      console.log("click the screen to begin");
    } else if (keyCode == 72) {
      console.log("you have successfully found your 'h' key but there are no hints on this page.");
    }
  } else if (slide == 1) {
    if (keyCode == 72) {
      console.log("click on the light that changes colour.");
    }
  } else if (slide == 2) {
    if (keyCode == 72) {
      console.log("click when the XYZ co-ordinates match RGB: " + col1 + ", " + col2 + ", 255. moving towards the light will help.");
    }
  } else if (slide == 3) {
    if (keyCode == 72) {
      console.log("complete the last sentence by typing in your key, then pressing 'enter'.");
    }
  }
}

function gridbackground(a) {
  for (var i = 0; i < width; i += 5) {
    stroke(150);
    strokeWeight(0.1);
    line(i, 0, i, height);
  }
  for (var j = 0; j < height; j += 5) {
    line(0, j, width, j);
  }

  noFill();
  stroke(a);
  ellipse(width - 200, 200, 450);
  ellipse(100, height, 300);
  ellipse(100, height - 100, 150);
  line(width / 2, 100, width, 100);
  line(width - 100, 50, width - 100, height - 100, )
}

function decorativetext(a) {
  textSize(14);
  fill(150);
  textStyle(ITALIC);
  text("if (screen == " + a + ") {", 25, 25);
  text("}", width - 25, height - 25);
}


// DUMP CODE

// NAV ARROWS
// fill(150);
// if (dist(mouseX, mouseY, width - 50, height - 50) < 50) {
//   textStyle(BOLD);
//   textSize(20);
// } else {
//   textStyle(NORMAL)
//   textSize(14);
// }
// text(">", width - 50, height - 50);
//
// if (dist(mouseX, mouseY, 50, height - 50) < 50) {
//   textStyle(BOLD);
//   textSize(20);
// } else {
//   textStyle(NORMAL)
//   textSize(14);
// }
// text("<", 50, height - 50);

//NAV ARROW INTERACTION
// if (toggle_screen01 == true && dist(mouseX, mouseY, width - 50, height - 50) < 50) slide++;
// if (dist(mouseX, mouseY, 50, height - 50) < 50) slide--;
