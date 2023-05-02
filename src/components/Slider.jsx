import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/illustration.svg";
import CustomButton from "./CustomButton";

const Slider = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#EBF5FB",
    width: "1416px",
    height: "412px",
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

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700" }}
          >
            Оформляйте и отправляйте
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#000", fontWeight: "500", my: 3 }}
          >
            Свои посылки через платформу 	«TezRas.Cargo» 
          </Typography>

          <CustomButton
            backgroundColor="#2189FF"
            color="#fff"
            buttonText="Оформить"
            getStartedBtn={false}
          />
        </Box>

        <img
          src={homeIllustration}
          alt="illustration"
          style={{ maxWidth: "100%" }}
        />
      </CustomContainer>
    </CustomBox>
  );
};

export default Slider;
