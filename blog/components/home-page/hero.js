import Image from "next/image";
import classes from "./hero.module.css";
import Link from "next/link";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/image_2024_01_05T08_16_18_639Z.png"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, chào anh {`<3 <3`}</h1>
      <p>
        {/* Tiền không phải là tất cả nhưng con người làm tất cả vì tiền.(Khang Master Nextjs). */}
        {`Hôm nay cuối tuần anh Long có bận không ? Mình đi đạp vịt Hồ Tây nhé <3.`}
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
