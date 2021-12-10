//styles
import styles from './Card.module.css'

export default function Card({stepNumber, title, body}) {
    

    return (
        <div className={styles.card_wrapper}>
          <div className={styles.number}>
            0{stepNumber}
            <div className={styles.divider}></div>
          </div>

          <div className={styles.card_title}>
            {title}
          </div>
          <div className={styles.card_body}>
            {body}
          </div>
        </div>
    )
}