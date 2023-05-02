import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import homeIllustration from "../media/ff_icon.svg";
import CustomButton from "./CustomButton";

const Slider = () => {
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

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "3",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "35px", color: "black", fontWeight: "700", mr: "3rem"}}
          >
            Остались вопросы по упаковке?
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "black", fontWeight: "500", my: 3 }}
          >
            Узнайте полную инструкцию у наших специалистов, и узнайте, как правильно маркировать и оклеивать коробки и многое другое
          </Typography>

          <CustomButton
            backgroundColor="#2189FF"
            color="#fff"
            buttonText="Написать нам"
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
