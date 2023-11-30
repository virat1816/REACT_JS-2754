import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    {
      id: 1,
      productNametitle: "card-1",
      desc: "HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/1/MQ/VB/YQ/8118327/hp-15s-eq0500au-thin-and-light-laptop.jpg"
    },
    {
      id: 2,
      title: "card-2",
      desc: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
      img: "https://suprememobiles.in/cdn/shop/products/Fire-Boltt-Ring-3-Smart-Watch_1024x1024.jpg?v=1666763876"
    },
    {
      id: 3,
      title: "card-3",
      desc: "Fogg Scent Xtremo Perfume Spray for Men, Long-Lasting, Fresh & Powerful Fragrance, Eau de Parfum, 2 x 100 ml (Pack Of 2)",
      img: "https://m.media-amazon.com/images/I/81M9ZNu2IiL.jpg",
    },
    {
      id: 4,
      title: "card-4",
      desc: "tThe Man Company Black EDT For Men | Premium Long Lasting Fragrance Spray | Perfume For Men | Gift Set for Husband, Boyfriend - 50ml*2",
      img: "https://www.themancompany.com/cdn/shop/products/51sqP0-xwjL._SL1440.jpg?v=1686809199"
    },
  ];

  return (
    <div className="row col-md-12">
      {data.map((val, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img
            className="card-img-top"
            src={val.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{val.title}</h5>
            <p className="card-text">{val.desc}</p>
            <Link to={`/${val.title}`} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
