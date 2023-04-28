import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { ItemProduct } from "../ItemProduct";

export const Product = ({ Content }) => {
  let navigate = useNavigate();

  let itemProduct = (item) => {
    navigate("/components/" + item.Id);
    console.log(item);
  };

  let itemLocal = (item) => {
    // localStorage.setItem("ProductId", item.Id);
    // localStorage.setItem("ProductImage", item.defImg);
    // localStorage.setItem("ProductName", item.Name);
    // localStorage.setItem("ProductText", item.Text);
    // localStorage.setItem("ProductStarT", item.StarT);
    // localStorage.setItem("ProductCredit", item.Credit);
    // localStorage.setItem("ProductOldPrise", item.OldPrise);
    // localStorage.setItem("ProductNewPrise", item.NewPrise);
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
    // localStorage.setItem("SortedId", item.Id);
    // localStorage.setItem("SortedImage", item.defImg);
    // localStorage.setItem("SortedName", item.Name);
    // localStorage.setItem("SortedText", item.Text);
    // localStorage.setItem("SortedStarT", item.StarT);
    // localStorage.setItem("SortedCredit", item.Credit);
    // localStorage.setItem("SortedOldPrise", item.OldPrise);
    // localStorage.setItem("SortedNewPrise", item.NewPrise);
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
        width={"82%"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        flexDirection={"column"}
        mt="20px"
        flexWrap={"wrap"}
        gap={"5px"}
      >
        <Box width={"100%"} mb={"20px"} position={"relative"} mt="30px">
          <Typography variant="h4" fontWeight={"600"}>
            Hayitlik{" "}
            <i
              class="bx bx-chevron-right"
              style={{ position: "absolute", top: "6px" }}
            ></i>
          </Typography>
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={"10px"}>
          {Content.map((item, index) => (
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
                { width: "240px", overflow: "hidden",borderRadius:"0px  " },
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
                    width: "250px",
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
                  left={"200px"}
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
                    {item.OldPrise}
                  </Typography>
                </Box>
                <Box mt={"10px"} display={"flex"} position={"relative"}>
                  <Typography
                    variant="p"
                    fontWeight={"400"}
                    fontSize={"16px"}
                    mr={"100px"}
                  >
                    {item.NewPrise}
                  </Typography>
                  <Button
                    onClick={() => itemLocal(item, index, Content)}
                    sx={{
                      mb: "10px",
                      position: "absolute",
                      top: "-5px",
                      left: "180px",
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
  );
};
