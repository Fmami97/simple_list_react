export default class Item{
    name:string;
    quantity:number;

    constructor(name:string,quantity:number=1){
        this.name=name;
        this.quantity=quantity;
    }
    add(quantity:number):void{
        this.quantity += quantity;
    }
}