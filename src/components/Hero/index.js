//components
import Button from '../Button';
import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroContent from './HeroContent';

//styles 
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero_background}>
      <div className={styles.hero_container}>
        <HeroTitle text={'New Games & Accessories'}/>
        <HeroSubtitle text={'Monthly Packages.'}/>
        <HeroSubtitle text={'Excitement delivered daily.'}/>
        <HeroContent text={
          `What's the best way to shop for the latest video games
          and peripherals? How about never shopping at all? 
          You'll get new stuff on your doorstep - every month.`
          }/>
        <Button text={'GET STARTED'}/>
      </div>
    </div>
  );
};