import React from 'react'
import Photo from '../download.jpg'
import { Link } from "react-router-dom";

const Post = ({post,deletePost}) => {
   
   
   
  return (
    <article className='post'>
        <Link to={`/post/${post.id}`}>
            <img src={post.img?post.img:Photo} alt='NoPhoto'/>
            <div className="post-author">By: {post.author?post.author:"Tawwr"}</div>
            <h3>{post.body?post.body:"No details"}</h3>
        </Link>
        <button className='btn' onClick={e=>deletePost(post.id)}>Delete</button>
        
   
    </article>
  )
}

export default Post