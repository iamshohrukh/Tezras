import { Button, styled } from "@mui/material";
import React from "react";

const CustomButtonS = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButtonS = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    margin: "1.25rem 0 0 0",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "20px",
    textTransform: "none",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButtonS>{buttonText}</CustomButtonS>;
};

export default CustomButtonS;
