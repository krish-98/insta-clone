import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

// const posts = [
//   {
//     id: 123,
//     username: 'themuralikrishnan',
//     userImg:
//       'https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg',
//     caption: 'Life is good, but It can be better!',
//   },
//   {
//     id: 1234,
//     username: 'muralikrishnan',
//     userImg:
//       'https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg',
//     caption: 'Dubai is damn awesome!',
//   },
//   {
//     id: 12345,
//     username: 'krishnan',
//     userImg:
//       'https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg',
//     caption: 'We are killing it!',
//   },
// ]

const Posts = () => {
  const [posts, setPosts] = useState([])

  // Refractored the useEffect
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  console.log(posts)

  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     //snapshot is a realtime listener
  //     query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  //     (snapshot) => {
  //       setPosts(snapshot.docs)
  //     }
  //   )

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [db])

  return (
    <div className="mt-7">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
