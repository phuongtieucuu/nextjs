import Markdown from "react-markdown";

import classes from "./post-content.module.css";
import PostHeader from "./post-header";
const DUMY_POST = {
  title: "Getting Started With Nextjs",
  image: "getting-started-nextjs.png",
  excerpt: "Nextjs is world",
  date: "2024-01-04",
  slug: "getting-started-with-nextjs",
  content: "# This is firt post!!",
};

export default function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMY_POST.title}
        image={`/images/posts/${DUMY_POST.image}`}
      />
      <Markdown>{DUMY_POST.content}</Markdown>
    </article>
  );
}
