import React from 'react'
import { useState} from 'react'


const CretePost = () => {
 
  const [title,setTitle]=useState('')
  const [url,setUrl]=useState('')
  const [body,setBody]=useState('')
  const [author,setAuthor]=useState('Tawwr')
const addPost=()=>{
  
  const posts=JSON.parse(localStorage.getItem('posts'))?JSON.parse(localStorage.getItem('posts')):[]
  localStorage.setItem('posts',JSON.stringify([...posts,{id:Math.random()+''+Date.now(),title,img:url,body,author}])) 
}


 
  return (
    <section className='create-post'>
      <h2>Add New Post</h2>
      <form onSubmit={addPost}>
        <label>Blog Title:</label>
        <input type="text" name='id' required value={title} onChange={e=>setTitle(e.target.value)}/>
        <label>Blog Image:</label>
        <input type="url"  name='url' required value={url} onChange={e=>setUrl(e.target.value)}/>
        <label>Blog Body:</label>
        <textarea required rows="5" name='body'value={body} onChange={e=>setBody(e.target.value)} ></textarea>
        <label>Blog Author:</label>
        <select name='author' value={author} onChange={e=>setAuthor(e.target.value)}>
          <option value="Tawwr">Tawwr</option>
          <option value="Mostafa">Mostafa</option>
          <option value="Admin">Admin</option>  
        </select>
        <input type="submit"  className='btn'/>


    </form>
    
    </section>

    
  )
}

export default CretePost