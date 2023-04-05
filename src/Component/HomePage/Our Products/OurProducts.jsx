import { Box, Button, Typography } from "@mui/material";
import { bgcolor, padding } from "@mui/system";
import React from "react";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Slider from "@mui/material/Slider";

const OurProducts = () => {
  return (
    <div>
      <Box
        height={"180vh"}
        width={"100vw"}
        display={"flex"}
      >
        <Box height={"100%"} width={"40%"}>
          <Box
            height={"25%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography
              
              fontSize={"20px"}
              marginRight={"210px"}
            >
              OUR PRODUCTS
            </Typography>
            <Typography fontWeight={"bold"} fontSize={"40px"}>
              Flavored and Better
            </Typography>
          </Box>
          <Box
            height={"75%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              bgcolor={"rgb(223,215,234)"}
              height={"100%"}
              width={"80%"}
              marginBottom={"100px"}
              borderRadius={"30px"}
            >
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_05-450x1024.png"
                style={{ height: "800px", width: "300px", marginTop: "30px" }}
              />
            </Box>
          </Box>
        </Box>
        <Box height={"100%"} width={"60%"}>
          <Box height={"20%"} width={"100%"}>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "black",
                ":hover": { bgcolor: "grey" },
                bgcolor: "black",
                color: "white",
                fontWeight: "bold",
                borderRadius: "50px",
                padding: "10px",
                marginTop: "100px",
                marginLeft: "65%",
                cursor:"pointer"
              }}
            >
              All Product
            </Button>
          </Box>
          <Box height={"76%"} width={"100%"}>
            <Box height={"50%"} width={"100%"}>
              <Typography
                fontSize={"20px"}
                marginRight={"530px"}
                marginTop={"50px"}
              >
                LATEST PRODUCT
              </Typography>
              <Typography
                fontWeight={"bold"}
                fontSize={"25px"}
                marginRight={"290px"}
                marginTop={"20px"}
              >
                Valiburn V12 White Space (Limited)
              </Typography>
              <Typography margin={"40px"} color={"grey"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Mauris id tortor felis. Sed rutrum, ex eu mollis sodales.
              </Typography>
              <Box
                height={"12%"}
                width={"80%"}
                display={"flex"}
                justifyContent={"space-evenly"}
              >
                <button variant={"outlined"}>
                  <CloudDoneOutlinedIcon
                    style={{ height: "40px", width: "40px" }}
                  />
                </button>
                <button variant={"outlined"}>
                  <DiscountOutlinedIcon
                    style={{ height: "40px", width: "40px" }}
                  />
                </button>
                <button variant={"outlined"}>
                  <CheckCircleOutlineOutlinedIcon
                    style={{ height: "40px", width: "40px" }}
                  />
                </button>
              </Box>
              <Box height={"12%"} width={"80%"} display={"flex"}>
                <Typography
                  marginTop={"20px"}
                  marginLeft={"110px"}
                  fontWeight={"bold"}
                >
                  Safety Features
                </Typography>
                <Typography
                  marginTop={"20px"}
                  marginLeft={"65px"}
                  fontWeight={"bold"}
                >
                  Affordable Price
                </Typography>
                <Typography
                  marginTop={"20px"}
                  marginLeft={"60px"}
                  fontWeight={"bold"}
                >
                  Best Quality
                </Typography>
              </Box>
              <Box height={"12%"} width={"80%"} display={"flex"}>
                <Typography marginLeft={"110px"} color={"grey"}>
                  Class aptent taciti socio ad litora torquent per.
                </Typography>
                <Typography marginRight={"20px"} color={"grey"}>
                  Class aptent taciti socio ad litora torquent per.
                </Typography>
                <Typography marginRight={"30px"} color={"grey"}>
                  Class aptent taciti socio ad litora torquent per.
                </Typography>
              </Box>
            </Box>
            <Box
              height={"50%"}
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Box height={"70%"} width={"80%"} marginTop={"30px"}>
                <Typography
                  marginRight={"75%"}
                  fontWeight={"bold"}
                  marginTop={"10px"}
                >
                  BATTERY CAPACITY
                </Typography>
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <Typography marginRight={"80%"} fontWeight={"bold"}>
                  FIRING BUTTON
                </Typography>
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <Typography marginRight={"76%"} fontWeight={"bold"}>
                  SAFETY FEATURES
                </Typography>
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "20px",
                    ":hover": { bgcolor: "grey" },
                    bgcolor: "black",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "80px",
                    marginRight: "83%",
                    padding: "8px",
                    cursor:"pointer"
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OurProducts;
