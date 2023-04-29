import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { Components } from "./Components/Components";
import { Nav } from "./Components/Nav/Nav";
import { Search } from "./Components/Search/Search";
import { Navigation } from "./Components/Navigation/Navigation";
import Oill from "./Components/Images/Oil.jpg";
import Tide from "./Components/Images/Tide.jpg";
import Prela from "./Components/Images/Prela.jpg";
import Xurmo from "./Components/Images/Xurmo.jpg";
import { ItemProduct } from "./Components/ItemProduct";
import { Basket } from "./Components/Basket/Basket";
import { Sorted } from "./Components/Sorted/Sorted";
import Oill2 from "./Components/Images/Oills.jpg";
import Oill3 from "./Components/Images/Oil3.jpg";
import Oill4 from "./Components/Images/Oill4.jpg";
import Tide2 from "./Components/Images/Tide2.jpg";
import Tide3 from "./Components/Images/Tide3.jpg";
import Tide4 from "./Components/Images/Tide4.jpg";
import Prela2 from "./Components/Images/Perla2.jpg";
import Salfetka from "./Components/Images/salfetka.jpg";
import Xurmo2 from "./Components/Images/Xurmo2.jpg";
import Xurmo3 from "./Components/Images/Xurmo3.jpg";
import Guruch from "./Components/Images/Guruch.jpg";
import Guruch2 from "./Components/Images/Guruch2.jpg";
import Guruch3 from "./Components/Images/Guruch3.jpg";
import Guruch4 from "./Components/Images/Guruch4.jpg";
import Kross from "./Components/Images/kROSS.jpg";
import Kross2 from "./Components/Images/Kross2.jpg";
import Kross3 from "./Components/Images/Kross3.jpg";
import Kross4 from "./Components/Images/Kross4.jpg";
import Esty from "./Components/Images/Esty.jpg";
import Esty2 from "./Components/Images/Esty2.jpg";
import Esty3 from "./Components/Images/Esty3.jpg";
import Esty4 from "./Components/Images/Esty4.jpg";
import Bushra from './Components/Images/Bushra.jpg'
import Bushra2 from './Components/Images/Bushra2.jpg'
import Bushra3 from './Components/Images/Bushra3.jpg'
import Bushra4 from './Components/Images/Bushra4.jpg'
import Pots from './Components/Images/Pots.jpg'
import Pots2 from './Components/Images/Pots2.jpg'
import Pots3 from './Components/Images/Pots3.jpg'
import Pots4 from './Components/Images/Pots4.jpg'
import Shvabra from './Components/Images/Shvabra.jpg'
import Shvabra2 from './Components/Images/Shvabra2.jpg'
import Shvabra3 from './Components/Images/Shvabra3.jpg'
import Shvabra4 from './Components/Images/Shvabra4.jpg'
import Korm from './Components/Images/Korm.jpg'
import Korm2 from './Components/Images/Korm2.jpg'
import Korm3 from './Components/Images/Korm3.jpg'
import Xvost from './Components/Images/Xvost.jpg'
import Xvost2 from './Components/Images/Xvost2.jpg'
import Xvost3 from './Components/Images/Xvost3.jpg'
import Vivo from './Components/Images/Vivo.jpg'
import Vivo2 from './Components/Images/Vivo2.jpg'
import Vivo3 from './Components/Images/Vivo3.jpg'
import Vivo4 from './Components/Images/Vivo4.jpg'

// import { useEffect } from "react";

function ProductItems(
  Id,
  Name,
  defImg,
  Text,
  StarT,
  Qolgani,
  Credit,
  OldPrise,
  NewPrise,
  Img,
  Img2,
  Img3,
  Img4
) {
  return {
    Id,
    Name,
    defImg,
    Text,
    StarT,
    Qolgani,
    Credit,
    OldPrise,
    NewPrise,
    Img,
    Img2,
    Img3,
    Img4,
  };
}

let Content = [
  ProductItems(
    1,
    "Sofia Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)",
    "Bor-yoʻgi 2 dona qoldi",
    " 1 820 so'm/oyiga",
    "19 000 so'm",
    "14 000 so'm",
    Oill,
    Oill2,
    Oill3,
    Oill4
  ),
  ProductItems(
    2,
    "Tide",
    Tide,
    "Kir yuvish kukuni Tide Color, Lenor Touch, avtomat, 3 kg",
    "4.9 (406 baho)",
    "Oxirgisi qoldi!",
    " 1 820 so'm/oyiga",
    "19 000 so'm",
    "14 000 so'm",
    Tide,
    Tide2,
    Tide3,
    Tide4
  ),
  ProductItems(
    3,
    "Prela",
    Prela,
    "Tagliklar Perla Twin 42 dona + Perla Kids nam salfetkalari, 15 dona sovg'a",
    "5.0 (10 baho)",
    "Bor-yoʻgi 2 dona qoldi",
    "6 840 so'm/oyiga",
    "70 000 so'm",
    "57 000 so'm",
    Prela,
    Prela2,
    Prela,
    Salfetka
  ),
  ProductItems(
    4,
    "Xurmo",
    Xurmo,
    "Xurmo Date Bam, 650 g + gazlangan ichimlik Pepsi, 260 ml",
    "5.0 (65 baho)",
    "Sotuvda 208 dona bor",
    " 2 640 so'm/oyiga",
    "26 000 so'm",
    "22 000 so'm",
    Xurmo,
    Xurmo,
    Xurmo2,
    Xurmo3
  ),
  ProductItems(
    5,
    "Guruch",
    Guruch,
    " Guruch lazer Xorazm chempioni eng yuqori nav, 900 g",
    "5.0 (47 baho)",
    "Bor-yoʻgi 3 dona qoldi",
    " 1 920 so'm/oyiga",
    "24 000 so'm",
    "16 000 so'm",
    Guruch,
    Guruch2,
    Guruch3,
    Guruch4
  ),
  ProductItems(
    6,
    "Kross",
    Kross,
    "GRN dan ayollar krossovkalar Ayollar poyabzali oʻlchami",
    "5.0 (65 baho)",
    "Sotuvda 154 dona bor",
    " 1 820 so'm/oyiga",
    "125 000 so'm",
    "175 000 so'm",
    Kross,
    Kross2,
    Kross3,
    Kross4
  ),
  ProductItems(
    7,
    "Esty",
    Esty,
    "Qog'oz salfetkalar Esty, 23 х 24 sm, 100 dona",
    "5.0 (65 baho)",
    "Sotuvda 621 dona bor",
    "360 so'm/oyiga",
    "4 000 so'm",
    "3 000 so'm",
    Esty,
    Esty2,
    Esty3,
    Esty4
  ),
  ProductItems(
    8,
    "Bushra",
    Bushra,
    "Tana uchun sprey Naseem Bushra Water Perfume, 100 ml",
    "5.0 (65 baho)",
    "Sotuvda 197 dona bor",
    " 8 450 so'm/oyiga",
    "170 000 so'm",
    "65 000 so'm",
    Bushra,
    Bushra2,
    Bushra3,
    Bushra4
  ),
  ProductItems(
    9,
    "Pots",
    Pots,
    "Simsiz quloqchinlar Xiaomi Redmi Buds 3 Lite Black",
    "5.0 (195 baho)",
    "Sotuvda 154 dona bor",
    "23 760 so'm/oyiga",
    "301 000 so'm",
    "198 000 so'm",
    Pots,
    Pots2,
    Pots3,
    Pots4
  ),
  ProductItems(
    10,
    "Shvabra komp",
    Shvabra,
    "Tozalash uchun to'plam Vileda Super Mocio Completo 1+1",
    "5.0 (15 baho)",
    "Sotuvda 14 dona bor",
    "20 880  so'm/oyiga",
    "183 000 so'm",
    "174 000 so'm so'm",
    Shvabra,
    Shvabra2,
    Shvabra3,
    Shvabra4
  ),
  ProductItems(
    11,
    "Korm",
    Korm,
    "Barcha zotlarning katta itlari uchun quruq ovqat ProBalance,",
    "5.0 (25 baho)",
    "Sotuvda 54 dona bor",
    "13 560 so'm/oyiga",
    "195 000 so'm",
    "113 000 so'm",
    Korm,
    Korm2,
    Korm3,
    Korm
  ),
  ProductItems(
    12,
    "Xvost",
    Xvost,
    "SSousdagi baliqli konservalangan mushuk ovqati, 85 g, 02 PH 162",
    "5.0 (195 baho)",
    "Sotuvda 477 dona bor",
    "480 so'm/oyiga",
    "6 000 so'm",
    "4 000 so'm",
    Xvost,
    Xvost2,
    Xvost3,
    Xvost
  ),
  ProductItems(
    13,
    "Vivo",
    Vivo,
    "Simsiz quloqchinlar Vivo Wireless Sport Lite",
    "5.0 (195 baho)",
    "Sotuvda 477 dona bor",
    "480 so'm/oyiga",
    "6 000 so'm",
    "4 000 so'm",
    Vivo,
    Vivo2,
    Vivo3,
    Vivo4
  ),
  ProductItems(
    12,
    "Xvost",
    Xvost,
    "SSousdagi baliqli konservalangan mushuk ovqati, 85 g, 02 PH 162",
    "5.0 (195 baho)",
    "Sotuvda 477 dona bor",
    "480 so'm/oyiga",
    "6 000 so'm",
    "4 000 so'm",
    Xvost,
    Xvost2,
    Xvost3,
    Xvost
  ),
  ProductItems(
    12,
    "Xvost",
    Xvost,
    "SSousdagi baliqli konservalangan mushuk ovqati, 85 g, 02 PH 162",
    "5.0 (195 baho)",
    "Sotuvda 477 dona bor",
    "480 so'm/oyiga",
    "6 000 so'm",
    "4 000 so'm",
    Xvost,
    Xvost2,
    Xvost3,
    Xvost
  ),
];




function App() {
  return (
    <Box>
      <Nav />
      <Search />
      <Navigation />
      <Routes>
        <Route path="/" element={<Components Content={Content} />} />
        <Route
          path="/components/:contentId"
          element={<ItemProduct Content={Content} />}
        />
        <Route path="/basket" element={<Basket Content={Content} />} />
        <Route path="/sorted" element={<Sorted Content={Content} />} />
      </Routes>
    </Box>
  );
}

export default App;
