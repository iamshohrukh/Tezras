import { Box, Container, styled, Typography } from "@mui/material";
import CustomButtonS from './CustomButtonS';
import React from "react";


const Properties = () => {
  // const PropertiesBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   justifyContent: "space-between",
  //   marginTop: theme.spacing(5),
  //   [theme.breakpoints.down("md")]: {
  //     flexDirection: "column",
  //     alignItems: "center",
  //   },
  // }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      justifyContent: "center"
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#EBF5FB", py: 10, textAlign: "center", alignContent: "center" }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Заполните анкету
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 0 }}>
            для отправки Вашей посылки!
          </Typography>
        </PropertiesTextBox>

          <CustomButtonS
            backgroundColor="#2189FF"
            color="#fff"
            buttonText="Оформить"
            getStartedBtn={false}
          />

      </Container>
    </Box>
  );
};

export default Properties;
