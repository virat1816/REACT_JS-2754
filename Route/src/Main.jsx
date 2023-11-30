import React from "react";
import { useParams } from "react-router-dom";

const Main = () => {
  const { id } = useParams();

  console.log(id, "res");

  const data = [
    {
      id: 1,
      title: "card-1",
      desc: "HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU",
    },
    {
      id: 2,
      title: "card-2",
      desc: "Fire-Boltt Ninja Call Pro Plus 1.83 Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution",
    },
    {
      id: 3,
      title: "card-3",
      desc: "Fogg Scent Xtremo Perfume Spray for Men, Long-Lasting, Fresh & Powerful Fragrance, Eau de Parfum, 2 x 100 ml (Pack Of 2)",
    },
    {
      id: 4,
      title: "card-4",
      desc: "tThe Man Company Black EDT For Men | Premium Long Lasting Fragrance Spray | Perfume For Men | Gift Set for Husband, Boyfriend - 50ml*2",
    },
  ];

  const Main = data.filter((e) => e.title == id);

  console.log(Main, "Main");
  return (
    <div>
      <div>
        <h1>{Main[0].title}</h1>
        <h1>{Main[0].desc}</h1>
        <h1>{Main[0].img}</h1>
      </div>
    </div>
  );
};

export default Main;