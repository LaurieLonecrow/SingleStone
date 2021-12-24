//components
import logo from '../../images/logo-endless.svg';
//styles
import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header_background}>
      <img className={styles.logo} src={logo} alt='endless-logo'/>
    </div>
  );
};