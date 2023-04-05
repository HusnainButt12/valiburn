import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const GetStart = () => {
  return (
    <div>
      <Box
        height={"100vh"}
        width={"100vw"}
        bgcolor={"rgb(218,198,245)"}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box height={"100%"} width={"25%"}>
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_03-451x1024.png"
            style={{ height: "85%", marginTop: "33%" }}
          />
        </Box>
        <Box
          height={"100%"}
          width={"45%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography fontSize={"20px"} color={"white"}>
            GET STARTED
          </Typography>
          <Typography
            fontSize={"40px"}
            fontWeight={"bold"}
            color={"white"}
            marginTop={"10px"}
          >
            Are you ready to vape with us?
          </Typography>
          <Typography fontSize={"20px"} color={"white"} marginTop={"10px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <Box height={"50px"} width={"60%"} marginTop={"30px"} display={"flex"} justifyContent={"space-evenly"}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              bgcolor: "rgb(232,252,86)",
              ":hover": { bgcolor: "black", color: "white" },
              color: "black",
              fontWeight: "bold",
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
            }}
          >
            <PlayCircleOutlineIcon />
            About Us
          </Button>
          </Box>
        </Box>
        <Box height={"100%"} width={"25%"}>
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_05-450x1024.png"
            style={{ height: "85%" }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default GetStart;
