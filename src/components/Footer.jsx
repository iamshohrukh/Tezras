import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#fff",
    fontWeight: "400",
    cursor: "pointer",
    padding: "2rem 1em 1.25em. 0.9rem",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 4, backgroundColor: "black" }}>
      <CustomContainer>
        <CustomContainer>
          <Box>

            <FooterLink>Отправить посылку</FooterLink>
            <br />
            <FooterLink>Правила перевозки</FooterLink>
            <br />
            <FooterLink>Пункты приема</FooterLink>
            <br />
            <FooterLink>Наши преимущества</FooterLink>
            <br />
          </Box>

          <Box>


            <FooterLink>Услуги оказывает ООО «TezRas.Cargo»</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
          </Box>

          <Box>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#fff",
                fontWeight: "500",
                mb: 2,
              }}
            >
              По всем вопросам <br/> обращайтесь на этот номер
              <br/>
              +1 (347) 445 - 40 - 56
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
