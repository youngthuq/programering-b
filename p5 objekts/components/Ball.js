class Ball {
    constructor(radius, xpos, ypos, col){
        this.radius = radius 
        this.xpos = xpos
        this.ypos = ypos
        this.col = col

        this.gravity = 1
        this.friction = .97
        this.velocity = 0
        this.updrift = 25
    }

    show(){
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