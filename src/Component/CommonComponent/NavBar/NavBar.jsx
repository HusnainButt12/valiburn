import React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NavBar = () => {
  return (
    <Box height={"10vh"} width={"100vw"} sx={{ display: "flex" }}>
      <Box
        // bgcolor={"green"}
        display={"flex"}
        width="25%"
        justifyContent={"space-evenly"}
        alignItems="center"
        
      >
        <img
          src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/logo_Asset-2-800x172.png"
          height={"25vh"} style={{cursor:"pointer"}}
        />
      </Box>
      <Box
        // bgcolor={"green"}
        display={"flex"}
        width="50%"
        marginLeft={"50px"}
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <Typography sx={{ fontWeight: "bold",cursor:"pointer" }}>HOME</Typography>
        <Typography sx={{ fontWeight: "bold",cursor:"pointer" }}>ABOUT</Typography>
        <Typography sx={{ fontWeight: "bold",cursor:"pointer" }}>SERVICES</Typography>
        <Typography sx={{ fontWeight: "bold",cursor:"pointer" }}>PAGES</Typography>
        <Typography sx={{ fontWeight: "bold",cursor:"pointer" }}>CONTACT</Typography>
      </Box>
      <Box
        // bgcolor={"green"}
        display={"flex"}
        width="40%"
        marginLeft={"120px"}
        justifyContent={"space-evenly"}
        alignItems="center"
      >
        <Typography sx={{ fontWeight: "bold", display:"flex", alignItems:"center",cursor:"pointer",":hover":{color:"purple"}}} >
          Shop Now <ArrowForwardIcon />
        </Typography>
        <Button
          variant="text"
          sx={{
            padding:"10px",
            color: "black",
            fontWeight: "bold",
            borderRadius: "50px",
            backgroundColor: "rgb(232,252,86)",
            ":hover": { bgcolor: "black", color:"white" },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default NavBar;
