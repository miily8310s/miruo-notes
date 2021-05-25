import Head from 'next/head'
import Link from 'next/link'

export const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Miruo's Page</title>
      </Head>
      <h1>Hello World!!</h1>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </>
  )
}

export default Home
