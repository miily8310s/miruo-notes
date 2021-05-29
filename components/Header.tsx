import Link from 'next/link'
import { FaBars } from 'react-icons/fa'

import styles from '../components/Header.module.scss'

export const Header = (): JSX.Element => (
  <div className={styles.header}>
    <a className={styles.headerIcon}>
      <FaBars />
    </a>
    <Link href="/">
      <a className="active">Miruo&apos;s Notes</a>
    </Link>
    <ul>
      <Link href="/about">
        <li>
          <a>About</a>
        </li>
      </Link>
      <Link href="/posts">
        <li>
          <a>Posts</a>
        </li>
      </Link>
    </ul>
  </div>
)

export default Header
