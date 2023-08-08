import itemStyles from '../styles/Items.module.css'
import Item from './Item'

export const ItemList = (items:Array<Item>) => {
    return (
        <ul id="mainList" className={itemStyles.list}>
          {items.map((item:Item) => <li>
            <div className={itemStyles.items}>
                <span className={itemStyles.itemNames}>{item.name} </span>
                <span>quantity : {item.quantity}</span>
            </div>
          
          </li>)} 
      </ul> 
    )
}
