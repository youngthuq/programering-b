let viktor, lukas

function setup(){
    createCanvas(400, 400)
    background('purple')

    let viktor = new Ball(12, 200, 100, 'green')
    let lukas = new Ball(8, 120, 70, 'gray')
    console.log(viktor)
    console.log(lukas)
}

function draw(){
    background()
    viktor.show()
    lukas.show()
}