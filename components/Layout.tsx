import Head from 'next/head'
import React from 'react'

import styles from './Layout.module.scss'

interface LayoutProps {
  title?: string
  keywords?: string
  description?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
  title = "Miruo's note",
  keywords = 'frontend, blog, react, svelte, flutter',
  description = "Miruo's programming note",
  children,
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    <div className={styles.children}>{children}</div>
  </>
)

export default Layout
