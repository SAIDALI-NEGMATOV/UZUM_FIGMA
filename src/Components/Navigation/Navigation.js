import { Box, Typography } from "@mui/material";
import React from "react";

export const Navigation = () => {
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
        overflow={'hidden'}
      >
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Elektronika</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Maishiy Texnika</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Kiyim</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Poyabzallar</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Aksesuarlar</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Go'zallik</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Salomatlik</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Uy-ro'g'or buyumlari</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Qurilish mollari</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Avtotavarlar</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Bolalar tovarlari</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'15.5px'}>Yana <i class='bx bx-chevron-down'></i></Typography>
      </Box>
    </Box>
  );
};
