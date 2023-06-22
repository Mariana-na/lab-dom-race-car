class Player {
    constructor (gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;

        this.element.style.position = "absolute";

        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        //These define the properties of the element we just created;


        this.gameScreen.appendChild(this.element);
        //This adds the element to the gameScreen so it can be seen;
    }

    move (){
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 10){
            this.left = 10;
        }
        if (this.top < 10){
            this.top = 10;
        }
        if (this.left > this.gameScreen.offsetWidth - this.width -10){
            this.left = this.gameScreen.offsetWidth -this.width -10;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height -10){
            this.top = this.gameScreen.offsetHeight - this.height -10;
        }
        this.updatePosition();

    };

    updatePosition (){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}ps`;
    };

    didColide(obstacle) {
        // need to review the class to understand this part. Don't just want to copy the solution.
    };

}