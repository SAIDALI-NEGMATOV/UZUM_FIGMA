import { Box } from "@mui/material";
import React from "react";

export const Cash = ({ Kesh }) => {
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
        ml={"20px"}
      >
        {Kesh.map((item, index) => (
          <Box
            key={index}
            width={"1500px"}
            overflow={"hidden"}
            borderRadius={"10px"}
            mr={"30px"}
          >
            <Box 
              sx={[
                { height:"420px"},
                {
                  "&&:hover": {
                    scale: "1.03",
                    transition: "0.3s ease",
                    overflow: "hidden",
                  },
                },
              ]}
            >
              <img
                src={item.Img}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
