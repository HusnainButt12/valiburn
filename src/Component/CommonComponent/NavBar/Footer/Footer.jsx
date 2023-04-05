import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { padding } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      height={"60vh"}
      width={"100vw"}
      bgcolor={"rgb(196,164,242)"}
      marginTop={"90px"}
      display={"flex"}
      justifyContent={"space-evenly"}
    >
      <Box height={"80%"} width={"25%"}>
        <img
          src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/logos_Asset-3-1536x329.png"
          height={"40vh"}
          style={{ marginTop: "80px", marginRight: "100px" }}
        />
        <Typography marginLeft={"30px"} marginTop={"20px"} color={"white"}>
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nulla
          imperdiet risus.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "50px",
            bgcolor: "rgb(232,252,86)",
            ":hover": { bgcolor: "black", color: "white" },
            color: "black",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "50px",
            ":hover": { bgcolor: "black" },
            color: "white",
            fontWeight: "bold",
            marginLeft: "4%",
            marginTop: "30px",
          }}
        >
          <PlayCircleOutlineIcon />
          About Us
        </Button>
      </Box>
      <Box height={"80%"} width={"20%"}>
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          marginTop={"90px"}
          color={"white"}
        >
          Explore
        </Typography>
        <Typography
          marginTop={"25px"}
          marginRight={"30px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          Home
        </Typography>
        <Typography
          marginRight={"30px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          About
        </Typography>
        <Typography
          marginRight={"30px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          FAQs
        </Typography>
        <Typography
          marginRight={"30px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          Blog
        </Typography>
        <Typography
          marginRight={"30px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          Contact
        </Typography>
      </Box>
      <Box height={"80%"} width={"20%"}>
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          marginTop={"90px"}
          color={"white"}
        >
          Contact
        </Typography>
        <Typography
          marginTop={"25px"}
          marginLeft={"70px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          457 Morningview Lane,
        </Typography>
        <Typography
          marginRight={"30px"}
          marginLeft={"40px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          New York USA
        </Typography>
        <Typography
          marginLeft={"50px"}
          marginTop={"10px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          valiburn@mails.com
        </Typography>
        <Typography
          marginRight={"30px"}
          marginLeft={"50px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          +1 (234) 567890
        </Typography>
      </Box>
      <Box height={"80%"} width={"25%"}>
        <Typography
          fontSize={"20px"}
          fontWeight={"bold"}
          marginTop={"90px"}
          color={"white"}
        >
          Open Hours
        </Typography>
        <Typography
          marginTop={"25px"}
          marginLeft={"40px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          Mon-Fri:09.00-18.00
        </Typography>
        <Typography
          marginRight={"30px"}
          marginLeft={"70px"}
          marginTop={"20px"}
          color={"white"}
          sx={{ ":hover": { color: "rgb(232,252,86)", cursor: "pointer" } }}
        >
          Sat-Sun:10.00-17.00
        </Typography>
        <TwitterIcon sx={{marginTop:"25px", marginLeft:"10px", cursor: "pointer",  ":hover":{color:"rgb(232,252,86)"},color:"white"}}/>
        <FacebookIcon sx={{marginTop:"10px", marginLeft:"10px", cursor: "pointer", ":hover":{color:"rgb(232,252,86)"},color:"white"}}/>
        <InstagramIcon sx={{marginTop:"10px", marginLeft:"10px", cursor: "pointer", ":hover":{color:"rgb(232,252,86)"},color:"white"}}/>
        <YouTubeIcon sx={{marginTop:"10px", marginLeft:"10px", cursor: "pointer", ":hover":{color:"rgb(232,252,86)"},color:"white"}}/>
      </Box>  
    </Box>
  );
};

export default Footer;
