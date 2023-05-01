/* eslint-disable no-lone-blocks */
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";

export const Basket = () => {
  let [counter, setCounter] = useState(0);
  let [on, setOne] = useState(true);
  let [oldPrice, setOldPrice] = useState(0);
  let [newPrice, setNewPrice] = useState(0);
  const [infos, setInfos] = useState(
    localStorage.getItem
      ? JSON.parse(localStorage.getItem("korzinaProduct"))
      : []
  );
  let [Prices,setPrices] = useState(
    localStorage.getItem
    ? JSON.parse(localStorage.getItem("oldPrice"))
    : []
    )
    // console.log(Prices);


  const PluseBtn = (index) => {
    setInfos(infos)
    counter++;
    setCounter(counter);
    on = false;
    setOne(on);
  };
  const MinuseBtn = () => {
    counter--;
    setCounter(counter);
    if (counter === 0) {
      on = true;
      setOne(on);
    }
  };

  let delItem = (item, index) => {
    let arr = JSON.parse(localStorage.getItem("korzinaProduct"));
    arr.splice(index, 1);
    localStorage.setItem("korzinaProduct", JSON.stringify(arr));
  };
  useEffect(()=>{
    // {
    //   infos.map((item)=>{
    //     let a = oldPrice
    //     oldPrice += item.OldPrise
    //     setOldPrice(a)
    //     let b = newPrice
    //     newPrice += item.NewPrise
    //     setNewPrice(b)
    //     console.log(b);
    //   })
    // }
  }, [])

  

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
            <Box display={"flex"}>
              <Box
                border={"1px solid #C2C2C2"}
                padding={"20px"}
                borderRadius={"5px"}
              >
                <Box
                  width={"100%"}
                  display={"flex"}
                  padding="10px"
                  justifyContent={"space-between"}
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
                  <Box
                    height={"50px"}
                    mt={"-10px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography variant="p">
                      Yetkazib berishning eng yaqin sanasi:
                    </Typography>
                    <Button sx={{ border: "1px solid #7000ff", ml: "10px" }}>
                      M04 22 (Indin)
                    </Button>
                  </Box>
                </Box>
                {infos.length === 0
                  ? ""
                  : infos.map((item, index) => (
                      <Box key={index} borderTop={"1px solid #C2C2C2"}>
                        <Box display={"flex"} padding={"20px"}>
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
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            width={"100%"}
                            // border={1}
                          >
                            <Box mt={"20px"}>
                              <Box ml={"50px"} width={"450px"}>
                                <Typography variant="h6" fontSize={"16px"}>
                                  {item.Text}
                                </Typography>
                              </Box>
                              <Box ml={"50px"} display={"flex"}>
                                <Box display={"flex"}>
                                  <Box>
                                    <Typography
                                      variant="h6"
                                      sx={{ opacity: ".54", mt: "25px" }}
                                    >
                                      Sotuvchi:
                                    </Typography>
                                  </Box>
                                  <Box
                                    display={"flex"}
                                    justifyContent={"space-around"}
                                    position={"relative"}
                                  >
                                    <Typography
                                      variant="h6"
                                      sx={{ mt: "25px" }}
                                    >
                                      {item.Name}
                                    </Typography>
                                    <Box
                                      display={"flex"}
                                      padding={0}
                                      width={"100px"}
                                      height={"40px"}
                                      justifyContent={"center"}
                                      alignItems={"center"}
                                      border={"1px solid #c2c2c2"}
                                      overflow={"hidden"}
                                      mt={"20px"}
                                      position={"absolute"}
                                      left={"250px"}
                                    >
                                      <Button
                                        onClick={() => MinuseBtn(index)}
                                        disabled={on}
                                        sx={{ padding: "0px 0px" }}
                                      >
                                        -
                                      </Button>
                                      <Typography variant="p">
                                        {counter}
                                      </Typography>
                                      <Button
                                        onClick={() => PluseBtn(index)}
                                        sx={{ padding: "0px 0px" }}
                                      >
                                        +
                                      </Button>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              display={"flex"}
                              flexDirection={"column"}
                              justifyContent={"center"}
                              alignItems={"flex-end "}
                              paddingRight={"10px"}
                              // border={1}
                              position={"relative"}
                              gap={"10px"}
                              width={"220px"}
                              mb="20px"
                            >
                              <Box>
                                <Button
                                  onClick={() => delItem(item, index)}
                                  sx={{
                                    color: "black",
                                    fontSize: "30px",
                                    opacity: "0.70",
                                  }}
                                >
                                  <i class="bx bx-trash"></i>
                                  <Typography fontSize={"13px"}>
                                    Yo'q qilish
                                  </Typography>
                                </Button>
                              </Box>
                              <Box mb="10px">
                                <Typography
                                  fontSize={"20px"}
                                  fontWeight={"600"}
                                >
                                  {" "}
                                  {item.NewPrise}
                                </Typography>
                              </Box>
                              <Box
                                borderTop={1}
                                padding={"2px"}
                                ml="40px"
                                sx={{ opacity: "0.70" }}
                              >
                                <Typography fontSize={"14px"} mt={"-12px"}>
                                  {" "}
                                  {item.OldPrise}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
              </Box>
              <Box>
                <Box
                  ml={"10px"}
                  border={"1px solid #ccc"}
                  overflow={"hidden"}
                  borderRadius={"10px"}
                  padding={"10px 20px"}
                >
                  <Box
                    borderBottom={"1px solid #ccc"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                    padding={"0px 0px"}
                  >
                    <Box
                      display={"flex"}
                      padding={"10px 10px"}
                      gap={"10px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Box
                        display={"flex"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        border={"1px solid #72F306"}
                        color={"#72F306"}
                        borderRadius={"50%"}
                        padding={"10px 10px"}
                      >
                        <i class="bx bx-check"></i>
                      </Box>
                      <Box width={"200px"} flexWrap={"wrap"}>
                        <Typography variant="p" fontWeight={"600"}>
                          Buyurtmangizni rasmiy topshirish
                        </Typography>
                        <Typography variant="p">
                          {" "}
                          punktiga bepul yetkazib beramiz
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display={"flex"}
                      flexWrap={"wrap"}
                      padding={"10px 10px"}
                      gap={"10px"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      width={"250px"}
                      sx={{ opacity: "0.70" }}
                    >
                      <Typography variant="p" fontSize={"12px"} ml={"35px"}>
                        Eshikkacha yetkazib berishgacha yana 476 000 so'm
                      </Typography>
                    </Box>
                  </Box>
                  <Box flexDirection={"column"}>
                    <Box>
                      <Typography
                        variant="p"
                        fontWeight={"600"}
                        fontSize={"20px"}
                      >
                        Buyurtmangiz
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      mt={"20px"}
                      gap={"80px"}
                      sx={{ opacity: "0.80" }}
                    >
                      <Typography variant="p">Mahsulotlar():</Typography>
                      <Typography>
                        {/* {Prices.map((item,index)=>{

                        {item.oldPrice}
                        })} */}
                        



























                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      mt="10px"
                      borderRadius={"2px"}
                      border={"1px solid #7000ff"}
                      color={"#7000ff"}
                      fontWeight={"500"}
                      padding={"5px 5px"}
                    >
                      Yetkazib berish M04 24 (Erta)
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"space-between"}
                      mt={"15px"}
                    >
                      <Typography variant="p">Jami:</Typography>
                      <Box flexDirection={"column"} display={"flex"}>
                        <Typography
                          variant="p"
                          fontWeight={"500"}
                          fontSize={"25px"}
                        >
                          {newPrice}
                        </Typography>
                        <Typography variant="p" color={"#00c853"}>
                          {oldPrice}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "15px",
                          padding: "13px 25px",
                          bgcolor: "#7000ff",
                          mt: "15px",
                        }}
                      >
                        Rasmiylashtirishga oʻtish
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
