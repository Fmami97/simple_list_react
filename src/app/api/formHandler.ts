import { NextApiRequest, NextApiResponse } from "next";
import { ItemList } from '../components/ItemList'
import Item from "../components/Item"

interface ListData extends NextApiRequest{
    body:{
        itemName:string;
        quantity:number;
    };
}
let items: Array<Item> = [];
function addItem(newItem:Item):void{
    let itemFound:boolean= false;
    for(let item of items){
      //if the same item is found, increments the quantities according to the new item
      if(item.sameItemAs(newItem)){
        item.add(newItem.quantity);
        itemFound = true;
        break;
      }
    }
    if(!itemFound){
      items.push(newItem);
    }
  }
  
  function removeItem(itemToRemove:Item,quantity:number=1){
    let itemFound:boolean= false;
    for(let item of items){
      //if the same item is found, increments the quantities according to the new item
      if(item.sameItemAs(itemToRemove)){
        item.remove(quantity);
        if(item.quantity <= 0){
            items.splice(items.indexOf(item),1);
        }
        itemFound=true;
        break;
      }
    }
    if(!itemFound){
      throw new Error("The given item were not found, cannot remove it");
    }
  }

function handler(req:ListData,res:NextApiResponse){
    if(req.method != "POST"){
        res.status(405).send("Method not allowed");
        return;
    }
    const newItem = new Item( req.body.itemName, req.body.quantity);

    addItem(newItem);

    return res.status(200);
}


function fetchList():Array<Item>{
    return items;
}

export default{handler,fetchList}