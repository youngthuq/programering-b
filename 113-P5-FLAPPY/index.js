let x, y, diameter
let gravity = 1
let friction = .97   
let velocity = 0
let updrift = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 10
let score = 0
let fish1, fish2, fish3 , fish4, fish5, fish6, fish7, fish8, fish9
const animRate = 50

function preload() {
    fish1 = loadImage('assets/fish1.png');
    fish2 = loadImage('assets/fish2.png');
    fish3 = loadImage('assets/fish3.png');
    fish4 = loadImage('assets/fish4.png');
    fish5 = loadImage('assets/fish5.png');
    fish6 = loadImage('assets/fish6.png');
    fish7 = loadImage('assets/fish7.png');
    fish8 = loadImage('assets/fish8.png');
    fish9 = loadImage('assets/fish9.png');
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background('aquamarine')
    x = windowWidth/2
    diameter = 120
    y = diameter/2
    rectW = 20
    rectH = 100
    rectX = windowWidth
    rectY = windowHeight - rectH
}

function showRect(){
    rect(rectX, rectY, rectW, rectH)
    rect(rectX, 0, rectW, rectH)
}

function updateRect(){
    rectX -= rectSpeed 
    if(rectX <= 0){
        rectX = windowWidth
        rectH = random(100, 300)
        rectY = windowHeight - rectH  
    }
}

function show(){
    ellipseMode(CENTER)
    imageMode(CENTER)
    //ellipse(x, y, diameter)
    let a = frameCount % animRate / 10
    if(a <= 1)image(fish1, x, y)
    if(a >= 1 && a < 2)image(fish2, x, y)
    if(a >= 2 && a < 3)image(fish3, x, y)
    if(a >= 3 && a < 4)image(fish4, x, y)
    if(a >= 4 && a < 5)image(fish4, x, y)
    if(a >= 5 && a < 6)image(fish4, x, y)
    if(a >= 6 && a < 7)image(fish4, x, y)
    if(a >= 7 && a < 8)image(fish4, x, y)
    if(a <= 9)image(fish9)
}

function update(){
    velocity += gravity
    velocity *= friction
    y += velocity 

    if(y > windowHeight - diameter/2){
        y = windowHeight - diameter/2
        velocity = -velocity
    }
    if(y < diameter/2){
        y = diameter/2
        score = score + 4
    }
}

function collission(){
    if(x > rectX && x < rectX + rectW){
        if(y < rectH || y > windowHeight - rectH){
            score -= 1
        }
    }
}


function draw(){
    background('aquamarine')
    show()
    update()
    showRect()
    updateRect()
    select('#info').html(score)
    collission()
}

function keyPressed(key){
    if(key.key == ' '){
        velocity -= updrift
    }
}
