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
        overflow={"hidden"}
      >
        <Box>
          <Typography
            variant="p"
            fontWeight={"200"}
            sx={[
              { fontSize: "14px", transition: "all 2s linear" },
              { "&:hover": { borderBottom: 1 } },
            ]}
          >
            Elektronika
          </Typography>
        </Box>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Maishiy Texnika
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Kiyim
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Poyabzallar
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Aksesuarlar
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Go'zallik
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Salomatlik
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Uy-ro'g'or buyumlari
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Qurilish mollari
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Avtotavarlar
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Bolalar tovarlari
        </Typography>
        <Typography
          variant="p"
          fontWeight={"200"}
          sx={[
            { fontSize: "14px", transition: "all 2s linear" },
            { "&:hover": { borderBottom: 1 } },
          ]}
        >
          Yana <i class="bx bx-chevron-down"></i>
        </Typography>
      </Box>
    </Box>
  );
};
