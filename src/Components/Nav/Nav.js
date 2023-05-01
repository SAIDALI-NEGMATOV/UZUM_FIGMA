import { Box, Typography } from "@mui/material";
import React from "react";

export const Nav = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bgcolor={"#f1f1f1"}
    >
      <Box
        width={"82%"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Typography variant="i" fontSize={"20px"}>
          <span class="material-symbols-outlined">location_on</span>
        </Typography>
        <Box display={"flex"}>
          <Typography variant="p">Shahar:</Typography>
          <Box flexDirection={"column"} borderBottom={1} height={"20px"}>
            <Typography variant="b" fontWeight={"500"}>
              Toshkent
            </Typography>
          </Box>
          <Typography variant="p" ml="20px" fontWeight={"500"}>
            Topshiriq punkutlari
          </Typography>
          <Typography variant="p" ml="50px" fontWeight={"400"} color={"#444"}>
            Buyurtmangiz 1 kunda yetkazib beramiz!
          </Typography>
          <Typography
            variant="p"
            ml="100px"
            sx={[
              { fontWeight: "400", cursor: "pointer", color: "#444" },
              { "&hover": { fontWeight: "600", color: "#000" } },
            ]}
          >
            Uzumda soting
          </Typography>
          <Typography variant="p" ml="25px" fontWeight={"400"}>
            Savol-javoblar
          </Typography>
          <Typography variant="p" ml="25px" fontWeight={"400"}>
            Buyurmalarim
          </Typography>
          <Box display={"flex"} ml="25px">
            <Typography variant="i">
              <i class="bx bxl-github"></i>
            </Typography>
            <Typography variant="p" fontWeight={"400"}>
              O'zbekcha
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
