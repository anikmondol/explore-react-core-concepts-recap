import './Post.css'
export default function Post({post}){
    const {id, body, title, userId} = post;
    return(
        <div className="box">
            <h3>title: {title}</h3>
            <p><small>userID: {userId}</small></p>
            <p><small>Id: {id}</small></p>
            <p>{body}</p>
        </div>
    )
}