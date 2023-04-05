import { Button, Typography } from "@mui/material";
import { borderRadius, Box, width } from "@mui/system";
import React from "react";
const Articles = () => {
  return (
    <div>
      <Box height={"100vh"} width={"100vw"}>
        <Box
          height={"20%"}
          width={"100vw"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography fontSize={"20px"}>BLOG NEWS</Typography>
          <Typography fontWeight={"bold"} fontSize={"50px"} marginTop={"10px"}>
            Articles About Vaping
          </Typography>
        </Box>
        <Box
          height={"80%"}
          width={"100vw"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Box
            height={"90%"}
            width={"25%"}
            bgcolor={"rgb(239,237,233)"}
            borderRadius={"30px"}
            
          >
            <Box height={"60%"} width={"100%"} sx={{cursor:"pointer"}}>
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/elsa-olofsson-8I988w3ylrQ-unsplash-1024x683.jpg"
                style={{ height: "100%", width: "100%", borderRadius:"30px" }}
              />
              
            </Box>
            <Typography color={"rgb(233,95,119)"} marginTop={"20px"} marginRight={"120px"} sx={{cursor:"pointer"}}>December 17, 2022</Typography>
            <Typography marginTop={"10px"} fontWeight={"bold"} fontSize={"20px"} sx={{cursor:"pointer"}}>Try these new fruits liquids</Typography>
            <Typography color={"grey"} margin={"10px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec…</Typography>
          </Box>
          <Box
            height={"90%"}
            width={"25%"}
            bgcolor={"rgb(239,237,233)"}
            borderRadius={"30px"}
          >
            <Box height={"60%"} width={"100%"} sx={{cursor:"pointer"}}>
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/brock-wegner-qsuA1kYKdbk-unsplash-1024x683.jpg"
                style={{ height: "100%", width: "100%" , borderRadius:"30px" }} 
                />
            </Box>
            <Typography color={"rgb(233,95,119)"} marginTop={"20px"} marginRight={"120px"} sx={{cursor:"pointer"}}>December 17, 2022</Typography>
            <Typography marginTop={"10px"} fontWeight={"bold"} fontSize={"20px"} sx={{cursor:"pointer"}}>Weed vapes with vitamins E</Typography>
            <Typography color={"grey"} margin={"10px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec…</Typography>
          </Box>
          <Box
            height={"90%"}
            width={"25%"}
            bgcolor={"rgb(239,237,233)"}
            borderRadius={"30px"}
          >
            <Box height={"60%"} width={"100%"} sx={{cursor:"pointer"}}>
              <img
                src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/jonathan-cooper-4eDM2-pWzk4-unsplash-1024x683.jpg"
                style={{ height: "100%", width: "100%", borderRadius:"30px"  }}
              />
            </Box>
            <Typography color={"rgb(233,95,119)"} marginTop={"20px"} marginRight={"120px"} sx={{cursor:"pointer"}}>December 17, 2022</Typography>
            <Typography marginTop={"10px"} fontWeight={"bold"} fontSize={"20px"} sx={{cursor:"pointer"}}>FDA to fruit and mint flavor</Typography>
            <Typography color={"grey"} margin={"10px"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec…</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Articles;
//// something change