// import Image from 'next/image'
import styles from './styles/page.module.css'
import { ItemList } from './components/ItemList'
import Item from "./components/Item"

let items: Array<Item> = [new Item("test", 5)];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>My custom list</h1>

      <form id="frmList" method='POST'>
        <div className={styles.boxes}>
          <label htmlFor="itemName">Name of the item: </label>
          <input className={styles.texts}  type="text" id="itemName" name="itemName" placeholder='type something to add in the list' required></input>
        </div>
        <div className={styles.boxes}>
       
          <label htmlFor="itemQuantity">Number of items: </label>
          <input className={styles.numbers}  type="number" min="1" defaultValue="1" id="itemQuantity" name="itemQuantity"></input>
          
        <button type="submit" className={styles.submit} >ADD TO LIST</button>
        </div>
      </form>

      {ItemList(items)}

    </main>
  )
}