import { Box, Typography, Button, Badge } from "@mui/material";
import React, { useState } from "react";
import Uzum from "../Images/Uzum.svg";
import { Link } from "react-router-dom";

export const Search = ({ Content }) => {
  const [badgeVal, setBadgeVal] = useState(
    localStorage.getItem("korzinaProduct")
      ? JSON.parse(localStorage.getItem("korzinaProduct")).length
      : 0
  );
  // console.log(setBadgeVal);
  const [infos, setInfos] = useState(
    localStorage.getItem
      ? JSON.parse(localStorage.getItem("korzinaProduct"))
      : []
  );

  // let [oldPrice, setOldPrice] = useState(0);
  // let [newPrice, setNewPrice] = useState(0);
  // console.log(oldPrice);

  

  const OnPrise = () => {
    let oldPrice = 0
    let newPrice = 0
    infos.forEach((item, index) => {
      // console.log(item.OldPrise);
      oldPrice += item.OldPrise
      // let a = oldPrice;
      // setOldPrice(a);
      newPrice += item.NewPrise;
      // let b = newPrice;
      // setNewPrice(b);
      // console.log(newPrice);
      if (localStorage.getItem("OldPrise")){
        // let c = JSON.parse(localStorage.getItem("OldPrise"))
        // c.push(oldPrice)
        localStorage.setItem('OldPrise',JSON.stringify(oldPrice))
      }else {
        localStorage.setItem("OldPrise",JSON.stringify(0))
        let d = JSON.parse(localStorage.getItem('OldPrise'))
        d = oldPrice
        localStorage.setItem("OldPrise",JSON.stringify(d))
      };
      if (localStorage.getItem("NewPrise")){
        // let f = JSON.parse(localStorage.getItem("NewPrise"))
        // f.push(newPrice)
        localStorage.setItem('NewPrise',JSON.stringify(newPrice))
      }else {
        localStorage.setItem("NewPrise",JSON.stringify(0))
        let g = JSON.parse(localStorage.getItem('NewPrise'))
        g = newPrice
        localStorage.setItem("NewPrise",JSON.stringify(g))
      };
    });

  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        width={"82%"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        mt="20px"
        gap={"20px"}
      >
        <Box>
          <Link to="/">
            <img src={Uzum} alt="" />
          </Link>
        </Box>
        <Box display={"flex"} gap={"10px"}>
          <Box
            bgcolor={"rgba(49,49,196,0.15)"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding="10px"
            borderRadius={"5px"}
            sx={{ cursor: "pointer" }}
            gap={"5px"}
          >
            <Box>
              <Typography
                variant="i"
                fontSize={"20px"}
                color={"blue"}
                mt="10px"
              >
                <i class="bx bx-collection"></i>
              </Typography>
            </Box>
            <Box>
              <Typography variant="p" color={"#33c"} fontSize={"15px"}>
                Katalog
              </Typography>
            </Box>
          </Box>
          <Box
            borderRadius={"5px"}
            overflow={"hidden"}
            border={"1px solid #ccc"}
            width={"550px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <input
              type="text"
              placeholder="Qidiruv"
              style={{
                outline: "none",
                border: "0px",
                padding: "15px",
              }}
            />
            <Button
              variant="contained"
              style={{
                backgroundColor: "#ccc",
                color: "#000",
                padding: "15px",
              }}
            >
              <i class="bx bx-search-alt-2"></i>
            </Button>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              ml="10px"
              mt="10px"
              gap={"10px"}
              display={"flex"}
              sx={[
                { bgcolor: "#fff", color: "#000", padding: "0px 10px" },
                { hover: { bgcolor: "#ccc" } },
              ]}
            >
              <Box>
                <Typography
                  variant="i"
                  fontSize={"15px"}
                  fontWeight={"200"}
                  bgcolor={"#fff"}
                >
                  <i class="bx bxs-user"></i>
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" fontSize={"15px"} fontWeight={"400"}>
                  Kirish
                </Typography>
              </Box>
            </Button>
            <Link to={"/sorted"}>
              <Button
                ml="10px"
                mt="10px"
                gap={"10px"}
                display={"flex"}
                sx={[
                  { bgcolor: "#fff", color: "#000", padding: "0px 10px" },
                  { hover: { bgcolor: "#ccc" } },
                ]}
              >
                {" "}
                <Box>
                  <Typography
                    variant="i"
                    fontSize={"15px"}
                    fontWeight={"200"}
                    bgcolor={"#fff"}
                  >
                    <i class="bx bxs-heart"></i>
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="p" fontSize={"15px"} fontWeight={"400"}>
                    Saralangan
                  </Typography>
                </Box>
              </Button>
            </Link>
            <Link to={"/basket"}>
              <Button
                onClick={() => OnPrise()}
                ml="10px"
                mt="10px"
                gap={"10px"}
                display={"flex"}
                sx={[
                  { bgcolor: "#fff", color: "#000", padding: "0px 10px" },
                  { hover: { bgcolor: "#ccc" } },
                ]}
              >
                <Box>
                  <Typography
                    variant="i"
                    fontSize={"15px"}
                    fontWeight={"200"}
                    bgcolor={"#fff"}
                  >
                    <i class="bx bx-briefcase"></i>
                  </Typography>
                </Box>
                <Box>
                  <Badge badgeContent={badgeVal} color="primary">
                    <Typography
                      variant="p"
                      fontSize={"15px"}
                      fontWeight={"400"}
                    >
                      Savat
                    </Typography>
                  </Badge>
                </Box>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
