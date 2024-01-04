import PostGrid from "../posts/posts-grid";
import classes from "./all-posts.module.css"
export default function AllPost(props) {
    return <section className={classes.posts}>
        <h1>All Post</h1>
        <PostGrid posts={props.posts} />
    </section>
}