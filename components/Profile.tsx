import Link from 'next/link'
import styles from '../components/Profile.module.scss'
import Image from 'next/image'

export const Profile = (): JSX.Element => (
  <div className={styles.profile}>
    <div className={styles.profileBox}>
      <Image
        src="https://avatars.githubusercontent.com/u/42486288?v=4"
        alt="Picture of the author"
        width={150}
        height={150}
      />
      <ul>
        <li>
          <span>Name:</span> miruo
        </li>
        <li>
          <span>Skills:</span> JS, TS, React, Vue2, Svelte, Nextjs, Nuxtjs and
          Japanese.
        </li>
        <li>
          <span>Study now:</span> Nextjs, Svelte, Flutter, English.
        </li>
        <li>
          <span>Hobby:</span> Game🎮, Watch Movie🎬
        </li>
        <li>
          <span>Twitter: </span>
          <Link href="https://twitter.com/miruoon">
            <a target="_blank">@miruoon</a>
          </Link>
        </li>
        <li>
          <span>Github: </span>
          <Link href="https://github.com/miily8310s">
            <a target="_blank">@miily8310s</a>
          </Link>
        </li>
        <li>
          <span>Hatena Blog: </span>
          <Link href="https://katanugramer.hatenablog.com/">
            <a target="_blank">https://katanugramer.hatenablog.com/</a>
          </Link>
        </li>
        <li>
          <span>Zenn: </span>
          <Link href="https://zenn.dev/miruoon_892">
            <a target="_blank">@miruoon_892</a>
          </Link>
        </li>
      </ul>
      <p>
        ReactやSvelteが好きなよわよわフロントエンジニア。ヌオーが大好き。英語も勉強しています。
      </p>
      <p>
        I&apos;m a Japanese junior frontend engineer that like React, Svelte,
        and Quagsire(Pokemon). I also study English.
      </p>
    </div>
  </div>
)

export default Profile
