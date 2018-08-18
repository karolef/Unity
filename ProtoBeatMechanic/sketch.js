let beat = 0;
let countFail = 0;
let countSuccess = 0;
let currentCombo = [];
let comboToDo = [1, 0, 1];
let beep = new Audio('assets/beep.mp3');

// function setup() {
//
// }

function draw() {
  // ui elements
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  fill(255);
  textSize(24);
  text('press UP DOWN as displayed below to combo', 100, 100);
  text('green means u succeeded in a combo, red means u didnt', 100, 150);
  text('combo: up down up / 1 0 1', 100, 200);
  push();
  fill(255, 100, 0);
  text(countFail, 150, 250);
  fill(100, 250, 0);
  text(countSuccess, 450, 250);
  fill(255);
  text(currentCombo, 550, 250);
  pop();
  // console.log(frameCount/36);
  // 35 target number buffor 2 frames from each side
  beat++;

  // drawing the flashing border
  if (beat >= 33 && beat <= 37) {
    fill(0, 100, 255);
    beep.play();

    // rect for flashing when u can press keys
    border();
    // keyPressed();
    // console.log(beat);
  } else if (beat > 37) {
    fill(255);
    beat = 0;

  }
}

// WOMBO COMBO
function keyPressed() {
  if (currentCombo.length <= 2) {
    if (beat >= 33 && beat <= 37) {
      if (keyCode === UP_ARROW) {
        fill(0, 255, 0);
        rect(0, 0, windowWidth, windowHeight);
        currentCombo.push(1);
        console.log(currentCombo);
      } else if (keyCode === DOWN_ARROW) {
        currentCombo.push(0);
        console.log(currentCombo);
      }

      if (arraysEqual(comboToDo, currentCombo)) {
        currentCombo = [];
        countSuccess++;
      }
    } else if (beat < 33) {
      console.log('combo broken');
      currentCombo = [];
      countFail++;
    }
  } else {
    currentCombo = [];
    countFail++;
    return;
  }
  keyCode = 13;
}

function border() {
  noStroke();
  beginShape(QUADS);
  vertex(0, 0);
  vertex(windowWidth, 0);
  vertex(windowWidth, 50);
  vertex(0, 50);

  vertex(windowWidth - 50, 0);
  vertex(windowWidth - 50, windowHeight);
  vertex(windowWidth, windowHeight);
  vertex(windowWidth, 0);

  vertex(0, windowHeight - 50);
  vertex(windowWidth, windowHeight - 50);
  vertex(windowWidth, windowHeight);
  vertex(0, windowHeight);

  vertex(0, 0);
  vertex(50, 0);
  vertex(50, windowHeight);
  vertex(0, windowHeight);
  endShape();
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }

  return true;
}
