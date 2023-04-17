import { Box } from "@mui/material";
import React from "react";
import Promo from '../Images/Promo.jpg'

export const Swipe = () => {
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
      >
        <Box width={"1225px"} overflow={'hidden'} borderRadius={'10px'}>
        <img src={Promo} alt="" style={{width:"100%",height:"100%"}}/>
        </Box>
      </Box>
    </Box>
  );
};
