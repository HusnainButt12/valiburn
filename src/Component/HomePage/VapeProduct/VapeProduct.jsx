import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Avatar from "@mui/material/Avatar";
import { positions } from "@mui/system";

const VapeProduct = () => {
  return (
    <Box
      height={"140vh"}
      width={"100vw"}
      bgcolor="rgb(201,181,226)"
      display={"flex"}
    >
      <Box height={"100%"} width={"50%"}>
        <Typography
          color={"rgb(232,252,86)"}
          fontSize="20px"
          fontWeight={"bold"}
        >
          . VALIBURN VAPING
        </Typography>

        <Typography
          alignItems={"center"}
          //   bgcolor={"green"}
          height={"400px"}
          width={"390px"}
          display={"flex"}
          justifyContent={"space-evenly"}
          fontSize={"60px"}
          fontWeight={"bold"}
          marginLeft={"70px"}
          marginTop={"60px"}
          color={"white"}
        >
          The Right Brand for the Right Vape Products
        </Typography>

        <Typography
          color={"white"}
          height={"60px"}
          width={"500px"}
          marginLeft={"70px"}
          marginTop={"40px"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </Typography>
        <Box width={"100%"}>
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
        <Box display="flex" height={"70px"} width={"100%"} marginTop={"10%"}>
          <Avatar
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/portrait-of-a-woman-AC47UGL.jpg"
            sx={{ marginLeft: "70px", marginTop: "20px" }}
          />
          <Avatar
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/excited-beautiful-girl-looking-amazed-and-pointing-M3BV77R.jpg"
            sx={{ marginTop: "20px" }}
          />
          <Avatar
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/portrait-of-attractive-woman-in-bright-living-room-XNXRAZK.jpg"
            sx={{ marginTop: "20px" }}
          />
          <Avatar
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/portrait-of-woman-PLYG5HT.jpg"
            sx={{ marginTop: "20px" }}
          />
          <Typography
            fontWeight={"bold"}
            fontSize={"35px"}
            sx={{ marginLeft: "30px", marginTop: "15px", color: "white" }}
          >
            12K+
          </Typography>
        </Box>
        <Box height={"30%"} bgcolor={""}>
          <Typography
            color={"rgb(232,252,86)"}
            fontSize="20px"
            fontWeight={"bold"}
          >
            . Happy Customers
          </Typography>
        </Box>
      </Box>
      <Box
        // bgcolor={"yellow"}
        width={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img
          src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_04-451x1024.png"
          style={{
            height: "120%",
            width: "25%",
            position: "absolute",
            marginTop: "230px",
            marginRight: "100px",
          }}
        />
        <img
          src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_05-450x1024.png"
          style={{
            height: "80%",
            width: "50%",
            marginLeft: "250px",
            marginTop: "50px",
          }}
        />
      </Box>{" "}
    </Box>
  );
};
export default VapeProduct;
