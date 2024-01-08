import Markdown from "react-markdown";

import Image from "next/image";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

export default function PostContent(props) {
  const { post } = props;
  console.log("post.content", post.content);
  const pathImage = `/images/posts/${post.image}`;
  const components = {
    // img(image) {
    //   return <Image src={`/images/posts/${image.src}`} width={200} height={100} />;
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
    },
    // code(code) {
    //   const { className, children } = code;
    //   const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={children}
    //     />
    //   );
    // },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={pathImage} />
      <Markdown components={components}>{post.content}</Markdown>
    </article>
  );
}
