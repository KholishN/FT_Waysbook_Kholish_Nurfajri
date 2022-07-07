import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "../style/HomePage.css";

import Navbar from "../components/navbar/navbar";
import CardSlider from "../components/homePage/CardSlider";
import CardList from "../components/homePage/CardList";

import Cover1 from "../assets/coverbook1.jpg";
import Cover2 from "../assets/cover2.jpg";

function HomePage() {
  // modal
  return (
    <div>
      <Navbar />
      <div className="top">
        <h1>
          With us, you can shop online & help save your high street at the same
          time
        </h1>
      </div>
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="middle"
        slidesPerView={2.5}
        spaceBetween={20}
      >
        <SwiperSlide>
          <CardSlider
            data={{
              imgSrc: Cover1,
              bookTitle: "56 Hari: Perjalanan Kisah Cinta",
              author: "Destashya Wdp",
              sinopsis:
                "Kisah Angkasa dan 56 hari terinspirasi dari salah satu member dari boyband Korea Treasure.",
              bookPrice: "59.000",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSlider
            data={{
              imgSrc: Cover2,
              bookTitle: "56 Hari: Perjalanan Kisah Cinta",
              author: "Destashya Wdp",
              sinopsis:
                "Kisah Angkasa dan 56 hari terinspirasi dari salah satu member dari boyband Korea Treasure.",
              bookPrice: "59.000",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSlider
            data={{
              imgSrc: Cover1,
              bookTitle: "56 Hari: Perjalanan Kisah Cinta",
              author: "Destashya Wdp",
              sinopsis:
                "Kisah Angkasa dan 56 hari terinspirasi dari salah satu member dari boyband Korea Treasure.",
              bookPrice: "59.000",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSlider
            data={{
              imgSrc: Cover1,
              bookTitle: "56 Hari: Perjalanan Kisah Cinta",
              author: "Destashya Wdp",
              sinopsis:
                "Kisah Angkasa dan 56 hari terinspirasi dari salah satu member dari boyband Korea Treasure.",
              bookPrice: "59.000",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardSlider
            data={{
              imgSrc: Cover1,
              bookTitle: "56 Hari: Perjalanan Kisah Cinta",
              author: "Destashya Wdp",
              sinopsis:
                "Kisah Angkasa dan 56 hari terinspirasi dari salah satu member dari boyband Korea Treasure.",
              bookPrice: "59.000",
            }}
          />
        </SwiperSlide>
      </Swiper>
      <div className="bottom">
        <div className="warpBottom">
          <h1 className="listBook">List Book</h1>
          <div className="warpList">
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
            <CardList
              data={{
                imgSrc: Cover1,
                bookTitle: "56 Hari: Perjalanan Kisah Cinta",
                author: "Destashya Wdp",
                bookPrice: "59.000",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
