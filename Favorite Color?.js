function red_bg()
{
    r = 255;
    g = 0;
    b = 0;

}

function green_bg()
{
    r = 0;
    g = 255;
    b = 0;

}

function setup() {
  
  createCanvas(400, 400);
  
  btn_red = createButton("Red");
  btn_red.position(100,50);
  btn_red.mousepressed(red_bg);
  
  btn_green = createButton("Green");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg)
}

function draw() {
  background(200,10,200)
  text("Red",70,50)
  text("Green",270,50)
}

