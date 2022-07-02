import React from 'react'
import Post from './Post'
import { useState,useEffect } from 'react'

const Posts = () => {
  const [posts,setPost]=useState([])
useEffect(()=>{
  const posts=JSON.parse(localStorage.getItem('posts'))?JSON.parse(localStorage.getItem('posts')):[]
  setPost(posts)

},[])
  const deletePost=(id)=>{
    let currentPosts=[...posts]
    const newPosts=currentPosts.filter((post)=>post.id!==id)
    setPost(newPosts)
    localStorage.setItem('posts',JSON.stringify(newPosts))
}

  return (
    <section className='posts'>
       {posts.map((post)=>(
        <Post key={post.title} post={post} deletePost={deletePost} />
       ))}
      
    </section>
  )
}

export default Posts