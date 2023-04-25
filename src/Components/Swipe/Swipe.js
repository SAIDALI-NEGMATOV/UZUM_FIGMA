import { Box } from "@mui/material";

import Promo from "../Images/Promo.jpg";

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
              <Box width={"1225px"} overflow={"hidden"} borderRadius={"10px"}>
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
              <Box width={"1225px"} overflow={"hidden"} borderRadius={"10px"}>
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
              <Box width={"1225px"} overflow={"hidden"} borderRadius={"10px"}>
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
              <Box width={"1225px"} overflow={"hidden"} borderRadius={"10px"}>
                <img
                  src={Promo}
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
