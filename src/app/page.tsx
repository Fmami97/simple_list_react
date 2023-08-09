// import Image from 'next/image'
import styles from './styles/page.module.css'
import { ItemList } from './components/ItemList'
import Item from "./components/Item"
import {Validate} from "./components/Validate"
import formHandler from "./api/formHandler"
let items: Array<Item> = [];

export default function Home() {
  
  // document.getElementById("frmList").addEventListener("submit",(e:SubmitEvent)=>{
  //   e.preventDefault();
    
  // })
  return (
    <main className={styles.main}>
      <h1>My custom list</h1>
      
      {Validate()}
      {ItemList(formHandler.fetchList())}

    </main>
  )
}
