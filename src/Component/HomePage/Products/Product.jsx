import { Button, Card, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import React from "react";
import Paper from "@mui/material/Paper";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
const Product = () => {
  return (
    <div>
      <Box bgcolor={"rgb(234,235,230)"} height={"119vh"} width="100vw">
        <Box
          height={"25%"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          
        >
          <Typography fontSize={"20px"}>OUR SERVICES</Typography>
          <Typography fontSize={"40px"} fontWeight={"bold"}>
            Product That Satisfies You
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            

            "& > :not(style)": {
              m: 1,
              width: 280,
              height: 280,
              borderRadius: "15px",
              ":hover": { bgcolor: "lightcyan" },
              cursor:"pointer"
            },
          }}
        >
          <Card>
            <Typography
              fontSize={"40px"}
              fontWeight={"bold"}
              marginRight={"120px"}
              marginTop={"40px"}
            >
              01
            </Typography>
            <Typography
              marginRight={"40px"}
              marginTop={"20px"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Vape Service
            </Typography>
            <Typography
              marginRight={"10px"}
              marginLeft={"30px"}
              marginTop={"20px"}
              color={"grey"}
            >
              Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis
              nisl.
            </Typography>
          </Card>
          <Card>
            <Typography
              fontSize={"40px"}
              fontWeight={"bold"}
              marginRight={"120px"}
              marginTop={"40px"}
            >
              02
            </Typography>
            <Typography
              marginRight={"40px"}
              marginTop={"20px"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Vape Service
            </Typography>
            <Typography
              marginRight={"10px"}
              marginLeft={"30px"}
              marginTop={"20px"}
              color={"grey"}
            >
              Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis
              nisl.
            </Typography>
          </Card>
          <Card>
            <Typography
              fontSize={"40px"}
              fontWeight={"bold"}
              marginRight={"120px"}
              marginTop={"40px"}
            >
              03
            </Typography>
            <Typography
              marginRight={"40px"}
              marginTop={"20px"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Vape Service
            </Typography>
            <Typography
              marginRight={"10px"}
              marginLeft={"30px"}
              marginTop={"20px"}
              color={"grey"}
            >
              Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis
              nisl.
            </Typography>
          </Card>
          <Card>
            <Typography
              fontSize={"40px"}
              fontWeight={"bold"}
              marginRight={"120px"}
              marginTop={"40px"}
            >
              04
            </Typography>
            <Typography
              marginRight={"40px"}
              marginTop={"20px"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              Vape Service
            </Typography>
            <Typography
              marginRight={"10px"}
              marginLeft={"30px"}
              marginTop={"20px"}
              color={"grey"}
            >
              Foscu rt sapien eget ipsum interdum finibus.Sed sed turpis quis
              nisl.
            </Typography>
          </Card>
        </Box>
        <Box
          height={"35%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography color={"grey"}>
            Have a question about our service?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              marginTop: "20px",
              bgcolor: "rgb(232,252,86)",
              color: "black",
              ":hover": { bgcolor: "black", color: "white" },
              fontWeight:"bold"
            }}
          >
            Contact Us<PhoneEnabledIcon/>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Product;
