import Image from "next/image";
import classes from "./hero.module.css";
import Link from "next/link";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/image_2024_01_05T08_14_56_936Z.png"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, chào anh {`<3 <3`}</h1>
      <p>
        {/* Tiền không phải là tất cả nhưng con người làm tất cả vì tiền.(Khang Master Nextjs). */}
        {`Anh Long khỏi sốt chưa, em lo anh nhiều lắm khi biết tin anh sốt. Em chuân bị đồ ăn tối để anh bồi bổ sức khỏe rồi chỉ đợi anh thôi.`}
      </p>
      <p>
        <Link
          className={classes.hh}
          href="https://www.facebook.com/mailinh.nguyen.5243"
          target="_blank"
        >
          {`--> `}Đường vào tym em đây!!
        </Link>
      </p>
    </section>
  );
}
