import styles from '../styles/nav.module.css';
import Link from 'next/link';

export default function Nav(props) {
    return (
       <nav className={styles.nav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/articles'>Articles</Link>
          </li>
        </ul>
       </nav>
    )
  }
  