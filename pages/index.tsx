import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Miruo's Page</title>
      </Head>
      <h1>Hello World!!</h1>
      <Image
        src="https://avatars.githubusercontent.com/u/42486288?v=4"
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className="container">
        <Link href="/about">
          <a>About me</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </div>
      <p>工事中。。。。</p>
      <style>{`
        body {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container {
          margin-top: 20px;
          display: flex;
          justify-content: space-evenly;
        }
        p {
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Home
