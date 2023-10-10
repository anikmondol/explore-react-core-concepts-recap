import { useEffect, useState } from "react"
import Post from './post.jsx'
export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return(
        <div className="">
            <h4>Posts: {posts.length}</h4>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}


/**
 * 1. create a state to store the data
 * 2. crate use effect no dependencies
 * 3. use fetch load data*/ 