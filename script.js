class Airplane{
    constructor(name,occupancy, speed){
        this._name= name;
        this._occupancy = occupancy;
        this._speed= speed;
    }
    get name(){
        return  this._name ;
    }
   
    set name(value){
        if(value===undefined || value===''){
            throw new Error('Name can not be null');
        }
      this._name= value;
    }
    get occupancy(){
        return this._occupancy;
    }
    set occupancy(value){
        if(value===undefined || value<0 || value===''){
            throw new Error('Name can not be null');
        }
        this._occupancy= value;
    }
    get speed(){
        return this._speed;
    }
    set speed(value){
        if(name===undefined || value<0 || value>900 ||value===''){
            throw new Error('Name can not be null');
        }
       this._speed= value;
    }
	stats(){
        return ( "Aeroplane : " +this._name + " with " + this._occupancy + " occupancy, is moving at  " + this._speed + "km/hr");
    }
}


Airplane.prototype.increase = function(x){
    return this._speed = this.speed+ x;
}
Airplane.prototype.decrease = function(x){
    this._speed = this.speed -x;
}

var a = new Airplane('SAKTI',43,454);
var b = new Airplane('A-32',180,600);
var c = new Airplane('SZ-343',100,652);
console.log(a.stats());
console.log(b.stats());
console.log(c.stats());
a.increase(100);
b.increase(200);
console.log("After inreasing speed "+ a.name);
console.log(a.stats());


