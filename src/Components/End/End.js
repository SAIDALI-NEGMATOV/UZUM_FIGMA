import { Box, Button, Typography } from "@mui/material";
import React from "react";
import instagram from "../Images/Instagram.png";
import Telegram from "../Images/Telegram-png.webp";
import Youtube from "../Images/Youtube.png";
import Facebook from "../Images/Facebook.png";

export const End = () => {
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
        mt="100px"
        gap="150px"
      >
        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"start"}
          gap="20px"
        >
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "500", fontSize: "17px" }}
            >
              Biz haqimizda
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "300", fontSize: "15px", color: "#727272" }}
            >
              {" "}
              Topshirish punktlari
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "300", fontSize: "15px", color: "#727272" }}
            >
              Vakansiyalar
            </Typography>
          </Box>
        </Box>
        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"start"}
          gap="20px"
        >
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "500", fontSize: "17px" }}
            >
              Foydalanuvchilarga
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "300", fontSize: "15px", color: "#727272" }}
            >
              Biz bilan bogʻlanish
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "300", fontSize: "15px", color: "#727272" }}
            >
              Savol-Javob
            </Typography>
          </Box>
        </Box>
        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"start"}
          gap="20px"
        >
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "500", fontSize: "17px" }}
            >
              Tadbirkorlarga
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "300", fontSize: "15px", color: "#727272" }}
            >
              Uzumda soting
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "300", fontSize: "15px", color: "#727272" }}
            >
              Sotuvchi kabinetiga kirish
            </Typography>
          </Box>
        </Box>
        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"start"}
          gap="20px"
        >
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "500", fontSize: "17px" }}
            >
              Ilovani yuklab olish
            </Typography>
          </Box>
          <Box display={"flex"} gap="20px">
            <Box>
              <Button
                sx={{ color: "#000", fontSize: "40px", padding: "0px 0px" }}
              >
                <i class="bx bxl-apple"></i>
                <Typography sx={{ fontSize: "12px" }}>AppStore</Typography>{" "}
              </Button>
            </Box>
            <Box>
              <Button
                sx={{ color: "#000", fontSize: "40px", padding: "0px 0px" }}
              >
                <i class="bx bxl-play-store"></i>
                <Typography sx={{ fontSize: "12px" }}>
                  Google Play
                </Typography>{" "}
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="p"
              sx={{ fontWeight: "500", fontSize: "17px" }}
            >
              Uzum ijtimoiy tarmoqlarda
            </Typography>
            <Box display={"flex"} gap={"20px"}>
              <Box mt={"3px"}>
                <img src={instagram} alt="" width={"30px"} />
              </Box>
              <Box>
                <img src={Telegram} alt="" width={"40px"} />
              </Box>
              <Box>
                <img src={Youtube} alt="" width={"40px"} />
              </Box>
              <Box mt={"3px"}>
                <img src={Facebook} alt="" width={"30px"} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={"400px"}
        width={"82%"}
        borderTop={"1px solid #909090"}
        mt='20px'
        paddingTop={"10px"}
        paddingBottom={"10px"}
      >
        <Box display={"flex"} gap={"20px"}>
          {" "}
          <Typography variant="p" sx={{ fontWeight: "500", fontSize: "17px" }}>
            Maxfiylik kelishuvi
          </Typography>{" "}
          <Typography variant="p" sx={{ fontWeight: "500", fontSize: "17px" }}>
            Foydalanuvchi kelishuvi
          </Typography>
        </Box>
        <Box mt="2px">
          <Typography
            variant="p"
            sx={{ fontWeight: "300", fontSize: "12px", color: "#727272" }}
          >
            «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
            himoyalangan»
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
