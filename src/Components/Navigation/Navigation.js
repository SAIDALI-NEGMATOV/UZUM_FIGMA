import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
        mt="30px"
        gap={"50px"}
        overflow={"hidden"}
        mb={'20px'}
      >
        <Link to={'/elektronics'}>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "132px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "70px",color:"#242424" } },
          ]}
        >
          Elektronika
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "210px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "100px",color:"#242424" } },
          ]}
        >
          Maishiy_texnika
        </Typography>
        </Link>
        <Link>

        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "322px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "35px",color:"#242424" } },
          ]}
        >
          Kiyim
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "372px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "75px",color:"#242424" } },
          ]}
        >
          Poyabzallar
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "460px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "80px",color:"#242424" } },
          ]}
        >
          Aksessuarlar
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "560px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "55px",color:"#242424" } },
          ]}
        >
          Goʻzallik
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "630px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "65px",color:"#242424" } },
          ]}
        >
          Salomatlik
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "50px",
              position: "absolute",
              left: "715px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "145px",color:"#242424" } },
          ]}
        >
            Uy_roʻzgʻor_buyumlari
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "90px",
              position: "absolute",
              left: "885px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "138px",color:"#242424" } },
          ]}
        >
           Qurilish_va_taʼmirlash
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "1060px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "75px",color:"#242424" } },
          ]}
        >
           Avtotovarlar
        </Typography>
        </Link>
        <Link>
        
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "1170px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "100px",color:"#242424" } },
          ]}
        >
           Bolalar_tovarlari
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "14px",
              transition: "all 0.5s linear",
              width: "0px",
              position: "absolute",
              left: "1305px",
              color:"#797979"
            },
            { "&:hover": { borderBottom: 1, width: "44px",color:"#242424" } },
          ]}
        >
           Yana
        </Typography>
        </Link>
        <Link>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            {
              fontSize: "20px",
              transition: "all 1s linear",
              width: "0px",
              position: "absolute",
              left: "1335px",
              top:"127px",
              color:"#ccc"
            },
            { "&:hover": { borderBottom: 1, width: "0px",color:"#242424" } },
          ]}
        >
           <i class='bx bx-chevron-down'></i>
        </Typography>
        </Link>
      </Box>
    </Box>
  );
};
