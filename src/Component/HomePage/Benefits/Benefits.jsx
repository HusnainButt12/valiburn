import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SecurityIcon from '@mui/icons-material/Security';
import AddCardIcon from '@mui/icons-material/AddCard';

const Benefits = () => {
  return (
    <div>
      <Box height={"140vh"} width={"100vw"} >
        <Box height={"20%"} width={"100vw"} >
          <Typography marginTop={"10px"} fontSize={"20px"}>
            BENEFITS
          </Typography>
          <Typography marginTop={"20px"} fontSize={"40px"} fontWeight={"bold"}>
            Vape a Day Will Satisfy You
          </Typography>
        </Box>
        <Box
          height={"70%"}
          width={"100%"}
          
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Box height={"100%"} width={"33%"}>
            <Box
              height={"30%"}
              width={"100%"}
              
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Avatar sx={{ marginLeft: "340px" }}>
                <LocalFireDepartmentIcon style={{ color: "black" }} />
              </Avatar>
              <Typography fontSize={"25px"} marginLeft={"30px"}>
                Various Flavor
              </Typography>
              <Typography
                marginLeft={"120px"}
                marginTop={"20px"}
                color={"grey"}
              >
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit.
              </Typography>
            </Box>
            <Box
              height={"30%"}
              width={"100%"}
              
              marginTop={"30px"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Avatar sx={{ marginLeft: "340px" }}>
                <AttachMoneyIcon style={{ color: "black" }} />
              </Avatar>
              <Typography fontSize={"25px"} marginLeft={"30px"}>
                Cost Effective
              </Typography>
              <Typography
                marginLeft={"120px"}
                marginTop={"20px"}
                color={"grey"}
              >
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit.
              </Typography>
            </Box>
            <Box
              height={"30%"}
              width={"100%"}
              
              marginTop={"30px"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Avatar sx={{ marginLeft: "340px" }}>
                <InsertEmoticonIcon style={{ color: "black" }} />
              </Avatar>
              <Typography fontSize={"25px"} marginLeft={"30px"}>
                No Bad Smell
              </Typography>
              <Typography
                marginLeft={"120px"}
                marginTop={"20px"}
                
              >
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit.
              </Typography>
            </Box>
          </Box>
          <Box
            height={"100%"}
            width={"30%"}
            bgcolor={"rgb(231,225,239)"}
            
            borderRadius={"20px"}
          >
            <img
              src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/vape_kit_mockup_02-368x1024.png"
              style={{ height: "90%" ,marginTop:"20px"}}
            />
          </Box>
          <Box height={"100%"} width={"30%"} >
          <Box
              height={"30%"}
              width={"100%"}
             
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Avatar sx={{ marginLeft: "50px" }}>
                <AddCardIcon style={{ color: "black" }} />
              </Avatar>
              <Typography fontSize={"25px"} marginRight={"50px"}>
                Affordable
              </Typography>
              <Typography
                marginLeft={"100px"}
                marginTop={"20px"}
                color={"grey"}
              >
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit.
              </Typography>
            </Box>
            <Box
              height={"30%"}
              width={"100%"}
              
              marginTop={"30px"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Avatar sx={{ marginLeft: "50px" }}>
                <SecurityIcon style={{ color: "black" }} />
              </Avatar>
              <Typography fontSize={"25px"} marginRight={"50px"}>
              Safety Feature
              </Typography>
              <Typography
                marginLeft={"100px"}
                marginTop={"20px"}
                color={"grey"}
              >
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit.
              </Typography>
            </Box>
            <Box
              height={"30%"}
              width={"100%"}
           
              marginTop={"30px"}
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
            >
              <Avatar sx={{ marginLeft: "50px" }}>
                <ContentCopyIcon style={{ color: "black" }} />
              </Avatar>
              <Typography fontSize={"25px"} >
              Better Design
              </Typography>
              <Typography
                marginLeft={"120px"}
                marginTop={"20px"}
                color={"grey"}
              >
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut
                elit.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Benefits;
