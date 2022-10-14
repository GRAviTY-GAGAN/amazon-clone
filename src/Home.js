import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home image"
        />

        <div className="home__row">
          <Product
            id={6565465655}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={5}
          />
          <Product
            id={5451324556}
            image="https://m.media-amazon.com/images/I/614TSm1LckL._SX425_.jpg"
            title="PHILIPS Air Fryer HD9200/90, uses up to 90% less fat, 1400W, 4.1 Liter, with Rapid Air Technology"
            price={85.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={5545887525}
            image="https://m.media-amazon.com/images/I/81FyYXoQF-L._SY500_.jpg"
            title="Samsung 192 L 2 Star Direct Cool Single Door Refrigerator"
            price={258}
            rating={5}
          />
          <Product
            id={84215651}
            image="https://m.media-amazon.com/images/I/71Kx6rgmlRS._UX342_.jpg"
            title="TIMEX Analog Men's Watch"
            price={15}
            rating={4}
          />
          <Product
            id={942215458}
            image="https://m.media-amazon.com/images/I/91DmobHvTpL._UY550_.jpg"
            title="Skybags Sonic 49 Ltrs Green Rucksack"
            price={55}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={942215458}
            image="https://m.media-amazon.com/images/I/811CjK6UMFL._SX450_.jpg"
            title="Acer Ei491Cr 49 Inch (124.46 cm) Led 1800R Curved Dfhd 3840 X 1080 Pixels Va Monitor I 32:9 Aspect Ratio I AMD Radeon Freesync2 Technology I 144Hz I Vesa Certified Display HDR 400 I Dci-P3 Black"
            price={550}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
