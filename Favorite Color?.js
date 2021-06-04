var r = 0;
var g = 0;
var b = 0;


function red_bg()
{
    r = 255;
    g = 0;
    b = 0;

}

function blue_bg()
{
  r = 0;
  g = 0;
  b = 255;
}

function green_bg()
{
    r = 0;
    g = 255;
    b = 0;

}

function yellow_bg()
{
    r = 180;
    g = 150;
    b = 0;

}

function purple_bg()
{
    r = 180;
    g = 0;
    b = 180;

}

function reset_bg()
{
    r = 0;
    g = 0;
    b = 0;

}


function setup() {
  
  createCanvas(400, 400);
  
  btn_red = createButton("Red");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);
  
  btn_green = createButton("Green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);

  btn_blue = createButton("Blue");
  btn_blue.position(180,200);
  btn_blue.mousePressed(blue_bg);

  btn_yellow = createButton("Yellow");
  btn_yellow.position(100,300);
  btn_yellow.mousePressed(yellow_bg);

  btn_purple = createButton("Purple");
  btn_purple.position(250,300);
  btn_purple.mousePressed(purple_bg);

  btn_reset = createButton("Reset");
  btn_reset.position(180,0);
  btn_reset.mousePressed(reset_bg);
}

function draw() {
  background(r,g,b);

}

