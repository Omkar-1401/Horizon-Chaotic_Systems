let gbox = [];
let u = 2;
let v = 2;
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 8; i++) {
    gbox[i] = [];
    for (let j = 0; j < 8; j++) {
      gbox[i][j] = new GridBox(i * 50, j * 50, 1, 'up');
    }
  }
  frameRate(3);
}

function draw() {
  background(220);
  if (mouseIsPressed) {
    for (let k = 0; k < 8; k++) {
      for (let l = 0; l < 8; l++) {
        let box_x = gbox[k][l].x;
        let box_y = gbox[k][l].y;
        if (mouseX > box_x && mouseX < box_x + 50 && mouseY > box_y && mouseY > box_y + 50) {
          u = k;
          v = l + 1;
        }
      }
    }
  }
  for (let k = 0; k < 8; k++) {
    for (let l = 0; l < 8; l++) {
      let each = gbox[k][l];
      let col = 255;
      if (each.w == -1) 
        col = 0;
      fill(col, col, col);
      stroke('black');
      rect(each.x, each.y, 50, 50);
    }
  }
  let myBox = gbox[u][v];
  
  stroke('red');
  
  if (myBox.w == 1)  {
    fill(255, 255, 255);
    circle(myBox.x + 25, myBox.y + 25, 50);
    if (myBox.conf == 'up') {
      u -= 1;
      gbox[u][v].conf = 'left';
    }
    else if (myBox.conf == 'left') {
      v += 1;
      gbox[u][v].conf = 'down';
    }
    else if (myBox.conf == 'down') {
      u += 1;
      gbox[u][v].conf = 'right';
    }
    else if (myBox.conf == 'right') {
      v -= 1;
      gbox[u][v].conf = 'up';
    }
  }
  else {
    fill(0, 0, 0);
    circle(myBox.x + 25, myBox.y + 25, 50);
    if (myBox.conf == 'up') {
      u += 1;
      gbox[u][v].conf = 'right';
    }
    else if (myBox.conf == 'left') {
      v -= 1;
      gbox[u][v].conf = 'up';
    }
    else if (myBox.conf == 'down') {
      u -= 1;
      gbox[u][v].conf = 'left';
    }
    else if (myBox.conf == 'right') {
      v += 1;
      gbox[u][v].conf = 'down';
    }
  }
  fill(255, 0, 0);
  circle(myBox.x + 25, myBox.y + 25, 5);
  myBox.w *= -1;
}   

class GridBox {
  constructor(x, y, w, conf) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.conf = conf;
  }
}
