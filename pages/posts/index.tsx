import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

const Posts = (): JSX.Element => {
  const fetchPosts = async () => {
    const entries = await client.getEntries()
    return entries.items
  }

  const getDate = (dateString: string) => {
    const year = dateString.substr(0, 4) + '/'
    const month = dateString.substr(4, 2) + '/'
    const day = dateString.substr(6)
    return year + month + day
  }

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await fetchPosts()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])
  return (
    <Layout>
      <h1>Posts</h1>
      {posts.length > 0
        ? posts.map((post) => (
            <div className="container" key={post.alt}>
              <img src={post.fields.image} />
              <div className="post-container">
                <h2>{post.fields.title}</h2>
                <p>{getDate(post.fields.date)}</p>
              </div>
            </div>
          ))
        : ''}
      <style>{`
        h1 {
          margin-left: 20px;
        }
        .container {
          display: flex;
          height: 100px;
          cursor: pointer;
          width: 90%;
          height: 200px;
          margin-bottom: 48px;
          margin: 36px 100px;
          padding: 18px;
          border: 2px solid blue;
        }
        img {
          height: 200px;
          width: 300px;
        }
        .post-container {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
        }
      `}</style>
    </Layout>
  )
}

export default Posts
