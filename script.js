function Hero(image, top, left, size,speed){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;
    this.setimage=function (image){
        this.image=image
    }

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
    this.setSpeed = function (speed){
        this.speed=speed;
    }

    this.moveRight = function(){
        this.left += this.speed;
    }
    this.moveLeft = function (){
        this.left -= this.speed;
    }

}

var hero = new Hero('image png/anime.png.png', 20, 30, 200);
hero.setSpeed(25)
function start(){
    let a = window.innerWidth - hero.size
    let  b = window.inputHeight - hero.size
    if(hero.left < a && hero.top <=20){
        hero.moveRight();
        hero.setimage("image png/anime.png.png")
    }else if (hero.top >=b &&hero.left>20){
        hero.moveLeft()
        hero.setimage("image png/anime1.png")
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();

