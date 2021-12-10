//components
import Button from '../Button'

//styles 
import styles from './Hero.module.css';

export default function Hero() {


    return (
        <div className={styles.hero_background}>
            <Button text={'GET STARTED'}/>
        </div>
    )
};