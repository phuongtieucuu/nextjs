import path from "path";
import fs from "fs";
import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <div>
      {products.map((item) => (
        <div>
          <Link key={item.id} href={`/${item.id}`}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const dataJson = await fs.readFileSync(filePath);
  const data = JSON.parse(dataJson);
  return {
    props: data,
  };
}
export default HomePage;
