let viktor, lukas

let student = ['mie', 'bjaarke', 'bjørn', 'marius', 'lukas', 'frederik', 'sofus', 'theis', 'viktor']
let balls = []

function setup(){
    createCanvas(400, 400)
    background('purple')
    student.map( item => {
        let b = new Ball(random(10, 40), random(width), random(height), 'red', item)
        balls.push(b)
    })
}

function draw(){
    background('purple')
    balls.map( item => {
        item.show()
        item.update()
    })

}

function keyPressed(key){
    if(key.key == ' '){
       balls.map(itme => itme.up())
    }
}