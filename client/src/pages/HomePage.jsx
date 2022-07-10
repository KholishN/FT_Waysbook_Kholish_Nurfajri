import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { API } from "../config/api";
import { useQuery } from "react-query";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import "swiper/css";
import "swiper/css/free-mode";
import "../style/HomePage.css";

import Navbar from "../components/navbar/Navbar";
import CardSlider from "../components/homePage/CardSlider";
import CardList from "../components/homePage/CardList";

function HomePage() {
  const [state, dispatch] = useContext(UserContext);

  let { data: books } = useQuery("bookssChace", async () => {
    const response = await API.get("/books");
    return response.data.data;
  });

  let { data: promoBooks } = useQuery("PromoBooksChace", async () => {
    const response = await API.get("/promo-books");
    return response.data.data.promoBooks;
  });

  return (
    <div>
      <Navbar />
      <div className="top a">
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
          <div>
            {promoBooks?.map((item, index) => (
              <CardSlider item={item} key={index} state={state} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="bottom">
        <div className="warpBottom">
          <h1 className="listBook">List Book</h1>
          <div className="warpList">
            {books?.map((item, index) => (
              <CardList item={item} key={index} state={state} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
