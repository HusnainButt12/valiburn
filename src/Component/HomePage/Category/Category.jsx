import { Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import React from "react";
import EastIcon from "@mui/icons-material/East";

const Category = () => {
  return (
    <div>
      <Box height={"120vh"} width={"100vw"}>
        <Box height={"20%"} width={"100%"}>
          <Typography marginTop={"40px"} fontSize={"20px"}>
            CATEGORY
          </Typography>
          <Typography  fontWeight={"bold"} fontSize={"50px"}>
            Inhale the Good Stuff
          </Typography>
        </Box>
        <Box
          height={"80%"}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Box
            height={"70%"}
            width={"23%"}
            bgcolor={"rgb(239,237,233)"}
            marginTop={"20px"}
            borderRadius="20px"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <img
              src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/dovpo-offical-mmIIVuegDwA-unsplash.jpg"
              style={{
                height: "60%",
                width: "90%",
                marginTop: "15px",
                borderRadius: "20px",
              }}
            />
            <Typography fontWeight={"bold"} fontSize={"25px"}>
              Tanks & RDA
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consec tetur adipi.
            </Typography>
            <Box
              height={"10%"}
              width={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography color={"purple"} sx={{":hover":{color:"black", cursor:"pointer"}}}>View Product</Typography>
              <EastIcon sx={{color:'purple', ":hover":{color:"black", cursor:"pointer"}}}/>
            </Box>
          </Box>
          <Box
            height={"70%"}
            width={"23%"}
            bgcolor={"rgb(239,237,233)"}
            marginTop={"20px"}
            borderRadius="20px"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <img
              src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/dovpo-offical-mJxxaSzj_6c-unsplash.jpg"
              style={{
                height: "60%",
                width: "90%",
                marginTop: "15px",
                borderRadius: "20px",
              }}
            />
            <Typography fontWeight={"bold"} fontSize={"25px"}>
              Tanks & RDA
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consec tetur adipi.
            </Typography>
            <Box
              height={"10%"}
              width={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography color={"purple"} sx={{":hover":{color:"black", cursor:"pointer"}}}>View Product</Typography>
              <EastIcon sx={{color:'purple', ":hover":{color:"black", cursor:"pointer"}}}/>
            </Box>
          </Box>
          <Box
            height={"70%"}
            width={"23%"}
            bgcolor={"rgb(239,237,233)"}
            marginTop={"20px"}
            borderRadius="20px"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <img
              src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/saj-hz-XHJcvEwtrzM-unsplash.jpg"
              style={{
                height: "60%",
                width: "90%",
                marginTop: "15px",
                borderRadius: "20px",
              }}
            />
            <Typography fontWeight={"bold"} fontSize={"25px"}>
              Tanks & RDA
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consec tetur adipi.
            </Typography>
            <Box
              height={"10%"}
              width={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography color={"purple"} sx={{":hover":{color:"black" , cursor:"pointer"}}}>View Product</Typography>
              <EastIcon sx={{color:'purple', ":hover":{color:"black" , cursor:"pointer"}}}/>
            </Box>
          </Box>
          <Box
            height={"70%"}
            width={"23%"}
            bgcolor={"rgb(239,237,233)"}
            marginTop={"20px"}
            borderRadius="20px"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <img
              src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/dovpo-offical-E3ggkNqo89I-unsplash.jpg"
              style={{
                height: "60%",
                width: "90%",
                marginTop: "15px",
                borderRadius: "20px",
              }}
            />
            <Typography fontWeight={"bold"} fontSize={"25px"}>
              Tanks & RDA
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consec tetur adipi.
            </Typography>
            <Box
              height={"10%"}
              width={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography color={"purple"} sx={{":hover":{color:"black", cursor:"pointer"}}}>View Product</Typography>
              <EastIcon sx={{color:'purple', ":hover":{color:"black",cursor:"pointer"}}}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Category;
