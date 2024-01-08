const DUMY_POST = [
  {
    title: "Getting Started With Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs",
    content:
      "# this is a title \n ## file-base routing \n ![create routing](getting-started-nextjs.png)",
    isFeatured: true,
  },
  {
    title: "Getting Started With Nextjs1",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs1",
    content: "# this is a title1",
    isFeatured: false,
  },
  {
    title: "Getting Started With Nextjs2",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs2",
    content: "# this is a title2",
    isFeatured: true,
  },
  {
    title: "Getting Started With Nextjs3",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is world",
    date: "2024-01-04",
    slug: "getting-started-with-nextjs3",
    content: "# this is a title3",
    isFeatured: false,
  },
  {
    title: "Mastering JavaScript",
    image: "mastering-js-thumb.png",
    excerpt:
      "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
    date: "2021-10-30",
    slug: "getting-started-with-nextjs4",
    content:
      " # JavaScript powers the web - it's **the** most important programming language you need to know as a web developer." +
      "For example, you should understand code like this:" +
      " ```js " +
      "const basics = 'Okay, that should not be too difficult actually'" +
      "function printBasics() {" +
      "console.log(basics):" +
      "}" +
      "printBasics();" +
      "```" +
      "Learn more about it [here](https://academind.com).",

    isFeatured: true,
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

export function findDetail(slug) {
  return DUMY_POST.find((data) => data.slug === slug);
}
