import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../Redux/actions/article";


const mapDispatchToProps = (dispatch) => {
    return (
        {addArticle: post => (dispatch(addPost(post)))}
    )
}

const CreatePost = ({addArticle}) => {
    const [post, setPost] = useState({title: "", content: "", id: null})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost((previous) => {
            return (
                {...previous, [name]: value}
            )
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addArticle({...post, id: Date.now()})
        setPost({title: "", content: "", id: null})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" id="title"></label>
                    <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="content" id="content"></label>
                    <input type="text" id="content" name="content" value={post.content} onChange={handleChange}/>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(CreatePost);