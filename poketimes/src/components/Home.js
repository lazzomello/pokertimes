import React,{Component} from 'react'
import axios from 'axios'
import PostList from './utils/PostList'
 

class Home extends Component  {

  state = {
    posts:[]
  }

   componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(resp=>{
        this.setState({
        posts:resp.data.slice(0,10)
      })})
  } 
   
  render(){
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <PostList posts={this.state.posts}/>
      </div>
    )
  }
}
export default Home