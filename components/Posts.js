import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 123,
    username: 'themuralikrishnan',
    userImg:
      'https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg',
    caption: 'Life is good, but It can be better!',
  },
  {
    id: 1234,
    username: 'muralikrishnan',
    userImg:
      'https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg',
    caption: 'Dubai is damn awesome!',
  },
  {
    id: 12345,
    username: 'krishnan',
    userImg:
      'https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg',
    caption: 'We are killing it!',
  },
]

const Posts = () => {
  return (
    <div className="mt-7">
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          caption={post.caption}
          img={post.userImg}
        />
      ))}
    </div>
  )
}

export default Posts
