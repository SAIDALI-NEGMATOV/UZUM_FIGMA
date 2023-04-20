import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Basket = ({ Content }) => {
  // let GetInfo = localStorage.getItem(
  //   "ProductImage",
  //   "ProductName",
  //   "ProductStarT",
  //   "ProductCredit",
  //   "ProductOldPrise",
  //   "ProductNewPrise",
  // );

  function GetInfo(Id, Name, defImg, Text, StarT, Credit, OldPrise, NewPrise) {
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

  let SetInfo = [
    GetInfo(
      localStorage.getItem("ProductId"),
      localStorage.getItem("ProductName"),
      localStorage.getItem("ProductImage"),
      localStorage.getItem("ProductText"),
      localStorage.getItem("ProductStarT"),
      localStorage.getItem("ProductCredit"),
      localStorage.getItem("ProductOldPrise"),
      localStorage.getItem("ProductNewPrise")
      // localStorage.getItem("ProductImage"),
    ),
  ];

  console.log(SetInfo);

  let navigate = useNavigate();

  let itemProduct = (item) => {
    navigate("/components/" + item.Id);
    console.log(item);
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
        alignItems={"flex-start"}
        flexDirection={"column"}
        mt="20px"
        flexWrap={"wrap"}
        gap={"5px"}
      >
        {SetInfo.map((item, index) => (
          // <Box
          //   key={index}
          //   width={"240px"}
          //   display={"flex"}
          //   justifyContent={"flex-start"}
          //   alignItems={"flex-start"}
          //   flexDirection={"column"}
          //   bgcolor={"#fff"}
          //   overflow={"hidden"}
          // >
          //   <Button
          //     onClick={() => itemProduct(item)}
          //     sx={{
          //       width: "240px",
          //       height: "320px",
          //       overflow: "hidden",
          //       borderRadius: "10px",
          //       position: "relative",
          //       padding: "0px",
          //     }}
          //   >
          //     <img
          //       src={item.defImg}
          //       alt=""
          //       style={{ width: "100%", height: "100%" }}
          //     />
          //     <Box position={"absolute"} top={"15px"} left={"210px"}>
          //       <Typography variant="i" fontSize={"20px"} fontWeight={"200"}>
          //         <i class="bx bx-heart"></i>
          //       </Typography>
          //     </Box>
          //     <Box position={"absolute"} top={"280px"} left={"10px"}>
          //       <Button
          //         variant="contained"
          //         sx={{ padding: "5px 5px", background: "rgb(80, 0, 170)" }}
          //       >
          //         Aksiya
          //       </Button>
          //     </Box>
          //   </Button>
          //   <Box flexWrap={"wrap"} textOverflow={"hidden"} overflow={"hidden"}>
          //     <Typography variant="p" fontWeight={"400"} fontSize={"14px"}>
          //       {item.Text}
          //       <br />
          //     </Typography>
          //     <Box mt={"10px"}>
          //       <Typography
          //         variant="p"
          //         fontWeight={"400"}
          //         fontSize={"16px"}
          //         color={"orange"}
          //       >
          //         <i class="bx bxs-star"></i>
          //       </Typography>
          //       <Typography
          //         variant="p"
          //         fontWeight={"400"}
          //         fontSize={"16px"}
          //         ml={"5px"}
          //       >
          //         {item.StarT}
          //       </Typography>
          //     </Box>
          //     <Box>
          //       <Box bgcolor={"yellow"} borderRadius={"5px"} mt={"10px"}>
          //         <Typography
          //           variant="p"
          //           fontWeight={"400"}
          //           fontSize={"13px"}
          //           ml={"5px"}
          //         >
          //           {item.Credit}
          //         </Typography>
          //       </Box>
          //     </Box>
          //     <Box
          //       borderBottom={"1px solid #ccc"}
          //       position={"relative"}
          //       height={"10px"}
          //       width={"75px"}
          //       mt={"10px"}
          //     >
          //       <Typography
          //         variant="p"
          //         fontWeight={"400"}
          //         fontSize={"13px"}
          //         ml={"2px"}
          //         position={"absolute"}
          //       >
          //         {item.OldPrise}
          //       </Typography>
          //     </Box>
          //     <Box mt={"10px"} display={"flex"} position={"relative"}>
          //       <Typography
          //         variant="p"
          //         fontWeight={"400"}
          //         fontSize={"16px"}
          //         mr={"100px"}
          //       >
          //         {item.NewPrise}
          //       </Typography>
          //       <Button
          //         // onClick={() => itemLocal(item, index, Content)}
          //         sx={{
          //           mb: "10px",
          //           position: "absolute",
          //           top: "-5px",
          //           left: "180px",
          //           borderRadius: "50%",
          //           color: "#000",
          //           padding: "10px 10px",
          //         }}
          //       >
          //         <i class="bx bx-cart"></i>
          //       </Button>
          //     </Box>
          //   </Box>
          // </Box>
          <Box>
            <Box width={"100%"} marginTop={"40px"} display={"flex"}>
              <Typography variant="h4">Savatingiz,</Typography>
              <Typography variant="h4" sx={{ opacity: ".54" }}>
                {}
              </Typography>
              <Typography variant="h4" sx={{ opacity: ".54" }}>
                mahsulot
              </Typography>
            </Box>
            <Box display={"flex"}>
              <Box border={1}>
                <Box
                  width={"100%"}
                  display={"flex"}
                  padding="20px"
                  justifyContent={"space-between"}
                  gap={"450px"}
                >
                  <Box mt="8px" display={"flex"}>
                    <input
                      type="checkbox"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <Typography variant="p" ml={"10px"}>
                      Hammasini yechish
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="p">
                      Yetkazib berishning eng yaqin sanasi:
                    </Typography>
                    <Button sx={{ border: "1px solid #7000ff", ml: "10px" }}>
                      M04 22 (Indin)
                    </Button>
                  </Box>
                </Box>
                <Box border={1} display={"flex"} padding={"20px"}>
                  <Box display={"flex"}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mr="10px"
                    >
                      <input
                        type="checkbox"
                        style={{ width: "20px", height: "20px" }}
                      />
                    </Box>
                    <Box width={"100px"} height={"150px"}>
                      <img
                        src={item.defImg}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box ml={"50px"}>
                      <Typography variant="h6">{item.Text}</Typography>
                    </Box>
                    <Box ml={"50px"} display={"flex"}>
                      <Box display={'flex'}>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ opacity: ".54", mt: "25px" }}
                          >
                            Sotuvchi:
                          </Typography>
                        </Box>
                        <Box display={'flex'}>
                          <Typography variant="h6" sx={{ mt: "25px" }}>
                            {item.Name}
                          </Typography>
                          <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                          <Button sx={{padding:"0px"}}>-</Button>
                          <Typography>{11}</Typography>
                          <Button sx={{padding:"0px"}}>+</Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
