import React from "react";
import { Box } from "@mui/material";
import {Swipe} from "./Swipe/Swipe";
import { Product } from "./Product/Product";
import { Models } from "./Models/Models";
import { Afisha } from "./Afisha/Afisha";
import { Cash } from "./Cash/Cash";

export const Components = ({ Content,SSwipe,ProductMods,Afis,Kesh }) => {
  return (
    <Box>
      <Swipe SSwipe={SSwipe}/>
      <Product Content={Content} />
      <Models ProductMods={ProductMods}/>
      <Afisha Afis={Afis}/>
      <Product Content={Content} />
      <Cash Kesh={Kesh}/>
      <Models ProductMods={ProductMods}/>
      <Product Content={Content} />
    </Box>
  );
};
