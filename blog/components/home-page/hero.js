import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/image_2023_12_28T07_01_56_046Z.png"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Khánh Ly Đàm</h1>
      <p>
        {/* Tiền không phải là tất cả nhưng con người làm tất cả vì tiền.(Khang Master Nextjs). */}
        Long ơi đá bóng đi đừng chơi game nữa, tối đi chơi với chị.
      </p>
    </section>
  );
}
