import styles from './Button.module.css'

const Button = () => {
  return (
    <div >
        <h3 className={styles.h3} >Sign In ?</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Button
