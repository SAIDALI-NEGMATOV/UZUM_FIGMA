import { Box, } from "@mui/material";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./swipper.css";

import { Navigation } from "swiper";


export const Swipe = ({SSwipe}) => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {SSwipe.map((item,index) => (
  <SwiperSlide key={index}>
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
          {/* {console.log(item.SwImg)} */}
          <img
            src={item.SwImg}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
    </Box>
  </SwiperSlide>
  ))}
</Swiper>
  )
}
