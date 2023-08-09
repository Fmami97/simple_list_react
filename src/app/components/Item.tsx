export default class Item{
    name:string;
    quantity:number;

    sameItemAs(other:Item):boolean{
        return this.name.toLowerCase() == other.name.toLowerCase()
    }
    add(quantity:number):void{
        if(quantity > 0){
            this.quantity += quantity;
        }else{
            throw new Error("cannot add items with a negative value");
        }
    }
    remove(quantity:number =1)
    {
        if(this.quantity < 1)
        {
            throw new Error("cannot remove anymore, this item should be deleted instead");
        }
        this.quantity -= quantity;
    }

    constructor(name:string,quantity:number=1){
        this.name=name;
        this.quantity=quantity;
    }
}