import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Wallets.module.scss";
import logo1 from "../../assets/logos/1.png";
import logo2 from "../../assets/logos/2.png";
import logo3 from "../../assets/logos/3.png";
import logo4 from "../../assets/logos/4.png";
import logo5 from "../../assets/logos/5.png";
import logo6 from "../../assets/logos/6.png";
import logo7 from "../../assets/logos/7.png";
import logo8 from "../../assets/logos/8.png";
import logo9 from "../../assets/logos/9.png";
import logo10 from "../../assets/logos/10.png";
import logo11 from "../../assets/logos/11.png";
import cn from "clsx";

const Wallets = () => {
  return (
    <div className={styles.sliderMain}>
      <div className="container">
        <Swiper
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          className={styles.swiper}
          breakpoints={{
            960: {
              slidesPerView: 20,
            },
            480: {
              slidesPerView: 10,
            },
          }}
        >
          <SwiperSlide className={styles.slide}>
            <img src={logo1} alt={logo1} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo2} alt={logo2} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.metamask)}>
            <img src={logo3} alt={logo3} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#layer">
              <img src={logo4} alt={logo4} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo5} alt={logo5} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo6} alt={logo6} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#starknet">
              <img src={logo7} alt={logo7} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo8} alt={logo8} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#polygon">
              <img src={logo9} alt={logo9} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#venom" className={styles.popular}>
              <img src={logo10} alt={logo10} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo11} alt={logo11} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo1} alt={logo1} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo2} alt={logo2} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.metamask)}>
            <img src={logo3} alt={logo3} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#layer">
              <img src={logo4} alt={logo4} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo5} alt={logo5} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo6} alt={logo6} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#starknet">
              <img src={logo7} alt={logo7} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo8} alt={logo8} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#polygon">
              <img src={logo9} alt={logo9} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#venom" className={styles.popular}>
              <img src={logo10} alt={logo10} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo11} alt={logo11} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo1} alt={logo1} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo2} alt={logo2} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.metamask)}>
            <img src={logo3} alt={logo3} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#layer">
              <img src={logo4} alt={logo4} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo5} alt={logo5} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo6} alt={logo6} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#starknet">
              <img src={logo7} alt={logo7} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo8} alt={logo8} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#polygon">
              <img src={logo9} alt={logo9} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#venom" className={styles.popular}>
              <img src={logo10} alt={logo10} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo11} alt={logo11} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo1} alt={logo1} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo2} alt={logo2} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.metamask)}>
            <img src={logo3} alt={logo3} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#layer">
              <img src={logo4} alt={logo4} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo5} alt={logo5} />
          </SwiperSlide>
          <SwiperSlide className={cn(styles.slide, styles.padImg)}>
            <img src={logo6} alt={logo6} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#starknet">
              <img src={logo7} alt={logo7} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo8} alt={logo8} />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#polygon">
              <img src={logo9} alt={logo9} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <a href="#venom" className={styles.popular}>
              <img src={logo10} alt={logo10} />
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <img src={logo11} alt={logo11} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Wallets;
