
//styles
import styles from './HeroTitle.module.css';

export default function HeroTitle({text}) {

    return (
            <div className={styles.hero_title}>{text}</div>
    )
}