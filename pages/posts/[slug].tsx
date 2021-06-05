// import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getDate } from '../../utils'
import { PostItem, PostFieldItem } from '../../types'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export const getStaticPaths: GetStaticPaths = async () => {
  const entries = await client.getEntries<PostItem>({
    content_type: 'title',
  })
  const paths = entries.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'title',
    'fields.slug': params.slug,
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  }
}

const Post = ({ post }: { post: PostFieldItem }): JSX.Element => {
  return (
    <Layout>
      <div className="container" key={post.fields.alt}>
        <div className="post-container">
          <h1 className="title">{post.fields.title}</h1>
          <p className="date">{getDate(post.fields.date)}</p>
          <span className="create">created by miruo</span>
          <p>{documentToReactComponents(post.fields.body)}</p>
        </div>
      </div>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          cursor: pointer;
          width: 90%;
        }
        img {
          height: 420px;
          width: 100%;
        }
        .post-container {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          margin-left: 10px;
          justify-content: center;
        }
        .post-container .title {
          margin-left: 0;
        }
      `}</style>
    </Layout>
  )
}

export default Post
