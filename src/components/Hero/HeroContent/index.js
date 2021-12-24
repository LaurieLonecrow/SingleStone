//styles
import styles from './HeroContent.module.css';

export default function HeroContent({text}) {
  return (
    <div className={styles.hero_content_wrapper}>
      <p className={styles.hero_content}>{text}</p>
    </div>
  );
};