class Ball {
    constructor(radius, xpos, ypos, col, name){
        this.radius = radius 
        this.xpos = xpos
        this.ypos = ypos
        this.col = col
        this.name = name

        this.gravity = 1
        this.friction = radius / 12
        this.velocity = 0
        this.updrift = 25
    }

    show(){
        textSize(21)
        text(this.name, this.xpos, this.ypos - (this.radius + 2))
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
    }

    update(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity

        if(this.ypos > height - this.radius){
            this.ypos = height - this.radius
            this.velocity = - this.velocity
        }
    }
    up(){
        this.velocity -= this.updrift
    }
}