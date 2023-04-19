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
    localStorage.setItem("ProductId",item.Id)
    localStorage.setItem(
      "ProductImage",
      item.defImg,
    );
    localStorage.setItem(
      "ProductName",
      item.Name,
    )
    localStorage.setItem(
      "ProductText",
      item.Text,
    )
    localStorage.setItem(
      "ProductStarT",
      item.StarT,
    )
    localStorage.setItem(
      "ProductCredit",
      item.Credit,
    )
    localStorage.setItem(
      "ProductOldPrise",
      item.OldPrise,
    )
    localStorage.setItem(
      "ProductNewPrise",
      item.NewPrise
    )
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
              width={"240px"}
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              flexDirection={"column"}
              bgcolor={"#fff"}
              overflow={"hidden"}
            >
              <Button
                onClick={() => itemProduct(item)}
                sx={{
                  width: "250px",
                  height: "320px",
                  overflow: "hidden",
                  borderRadius: "10px",
                  position: "relative",
                  padding: "0px",
                }}
              >
                <img
                  src={item.defImg}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
                <Box position={"absolute"} top={"15px"} left={"210px"}>
                  <Typography variant="i" fontSize={"20px"} fontWeight={"200"}>
                    <i class="bx bx-heart"></i>
                  </Typography>
                </Box>
                <Box position={"absolute"} top={"280px"} left={"10px"}>
                  <Button
                    variant="contained"
                    sx={{ padding: "5px 5px", background: "rgb(80, 0, 170)" }}
                  >
                    Aksiya
                  </Button>
                </Box>
              </Button>
              <Box
                flexWrap={"wrap"}
                textOverflow={"hidden"}
                overflow={"hidden"}
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
                  position={"relative"}
                  height={"10px"}
                  width={"75px"}
                  mt={"10px"}
                >
                  <Typography
                    variant="p"
                    fontWeight={"400"}
                    fontSize={"13px"}
                    ml={"2px"}
                    position={"absolute"}
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
