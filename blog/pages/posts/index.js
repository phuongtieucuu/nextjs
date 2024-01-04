import AllPost from "../../components/home-page/all-posts";
const DUMY_POST = [
  {
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting Started With Nextjs1",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting Started With Nextjs2",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting Started With Nextjs3",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs3",
  },
];
export default function Page() {
  return <AllPost posts={DUMY_POST} />;
}
