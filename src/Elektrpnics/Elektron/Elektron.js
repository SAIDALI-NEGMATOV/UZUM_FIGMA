import { Box, Button, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";

function valuetext(value) {
  return `${value}°C`;
}

export const Elektron = ({Elektro}) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState([20, 37]);

  const handleChangee = (event, newValue) => {
    setValue(newValue);
  };

  let navigate = useNavigate();

  let itemProduct = (item) => {
    navigate("/components/" + item.Id);
    // console.log(item);
  };

  let itemLocal = (item) => {

    if (localStorage.getItem("korzinaProduct")) {
      let a = JSON.parse(localStorage.getItem("korzinaProduct"));
      a.push(item);
      localStorage.setItem("korzinaProduct", JSON.stringify(a));
    } else {
      localStorage.setItem("korzinaProduct", JSON.stringify([]));
      let b = JSON.parse(localStorage.getItem("korzinaProduct"));
      b.push(item);
      localStorage.setItem("korzinaProduct", JSON.stringify(b));
    }
  };

  const itemSort = (item) => {
    if (localStorage.getItem("SortedProduct")){
      let a = JSON.parse(localStorage.getItem("SortedProduct"))
      a.push(item)
      localStorage.setItem('SortedProduct',JSON.stringify(a))
    }else {
      localStorage.setItem("SortedProduct",JSON.stringify([]))
      let b = JSON.parse(localStorage.getItem('SortedProduct'))
      b.push(item)
      localStorage.setItem("SortedProduct",JSON.stringify(b))
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        width={"80%"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"start"}
        flexDirection={"column"}
        mt="20px"
        mr={"35px"}
      >
        <Box mt={"20px"} mb={"20px"}>
          <Typography variant="p" color={"#A2A2A2"}>
            Bosh sahifa / Barcha toifalar /
          </Typography>
          <Typography variant="p" color={"#000"}>
            Elektronika
          </Typography>
        </Box>
        <Box
          borderBottom={"1px solid #A2A2A2"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          paddingBottom={"20px"}
        >
          <Box>
            <Typography variant="h4">Электроника</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography variant="p" color={"#A2A2A2"} fontSize={"17px"}>
              Saralash
            </Typography>
            <Box>
              <Box sx={{ minWidth: 200 }} ml={"20px"}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Kategoria
                  </InputLabel>
                  <Select value={age} label="Kategoria" onChange={handleChange}>
                    <MenuItem value={10}>Ommabop</MenuItem>
                    <MenuItem value={20}>Arzonroq</MenuItem>
                    <MenuItem value={30}>Qimmatroq</MenuItem>
                    <MenuItem value={40}>Reytingi yuqori</MenuItem>
                    <MenuItem value={50}>Koʻp buyurtirilgan</MenuItem>
                    <MenuItem value={60}>Yaqinda qoʻshilgan</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} ml='5px'>
          <Box mt={"20px"} flexDirection={"column"} mr={'50px'}>
            <Box>
              <Typography variant="p" color={"#000"} fontSize={"18px"}>
                Turkumlar
              </Typography>
            </Box>
            <Box mb={"30px"}>
              <Box>
                <Typography variant="p" color={"#A1A1A1"} fontSize={"18px"}>
                  <i class="bx bx-chevron-left"></i>Barcha turkumlar
                </Typography>
              </Box>
              <Box ml={"18px"}>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Elektronika
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Elektronikalar uchun aksessuarlar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    O'yin pristavkalari
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Kvadrokopterlar va aksessuarlar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Kompyuter texnikasi
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Navigatorlar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Quloqchinlar va audio texnikalar
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: "#5D5D5D",
                      padding: "5px",
                      textAlign: "start",
                      fontSize:"10px"
                    }}
                  >
                    Noutbuklar, planshetlar va <br /> elektron kitoblar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Optik anjomlar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Ofis texnikasi
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Smartfonlar va telefonlar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Televizorlar va videotexnikalar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px",fontSize:"10px" }}>
                    Aqlli soatlar va fitnes bilaguzuklar
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Aqlli uy va xavfsizlik
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Foto va video texnika
                  </Button>
                </Box>
                <Box>
                  <Button sx={{ color: "#5D5D5D", padding: "5px" ,fontSize:"10px"}}>
                    Soatlar va elektron budilniklar
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography variant="p" color={"#000"} fontSize={"18px"}>
                Narx, baho
              </Typography>
            </Box>
            <Box mt={"30px"} display={"flex"}>
              <Box gap={"10px"} display={"flex"}>
                <Box
                  width={"125px"}
                  height={"100%"}
                  overflow={"hidden"}
                  border={"1px solid #333"}
                  borderRadius={"5px"}
                >
                  <input
                    type="text"
                    placeholder="17"
                    value={"dan"}
                    style={{
                      padding: "15px",
                      borderRadius: "5px",
                      outline: "none",
                      border: "0px",
                    }}
                  />
                </Box>
                <Box
                  width={"125px"}
                  height={"100%"}
                  overflow={"hidden"}
                  border={"1px solid #333"}
                  borderRadius={"5px"}
                >
                  <input
                    type="text"
                    value={"Gacha"}
                    placeholder="100"
                    style={{
                      padding: "15px",
                      borderRadius: "5px",
                      outline: "none",
                      border: "0px",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChangee}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Box>
            <Box mt={"40px"}>
              <Box>
                <Typography variant="p" color={"#000"} fontSize={"18px"}>
                  Brend
                </Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} mt={"20px"}>
                <input type="checkbox" style={{ width: "20px" }} />{" "}
                <Typography>Latt liv</Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} mt={"20px"}>
                <input type="checkbox" style={{ width: "20px" }} />{" "}
                <Typography>Latt liv</Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} mt={"20px"}>
                <input type="checkbox" style={{ width: "20px" }} />{" "}
                <Typography>Latt liv</Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} mt={"20px"}>
                <input type="checkbox" style={{ width: "20px" }} />{" "}
                <Typography>Latt liv</Typography>
              </Box>
              <Box display={"flex"} gap={"10px"} mt={"20px"}>
                <input type="checkbox" style={{ width: "20px" }} />{" "}
                <Typography>Latt liv</Typography>
              </Box>
            </Box>
            <Box mt={'30px'}>
              <Button
                sx={{
                  color: "#545454",
                  border: "1px solid #545454",
                  padding: "10px 40px",
                  borderRadius: "10px",
                }}
              >
                Hammasini tozalash
              </Button>
            </Box>
          </Box>
          <Box  width={'900px'} mt={'20px'} display={"flex"} flexWrap={"wrap"} gap={"10px"}>
          {Elektro.map((item, index) => (
            <Box
              key={index}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              bgcolor={"#fff"}
              onClick={() => itemProduct(item)}
              zIndex={'1'}
              sx={[
                { width: "210px", overflow: "hidden",borderRadius:"0px  " },
                {
                  "&&:hover": {
                    boxShadow: " 5px 5px 4px #d5d5d5,-5px -5px 4px #ebebeb",
                    backgroundColor: " #FFF",
                    borderRadius:"9px"
                  },
                },
              ]}
            >
              <Box
                sx={[
                  {
                    width: "210px",
                    height: "320px",
                    overflow: "hidden",
                    borderRadius: "10px",
                    position: "relative",
                    padding: "0px",
                  },
                  {
                    "&&:hover": {
                      scale: "1.02",
                      transition: "0.65s all",
                      overflow: "hidden",
                    },
                  },
                ]}
              >
                <img
                  src={item.defImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <Box
                  position={"absolute"}
                  top={"20px"}
                  left={"180px"}
                  zIndex={'100'}
                  padding={0}
                >
                  <i class="bx bx-heart" onClick={() => itemSort(item)}></i>
                </Box>
                <Box position={"absolute"} top={"280px"} left={"10px"}>
                  <Button
                    variant="contained"
                    sx={{ padding: "5px 5px", background: "rgb(80, 0, 170)" }}
                  >
                    Aksiya
                  </Button>
                </Box>
              </Box>
              <Box
                flexWrap={"wrap"}
                textOverflow={"hidden"}
                overflow={"hidden"}
                padding={'10px'}
              >
                <Typography variant="p" fontWeight={"400"} fontSize={"14px"}>
                  {item.Text}
                  <br />
                </Typography>
                <Box mt={"10px"}>
                  <Typography
                    variant="p"
                    fontWeight={"400"}
                    fontSize={"16px"}
                    color={"orange"}
                  >
                    <i class="bx bxs-star"></i>
                  </Typography>
                  <Typography
                    variant="p"
                    fontWeight={"400"}
                    fontSize={"16px"}
                    ml={"5px"}
                  >
                    {item.StarT}
                  </Typography>
                </Box>
                <Box>
                  <Box bgcolor={"yellow"} borderRadius={"5px"} mt={"10px"}>
                    <Typography
                      variant="p"
                      fontWeight={"400"}
                      fontSize={"13px"}
                      ml={"5px"}
                    >
                      {item.Credit}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  borderBottom={"1px solid #ccc"}
                  height={'8px'}
                  width={"100px"}
                  mt={"10px"}
                >
                  <Typography
                    variant="p"
                    fontWeight={"400"}
                    fontSize={"13px"}
                    ml={"2px"}
                    sx={{mt:"-20px"}}
                  >
                    {item.OldPrise} so'm
                  </Typography>
                </Box>
                <Box mt={"10px"} display={"flex"} position={"relative"}>
                  <Typography
                    variant="p"
                    fontWeight={"400"}
                    fontSize={"16px"}
                    mr={"100px"}
                  >
                    {item.NewPrise} so'm  
                  </Typography>
                  <Button
                    onClick={() => itemLocal(item, index, Elektro)}
                    sx={{
                      mb: "10px",
                      position: "absolute",
                      top: "-5px",
                      left: "150px",
                      borderRadius: "50%",
                      color: "#000",
                      padding: "10px 10px",
                      zIndex:"100"
            
                    }}
                  >
                    <i class="bx bx-cart"></i>
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
