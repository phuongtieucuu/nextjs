import PostContent from "../../components/posts/post-detail/post-content";
import { findDetail } from "../../lib/post-until";

export default function PostDetail(context) {
  if (!context.post) {
    return <p>Loading....</p>;
  }
  return <PostContent post={context.post} />;
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const post = findDetail(id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
