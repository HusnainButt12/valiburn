import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Images = () => {
  return (
    <div>
      <Box
        height={"60vh"}
        width={"100vw"}
        

        
      >
        <Box
          height={"10%"}
          width={"100%"}
        
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"80px"}
        >
          <Typography fontSize={"20px"} fontWeight={"bold"}>
            OUR BELOVED PARTNERS
          </Typography>
        </Box>
        <Box
          height={"30%"}
          width={"100%"}
          
          marginTop={"40px"}
          display={"flex"}
          alignItems={"center"}
        >
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_7-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_2-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_4-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_3-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_5-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
        </Box>

        <Box
          height={"30%"}
          width={"100%"}
          
          marginTop={"40px"}
          display={"flex"}
          alignItems={"center"}
        >
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_1-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_6-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_8-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_10-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
          <img
            src="https://askproject.net/valiburn/wp-content/uploads/sites/122/2022/12/client_9-800x480.png"
            style={{ height: "100px", marginLeft:"80px" }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Images;
