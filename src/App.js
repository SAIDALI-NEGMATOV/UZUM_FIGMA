import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router";
import { Components } from "./Components/Components";
import { Nav } from "./Components/Nav/Nav";
import { Search } from "./Components/Search/Search";
import { Navigation } from "./Components/Navigation/Navigation";
import Oill from "./Components/Images/Oil.jpg";
import Tide from "./Components/Images/Tide.jpg";
import Un from "./Components/Images/Un.jpg";
import Xurmo from "./Components/Images/Xurmo.jpg";
import { ItemProduct } from "./Components/ItemProduct";
import { Basket } from "./Components/Basket/Basket";

function ProductItems(
  Id,
  Name,
  defImg,
  Text,
  StarT,
  Credit,
  OldPrise,
  NewPrise
) {
  return {
    Id,
    Name,
    defImg,
    Text,
    StarT,
    Credit,
    OldPrise,
    NewPrise,
  };
}

let Content = [
  ProductItems(
    1,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)",
    " 1 820 so'm/oyiga",
    "19 000 so'm",
    "14 000 so'm"
  ),
  ProductItems(
    2,
    "Tide",
    Tide,
    "Kir yuvish kukuni Tide Color, Lenor Touch, avtomat, 3 kg",
    "4.9 (406 baho)",
    " 1 820 so'm/oyiga",
    "19 000 so'm",
    "14 000 so'm"
  ),
  ProductItems(
    3,
    "Un",
    Un,
    "Bug'doy uni Melek birinchi nav, 1 kg",
    "5.0 (44 baho)",
    " 600 so'm/oyiga",
    "10 000 so'm",
    "5 000 so'm"
  ),
  ProductItems(
    4,
    "Xurmo",
    Xurmo,
    "Xurmo Date Bam, 650 g + gazlangan ichimlik Pepsi, 260 ml",
    "5.0 (65 baho)",
    " 2 640 so'm/oyiga",
    "26 000 so'm",
    "22 000 so'm"
  ),
  ProductItems(
    5,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)",
    " 1 820 so'm/oyiga",
    "26 000 so'm",
    "22 000 so'm"
  ),
  ProductItems(
    6,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)",
    " 1 820 so'm/oyiga",
    "19 000 so'm",
    "14 000 so'm"
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
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </Box>
  );
}

export default App;
