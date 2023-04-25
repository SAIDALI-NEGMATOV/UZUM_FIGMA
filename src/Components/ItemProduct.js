import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

import { useParams } from "react-router-dom";

// {Content[contentId - 1].Name}

export const ItemProduct = ({ Content }) => {
  let { contentId } = useParams();
  console.log(contentId);

  let [counter, setCounter] = useState(0);
  let [on, setOne] = useState(true);

  const PluseBtn = () => {
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
      >
        <Box borderBottom={1} paddingBottom={'10px'}>  
        <Box mt="20px" mb={"20px"}>
          <Typography variant="p" fontSize={"13px"} fontWeight={"500"}>
            Bosh sahifa
          </Typography>
        </Box>
        <Box display={"flex"}>
          <Box display={"flex"} justifyContent={"flex-start"} gap={"10px"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box>
                <img src={Content[contentId - 1].Img} alt="" width={"90px"} />
              </Box>
              <Box>
                <img src={Content[contentId - 1].Img2} alt="" width={"90px"} />
              </Box>
              <Box>
                <img src={Content[contentId - 1].Img3} alt="" width={"90px"} />
              </Box>
              <Box>
                <img src={Content[contentId - 1].Img4} alt="" width={"90px"} />
              </Box>
            </Box>
            <Box>
              <img src={Content[contentId - 1].Img} alt="" width={'400px'}/>
            </Box>
          </Box>
          <Box flexDirection={"column"} ml={"100px"}>
            <Box display={"flex"} sx={{ opacity: "0.80" }}>
              <Box>
                <Typography fontSize={"14px"} fontWeight={"500"} variant="p">
                  <i class="bx bxs-star" style={{ color: "orange" }}></i>
                  {Content[contentId - 1].StarT}
                </Typography>
              </Box>
              <Box ml={"20px"}>
                <Typography variant="p" fontWeight={"400"} fontSize={"18px"}>
                  Ko'proq 15500 buyurtma
                </Typography>
              </Box>
              <Box ml={"200px"}>
                <Button
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    padding: "0px 0px",
                  }}
                >
                  <i class="bx bx-heart"></i>
                </Button>
              </Box>
              <Box position={"relative"}>
                <Typography
                  variant="p"
                  fontWeight={"400"}
                  position={"absolute"}
                  ml="-15px"
                >
                  Istaklarga
                </Typography>
              </Box>
            </Box>
            <Box mt="20px">
              <Typography
                variant="p"
                fontFamily={"sans-serif"}
                fontSize={"23.5px"}
                fontWeight={"400"}
              >
                {Content[contentId - 1].Text}
              </Typography>
            </Box>
            <Box mt={"10px"}>
              <Typography variant="p">Sotuvchi:</Typography>
              <Typography variant="p" sx={{ ml: "65px" }}>
                {Content[contentId - 1].Name}
              </Typography>
            </Box>
            <Box mt={"10px"}>
              <Typography variant="p">Yetqazib berish:</Typography>
              <Typography variant="p" sx={{ ml: "15px" }}>
                1 kun,bepul
              </Typography>
            </Box>
            <Box mt={"20px"} borderTop={"1px solid #ccc"}></Box>
            <Box mt={"20px"}>
              <Typography>Miqdor:</Typography>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              gap={"15px"}
            >
              <Box
                display={"flex"}
                padding={0}
                width={"100px"}
                height={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #c2c2c2"}
                overflow={"hidden"}
                mt={"15px"}
                borderRadius={"5px"}
              >
                <Button
                  onClick={MinuseBtn}
                  disabled={on}
                  sx={{ padding: "0px 0px" }}
                >
                  -
                </Button>
                <Typography variant="p">{counter}</Typography>
                <Button onClick={PluseBtn} sx={{ padding: "0px 0px" }}>
                  +
                </Button>
              </Box>
              <Box display={"flex"}>
                <Box mt={"20px"}>
                  <Typography variant="p" fontSize={"25px"} color={"#7000ff"}>
                    <i class="bx bxs-hot"></i>
                  </Typography>
                </Box>
                <Box mt={"22px"}>
                  <Typography variant="p" fontSize={"20px"} color={"#7000ff"}>
                    {Content[contentId].Amount}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box mt={"15px"}>
              <Typography>Narx:</Typography>
            </Box>
            <Box display={"flex"}>
              <Typography variant="p" fontSize={"23px"} fontWeight={"600"}>
                {Content[contentId - 1].NewPrise}
              </Typography>
              <Box
                borderBottom={"1px solid #c1c1c1"}
                width={"140px"}
                height={"30px"}
                position={"relative"}
                mt={"-10px"}
                ml={"15px"}
              >
                <Typography
                  variant="p"
                  position={"absolute"}
                  top={"18px"}
                  fontSize={"15px"}
                  fontWeight={"400"}
                >
                  {Content[contentId - 1].OldPrise}
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{
                  padding: "0px 0px",
                  background: "rgb(80, 0, 170)",
                  mt: "5px",
                  ml: "20px",
                }}
              >
                Aksiya
              </Button>
            </Box>
            <Box mt={"20px"}>
              <Button
                sx={{ padding: "10px", borderRadius: "10px", bgcolor: "#ccc" }}
              >
                <Typography
                  variant="p"
                  padding={"5px"}
                  borderRadius={"5px"}
                  color={"#000"}
                  textTransform="capitalize"
                  bgcolor={"#ff0"}
                >
                  Oyiga 1 820so'mdan
                </Typography>
                <Typography
                  variant="p"
                  color={"#000"}
                  textTransform={"lowercase"}
                >
                  muddatli to'lov
                </Typography>
                <Typography
                  variant="p"
                  fontSize={"30px"}
                  color={"#717070"}
                  ml={"340px"}
                >
                  <i class="bx bx-chevron-right"></i>
                </Typography>
              </Button>
            </Box>
            <Box mt={"10px"}>
              <Button
                variant="contained"
                sx={{
                  padding: "20px 60px",
                  bgcolor: "#7000ff",
                  color: "#fff",
                  borderRadius: "10px",
                }}
              >
                Savatga qoʻshish
              </Button>
              <Button
                variant="outlined"
                sx={{
                  padding: "20px 50px",
                  borderRadius: "10px",
                  ml: "10px",
                  border: "1px solid #7000ff",
                  color: "#7000ff",
                }}
              >
                Tugmani 1 bosishda xarid qilish
              </Button>
            </Box>
            <Box mt="10px" display={'flex'} bgcolor={"#FADA0B"} padding={'10px'} borderRadius={'10px'}>
              <Typography ml={'20px'} fontSize={'20px'}>
                <i class="bx bx-shopping-bag"></i>
              </Typography>
              <Typography mt='3px' ml='5px'>Bu haftada 6103 kishi sotib oldi</Typography>
            </Box>
          </Box>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};
