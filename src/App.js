import "./App.css";
import { Box } from "@mui/material";
import { Components } from "./Components/Components";
import { Nav } from "./Components/Nav/Nav";
import { Search } from "./Components/Search/Search";
import { Navigation } from "./Components/Navigation/Navigation";
import Oill from "./Components/Images/Oil.jpg";

function ProductItems(
  id,
  Name,
  defImg,
  Text,
  StarT,
  Credit,
  OldPrise,
  NewPrise
) {
  return {
    id,
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
    "5.0 (65 baho)"," 1 820 so'm/oyiga","19 000 so'm","14 000 so'm",
  ),
  ProductItems(
    1,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)"," 1 820 so'm/oyiga","19 000 so'm","14 000 so'm",
  ),
  ProductItems(
    1,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)"," 1 820 so'm/oyiga","19 000 so'm","14 000 so'm",
  ),
  ProductItems(
    1,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)"," 1 820 so'm/oyiga","19 000 so'm","14 000 so'm",
  ),
  ProductItems(
    1,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)"," 1 820 so'm/oyiga","19 000 so'm","14 000 so'm",
  ),
  ProductItems(
    1,
    "Oil",
    Oill,
    "Kungaboqar yog'i Sofia tozalangan va deodorizatsiyalangan, 1 litr",
    "5.0 (65 baho)"," 1 820 so'm/oyiga","19 000 so'm","14 000 so'm",
  ),
];

function App() {
  return (
    <Box>
      <Nav />
      <Search />
      <Navigation />
      <Components Content={Content} />
    </Box>
  );
}

export default App;
