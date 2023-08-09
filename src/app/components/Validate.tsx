import styles from '../styles/validate.module.css'
export const Validate = ()=>{
    return (
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
    )

}   