import React from 'react'
import {Link} from 'react-router-dom'
import Post from '../Post'

export default function PostList({posts}) {

     const postList = posts.length ?(
      posts.map(post=>{
        return(
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={`/${post.id}`} >
               <span className="card-title">{post.title}</span>
              </Link>  
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ):(
        <div className="center">No posts yet</div>
    )
    return (
      <div>
        { postList }
      </div>
    );

}
