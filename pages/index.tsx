import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import styles from '../components/Layout.module.scss'

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <h1>Welcome to Miruo page</h1>
      <br />
      <Image
        src="https://avatars.githubusercontent.com/u/42486288?v=4"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <br />
      <div className={styles.container}>
        <Link href="/about">
          <a>About me</a>
        </Link>
        <br />
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Home
