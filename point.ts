
export class Point{
   
    constructor(private _x?:number, private _y?: number){
    }

    get x(){
        return this._x;
    }
    set x(value){
        if(value < 0)
        throw new Error('value cannot be less than ');
        this._x = value;
        
    }

    drow(){

        console.log('X: ' +this._x + ', Y: ' + this._y)
    }

}