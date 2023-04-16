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
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Elektronika</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Maishiy Texnika</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Kiyim</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Poyabzallar</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Aksesuarlar</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Go'zallik</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Salomatlik</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Uy-ro'g'or buyumlari</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Qurilish mollari</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Avtotavarlar</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'17px'}>Bolalar tovarlari</Typography>
        <Typography variant="p" fontWeight={'200'} fontSize={'16px'}>Yana <i class='bx bx-chevron-down'></i></Typography>
      </Box>
    </Box>
  );
};
