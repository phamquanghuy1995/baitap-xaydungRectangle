class rectangle {
    width;
    length;

    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    getwidth() {
        return this.width;
    }

    setwidth(value) {
        this.width = value;
    }
    getlength(){
        return this.length;
    }
    setlength(value){
        this.length=value;
    }
    getArea(){
        return  this.width*this.length;
    }

    getperimeter(){
        return 2*(this.width+this.length);
    }
}