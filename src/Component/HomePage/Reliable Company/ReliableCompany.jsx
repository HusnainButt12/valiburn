import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import GppGoodIcon from "@mui/icons-material/GppGood";

const ReliableCompany = () => {
  return (
    <div>
      <Box height={"110vh"} width={"100vw"}>
        <Box
          height={"80%"}
          width={"90%"}
          bgcolor={"rgb(232,252,86)"}
          margin={"70px"}
          borderRadius={"30px"}
          display={"flex"}
        >
          <Box
            height={"100%"}
            width={"70%"}
            display={"flex"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <Typography
              marginTop={"30px"}
              marginLeft={"40px"}
              fontSize={"20px"}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              marginRight={"60px"}
              fontWeight={"bold"}
              fontSize={"50px"}
            >
              Reliable Company for a Vapor Cigarette
            </Typography>
            <Box
              height={"40%"}
              width={"100%"}
              marginTop={"60px"}
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <Box height={"100%"} width={"30%"}>
                <Avatar
                  sx={{
                    bgcolor: "rgb(232,95,87)",
                    height: "50px",
                    width: "50px",
                    margin: "20px",
                  }}
                >
                  <MonetizationOnIcon />
                </Avatar>
                <Typography
                  marginRight={"100px"}
                  fontWeight={"bold"}
                  fontSize={"20px"}
                >
                  Best Prices
                </Typography>
                <Typography margin={"5px"} marginLeft={"18px"} color={"grey"}>
                  Class aptent taciti socio ad litora torquent per.
                </Typography>
              </Box>
              <Box height={"100%"} width={"30%"} >
                <Avatar
                  sx={{
                    bgcolor: "rgb(232,95,87)",
                    height: "50px",
                    width: "50px",
                    margin: "20px",
                  }}
                >
                  <EventRepeatIcon />
                </Avatar>
                <Typography
                  marginRight={"90px"}
                  fontWeight={"bold"}
                  fontSize={"20px"}
                >
                  Easy Return
                </Typography>
                <Typography margin={"5px"} marginLeft={"18px"} color={"grey"}>
                  Class aptent taciti socio ad litora torquent per.
                </Typography>
              </Box>
              <Box height={"100%"} width={"30%"} >
                <Avatar
                  sx={{
                    bgcolor: "rgb(232,95,87)",
                    height: "50px",
                    width: "50px",
                    margin: "20px",
                  }}
                >
                  <GppGoodIcon />
                </Avatar>
                <Typography
                  marginRight={"70px"}
                  fontWeight={"bold"}
                  fontSize={"20px"}
                >
                  Best Warranty
                </Typography>
                <Typography margin={"5px"} marginLeft={"18px"} color={"grey"}>
                  Class aptent taciti socio ad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </Box>
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_03-451x1024.png"
            style={{marginLeft:"80px", marginTop:"70px", height:"100%", width:"20%" }}
          ></img>
        </Box>
      </Box>
    </div>
  );
};

export default ReliableCompany;
