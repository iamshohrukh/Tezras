import { Box, Container, styled, Typography } from "@mui/material";
import map from "../media/map.png"
import React from "react";


const Properties = () => {

  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#EBF5FB",
    width: "1416px",
    height: "344px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center"
    },
  }));

  return (
    <Box sx={{ mt: 2, backgroundColor: "#fff", py: 6, textAlign: "center", alignContent: "center" }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Пункты приёма
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 0 }}>
            Удобная локация для всех
          </Typography>
        </PropertiesTextBox>

      </Container>
      <CustomContainer>
        <img src={map} alt="" />
      </CustomContainer>
    </Box>
  );
};

export default Properties;
