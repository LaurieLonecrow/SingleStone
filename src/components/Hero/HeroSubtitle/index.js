
//styles 
import styles from './HeroSubtitle.module.css';

export default function HeroSubtitle({text}) {

    return (
        <div className={styles.hero_subtitle}>{text}</div>
    )
    
}