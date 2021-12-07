function setup() {
    createCanvas(1000, 500);
    frameRate(100);
}

var m1 = 30;

var g = 10;

var l1 = 100;

let pi = Math.PI;
var t1 = -pi / 2;

var x1 = 0;
var y1 = 0;

var w1 = 0.4;

var t = 0;

var points = [];
var phase1 = [];

function ForwardEuler(f, T0, dt, t0) {

    let T = T0;
    t = t0;

    for (let j = 0; j < 2; j++) {
            T[j] += dt * f(T, t)[j];
        }
    
    t += dt;
    // console.log(T);
    return T;
}

function D(sys, t) {
    let t1 = sys[0];
    let w1 = sys[1];


    return [w1, -g / l1 * sin(t1)];
}
  
  
function draw() {
    background(220);

    x1 = l1 * sin(t1);
    y1 = l1 * cos(t1);

    translate(width / 4, height / 2);

    strokeWeight(2);
    stroke('red');
    line(0, 0, x1, y1);


    fill('black');
    stroke('black');
    circle(x1, y1, m1 / 2);

    soln = ForwardEuler(D, [t1, w1], 0.1, t);

    t1 = soln[0];
    w1 = soln[1];


    vect = createVector(x1, y1);
    points.push(vect);

    strokeWeight(1);
    stroke('black');
    for (let k = 1; k < points.length; k++) {
        let v1 = points[k - 1];
        let v2 = points[k];
        line(v1.x, v1.y, v2.x, v2.y);
    }



    vect1 = createVector(t1, w1);
    fill('red');

    phase1.push(vect1);

    for (let l = 1; l < phase1.length; l++) {
        let v3 = phase1[l - 1];
        let v4 = phase1[l];
        line(v3.x * 30 + 400, v3.y * 250, v4.x * 30 + 400, v4.y * 250);
    } 
    circle(vect1.x * 30 + 400, vect1.y * 250, 7);

    stroke('red');
    circle(0, 0, 10);

    fill('gray');
    textFont('Corbel');
    textSize(30);
    stroke('gray');
    text('phase plot of bob', 360, 220);

    
}