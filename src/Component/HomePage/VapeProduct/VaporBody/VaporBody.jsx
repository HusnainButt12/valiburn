import { Box, Typography } from "@mui/material";
import React from "react";

const VaporBody = () => {
  return (
    <div>
      <Box
        height={"140vh"}
        width={"100vw"}
        // bgcolor={"skyblue"}
        display={"flex"}
      >
        <Box
          height={"100%"}
          width={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            height={"75%"}
            width={"80%"}
            bgcolor={"rgb(234,228,241)"}
            borderRadius={"20px"}
          >
            <img
              src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_02-368x1024.png"
              style={{ height: "600px", marginTop: "20px" }}
            />
          </Box>
        </Box>
        <Box height={"100%"} width={"50%"}>
          <Box height={"30px"} marginTop={"180px"}>
            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", marginRight: "55%" }}
            >
              ABOUT US
            </Typography>
          </Box>

          <Box height={"120px"} marginTop={"20px"}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", marginRight: "6%" }}
            >
              A Higher Form of Vapor Cigarette
            </Typography>
          </Box>

          <Box height={"80px"} marginTop={"20px"}>
            <Box
              height={"30px"}
              display={"flex"}
              marginLeft={"100px"}
              marginRight={"100px"}
            >
              <Typography sx={{ marginRight: "30px", color: "grey" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </Typography>
            </Box>
          </Box>
          <Box height={"120px"} marginTop={"20px"}>
            <Box
              height={"80px"}
              display={"flex"}
              marginLeft={"100px"}
              marginRight={"200px"}
            >
              <Typography marginTop={"30px"} fontSize={"45px"}>
                85
              </Typography>
              <Typography
                marginTop={"20px"}
                fontSize={"30px"}
                color={"rgb(232,95,87)"}
              >
                +
              </Typography>
              <Typography
                marginTop={"30px"}
                fontSize={"45px"}
                marginLeft={"100px"}
              >
                16
              </Typography>
              <Typography
                marginTop={"20px"}
                fontSize={"30px"}
                color={"rgb(232,95,87)"}
              >
                +
              </Typography>
            </Box>
            <Box
              height={"40px"}
              display={"flex"}
              marginLeft={"100px"}
              color={"grey"}
              marginTop={"10px"}
            >
              Vaping Products
              <Box height={"40px"} marginLeft={"76px"} color={"grey"}>
                Retail Shops
              </Box>
            </Box>
          </Box>
          <Box height={"120px"} marginTop={"20px"}>
            <Box
              height={"90px"}
              
              display={"flex"}
              marginLeft={"100px"}
              marginRight={"200px"}
            >
              <Typography marginTop={"30px"} fontSize={"45px"}>
                120
              </Typography>
              <Typography
                marginTop={"20px"}
                fontSize={"30px"}
                color={"rgb(232,95,87)"}
              >
                +
              </Typography>
              <Typography
                marginTop={"30px"}
                fontSize={"45px"}
                marginLeft={"100px"}
              >
                99
              </Typography>
              <Typography
                marginTop={"20px"}
                fontSize={"30px"}
                color={"rgb(232,95,87)"}
              >
                %
              </Typography>
            </Box>
            <Box
              height={"40px"}
              display={"flex"}
              marginLeft={"100px"}
              color={"grey"}
            >
              Expert Staffs{" "}
              <Box height={"40px"} marginLeft={"110px"} color={"grey"}>
                Positive Reviews
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default VaporBody;
