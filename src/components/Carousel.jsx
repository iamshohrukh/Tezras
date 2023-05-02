import { Box, Card, CardActionArea, CardMedia, CardContent, Grid, styled, Typography } from "@mui/material";
import React from "react";

import fIcon from "../media/f_icon.svg";
import sIcon from "../media/s_icon.svg";
import tIcon from "../media/t_icon.svg";
import frIcon from "../media/fr_icon.svg";


const Carousel = () => {
  // const CustomBox = styled(Box)(({ theme }) => ({
  //   width: "30%",
  //   [theme.breakpoints.down("md")]: {
  //     width: "85%",
  //   },
  // }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "90%",
    margin: theme.spacing(0, 13, 0, 13),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  // const GuideBox = styled(Box)(({ theme }) => ({
  //   display: "flex",
  //   color: "#EBF5FB",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   marginTop: theme.spacing(5),
  //   [theme.breakpoints.down("sm")]: {
  //     margin: theme.spacing(2, 0, 2, 0),
  //   },
  // }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Typography
        variant="h1" align='center'
        sx={{ fontSize: "32px", fontWeight: "bold", color: "#000339", my: 5 }}
      >
        Как подготовить <br />
        посылку к отправке
      </Typography>
      <GuidesBox>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{backgroundColor: "#EBF5FB", borderRadius: 20}} sx={{ maxWidth: 330, maxHeight: 462}} elevation={0}>
            <CardActionArea  sx={{ width: 300, height: 462}}>
              <CardMedia
                sx={{ padding: "1em 1em 0 1 1em", objectFit: "fill" }}
                component="img"
                height="160"
                image={fIcon}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h4" sx={{fontWeight: "bold",  padding: "20px"}}>
                    Оформите
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{padding: "0 20px 20px 20px"}}>
                    Оформите посылку онлайн через платформу «TezRas.Cargo»
                </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{backgroundColor: "#EBF5FB", borderRadius: 20}} sx={{ maxWidth: 330, maxHeight: 462}} elevation={0}>
            <CardActionArea  sx={{  width: 300, height: 462}}>
              <CardMedia
                sx={{ padding: "2em 1em 0 1 1em", objectFit: "fill" }}
                component="img"
                height="160"
                image={sIcon}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h4" sx={{fontWeight: "bold",  padding: "20px"}}>
                    Упакуйте
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{padding: "0 20px 20px 20px"}}>
                    Упакуйте посылку самостоятельно или наши сотрудники упакуют* за Вас
                </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{backgroundColor: "#EBF5FB", borderRadius: 20}} sx={{ maxWidth: 330, maxHeight: 462}} elevation={0}>
            <CardActionArea  sx={{  width: 300, height: 462}}>
              <CardMedia
                sx={{ padding: "1em 1em 0 1 1em", objectFit: "fill" }}
                component="img"
                height="160"
                image={tIcon}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h4" sx={{fontWeight: "bold",  padding: "20px"}}>
                    Передайте
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{padding: "0 20px 20px 20px"}}>
                    Отнесите посылку в удобный для вас пункт приема в Филадельфии или в Нью-Йорке
                </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card style={{backgroundColor: "#EBF5FB", borderRadius: 20}} sx={{ maxWidth: 330, maxHeight: 462}} elevation={0}>
            <CardActionArea  sx={{  width: 300, height: 462}}>
              <CardMedia
                sx={{ padding: "1em 1em 0 1 1em", objectFit: "fill" }}
                component="img"
                height="160"
                image={frIcon}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h4" sx={{fontWeight: "bold",  padding: "20px"}}>
                    Отслеживайте
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{padding: "0 20px 20px 20px"}}>
                    Отслеживайте статус отправления онлайн по трек-номеру до момента вручения
                </Typography>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      </GuidesBox>

    </Box>
  );
};

export default Carousel;
