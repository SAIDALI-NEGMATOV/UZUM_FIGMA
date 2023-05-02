import { Box } from "@mui/material";

import Promo from "../Images/Promo.jpg";
import UzAvto from '../Images/UzAvto.jpg'
import Hayit from '../Images/Hayit.jpg'
import Leto from '../Images/Leto.jpg'
import Color from '../Images/Color.jpg'
import Uni from '../Images/Uni.jpg'
import Maxi from '../Images/Maxi.jpg'
import Live from '../Images/Live.jpg'

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swipper.css";

// import required modules
import { Navigation } from "swiper";

let Swipe = () => {

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"} mr={"30px"}>
                <img
                  src={Promo}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={UzAvto}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Leto}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Hayit}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Color}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Uni}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1225px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Maxi}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
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
            >
              <Box width={"1500px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Live}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Swipe;
