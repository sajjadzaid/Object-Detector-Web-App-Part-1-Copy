function preload(){
    img=LoadImage("microwave.jpg");
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center()
}

function draw(){
    image(image,0,0,640,420);
    stoke("red");
    Text("microwave",45,75)
    fill("red");
    nofill()
    rect(30,60,450,350);

}