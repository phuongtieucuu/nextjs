import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaterPost } from "../lib/post-until";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: { posts: getFeaterPost() },
    // revalidate: 3600,
  };
}

export default HomePage;
