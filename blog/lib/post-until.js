const DUMY_POST = [
  {
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs",
    isFeatured: true,
  },
  {
    title: "Getting Started With Nextjs1",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs1",
    isFeatured: false,
  },
  {
    title: "Getting Started With Nextjs2",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs2",
    isFeatured: true,
  },
  {
    title: "Getting Started With Nextjs3",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs3",
    isFeatured: false,
  },
];

export function getAllPost() {
  return DUMY_POST;
}

export function getFeaterPost() {
  return DUMY_POST.filter((post) => {
    return post.isFeatured;
  });
}
