import { Avatar, Box, Button, Slider, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const Reviews = () => {
  return (
    <div>
      <Box height={"80vh"} width={"100vw"} bgcolor={"rgb(234,235,230)"}>
        <Box
          height={"25%"}
          width={"100%"}
          display={"flex"}
          marginTop={"30px"}
        >
          <Box height={"40%"} width={"70%"}>
            <Typography
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              marginTop={"30px"}
              marginRight={"600px"}
              fontSize={"20px"}
            >
              TESTIMONIAL
            </Typography>
            <Typography
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              marginRight={"240px"}
              fontSize={"40px"}
              fontWeight={"bold"}
            >
              Reviews From Customers
            </Typography>
          </Box>
          <Box height={"40%"} width={"30%"}>
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
                marginTop: "60px",
                cursor: "pointer",
              }}
            >
              View More
            </Button>
          </Box>
        </Box>
        <Box
          height={"70%"}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Box
            height={"70%"}
            width={"30%"}
            marginTop={"30px"}
            borderRadius={"20px"}
          >
            <Rating
              name="text-feedback"
              precision={0.5}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, bgcolor: "gold" }}
                  fontSize="inherit"
                />
              }
            />
            <Typography color={"grey"} marginLeft={"30px"} marginTop={"20px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eius, deserunt cupiditate natus velit ipsum aut doloremque quam
              repellendus sapiente voluptatibus perferendis. Ea?
            </Typography>
            <Box height={"30%"} width={"100%"} display={"flex"}>
            <Avatar
              sx={{
                bgcolor: "rgb(232,95,87)",
                height: "50px",
                width: "50px",
                margin: "20px",
                marginTop:"20px",
                marginLeft:"40px"
              }}
            >
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/excited-beautiful-girl-looking-amazed-and-pointing-M3BV77R.jpg"
                style={{height:"50px"}}
              />
            </Avatar>
            <Typography margin={"30px"} fontWeight={'bold'}>Kate Wistone</Typography>
            </Box>
          </Box>
          <Box
            height={"70%"}
            width={"30%"}
            marginTop={"30px"}
            borderRadius={"20px"}
          >
            <Rating
              name="text-feedback"
              precision={0.5}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, bgcolor: "gold" }}
                  fontSize="inherit"
                />
              }
            />
            <Typography color={"grey"} marginLeft={"30px"} marginTop={"20px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eius, deserunt cupiditate natus velit ipsum aut doloremque quam
              repellendus sapiente voluptatibus perferendis. Ea?
            </Typography>
            <Box height={"30%"} width={"100%"} display={"flex"}>
              
            <Avatar
              sx={{
                bgcolor: "rgb(232,95,87)",
                height: "50px",
                width: "50px",
                margin: "20px",
                marginTop:"20px",
                marginLeft:"40px"
              }}
            >
              
              
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/portrait-of-a-woman-AC47UGL.jpg"
                style={{height:"50px"}}
              />
            </Avatar>
            <Typography margin={"30px"} fontWeight={'bold'}>Dinna Torres</Typography>
            </Box>
          </Box>
            
          <Box
            height={"70%"}
            width={"30%"}
            marginTop={"30px"}
            borderRadius={"20px"}
          >
            <Rating
              name="text-feedback"
              precision={0.5}
              emptyIcon={
                <StarIcon
                  style={{ opacity: 0.55, bgcolor: "gold" }}
                  fontSize="inherit"
                />
              }
            />
            <Typography color={"grey"} marginLeft={"30px"} marginTop={"20px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eius, deserunt cupiditate natus velit ipsum aut doloremque quam
              repellendus sapiente voluptatibus perferendis. Ea?
            </Typography>
            <Box height={"30%"} width={"100%"} display={"flex"}>
            <Avatar
              sx={{
                bgcolor: "rgb(232,95,87)",
                height: "50px",
                width: "50px",
                margin: "20px",
                marginTop:"20px",
                marginLeft:"40px"
              }}
            >
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/portrait-of-woman-PLYG5HT.jpg"
                style={{height:"50px"}}
              />
            </Avatar>
            <Typography margin={"30px"} fontWeight={'bold'}>Lucy Timmy</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Reviews;
