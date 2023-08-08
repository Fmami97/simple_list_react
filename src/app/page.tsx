// import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    
    <main className={styles.main}>
      <h1>My custom list</h1>

      <form id="frmList">
        <input type="text" className={styles.text} placeholder='type something to add in the list'></input>
        <input type="submit" value="Add to list"></input>
      </form>
      <ol id="myList">
          
      </ol>

    </main>
  )
}
