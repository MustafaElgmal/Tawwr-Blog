import React from 'react'
import { useParams } from 'react-router-dom';


const PostDetails =() => {
  const {id}=useParams()
  const posts=JSON.parse(localStorage.getItem('posts'))
  const post=posts.find((post)=>post.id===id)
 
  return (
    <section className='container post-details'>
       <div className='post-details-title'>
           <h2>{post.title}</h2>
       </div>
       <img src={post.img} alt="" className="post-details-img" />
       <div className="post-author">
            By:{post.author}
       </div>
       <p className="post-details-body">{post.body}</p>
        
    </section>
    

    
  )
}

export default PostDetails