// import Link from 'next/link'
// import Image from 'next/image'

import Layout from '../components/Layout'
// import styles from '../components/Layout.module.scss'
import Profile from '../components/Profile'

export const About = (): JSX.Element => {
  return (
    <Layout>
      {/* <h1>Hello World!!</h1>
      <Image
        src="https://avatars.githubusercontent.com/u/42486288?v=4"
        alt="Picture of the author"
        width={200}
        height={200}
      /> */}
      <Profile />
    </Layout>
  )
}

export default About
