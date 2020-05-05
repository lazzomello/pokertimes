import React from 'react'
import {Link} from 'react-router-dom'
// import pokeball from '../../pokeball.png'
import logo from '../../logo.png'
export default function PostList({posts}) {

     const postList = posts.length ?(
      posts.map(post=>{
        return(
          <div className="post card" key={post.id}>
            <img className="imagem" src={logo} alt="pokeball"/>
            <div className="card-content">
              <Link to={`/${post.id}`} >
               <span className="card-title red-text">{post.title}</span>
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
      <div className="container home">
        { postList }
      </div>
    );

}
