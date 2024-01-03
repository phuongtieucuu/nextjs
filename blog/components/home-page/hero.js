import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/anh-gai-xinh-cuc-dep.jpg"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Khang</h1>
      <p>
        Tiền không phải là tất cả nhưng con người làm tất cả vì tiền(Năm căn).
      </p>
    </section>
  );
}
