import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/Layout'
import styles from '../components/Layout.module.scss'

export const Home = (): JSX.Element => {
  return (
    <Layout>
      <h1>Hello World!!</h1>
      <Image
        src="https://avatars.githubusercontent.com/u/42486288?v=4"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className={styles.container}>
        <Link href="/about">
          <a>About me</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
      <p>工事中。。。。</p>
    </Layout>
  )
}

export default Home
