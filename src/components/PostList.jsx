import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return (
        {posts: state.posts}
    )
}


const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            )
            )}
        </div>
    )
}

export default connect(mapStateToProps)(PostList);