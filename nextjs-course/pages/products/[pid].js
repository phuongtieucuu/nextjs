import path from "path";
import fs from "fs";

function HomePage(props) {
  const { payload } = props;
  if (!payload) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>{payload.title}</h1>
    </div>
  );
}

export async function getStaticProps(constext) {
  const { params } = constext;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const dataJson = await fs.readFileSync(filePath);
  const data = JSON.parse(dataJson);
  const product = data.products.find((product) => product.id === params.pid);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      payload: product,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }],
    fallback: true,
  };
}

export default HomePage;
