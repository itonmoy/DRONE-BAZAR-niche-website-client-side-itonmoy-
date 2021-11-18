import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
const Footer = () => {
  return (
    <div sx={{ }}>
      
      <AppBar position="static" sx={{ backgroundColor: "#2E3B55", p: 4  }}>
          <Container maxWidth="md">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={4}>
              <Typography>contact us <p> Phone: 019155314565 <br /> Email: whoisDrone@Drone.com </p>
                 </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
            <Typography><p> © Drone Bazar 2021 <br /> </p> </Typography>
            </Grid>
            <Grid item xs={12} sm={12}  md={4}>
            <Typography>Our Location  <p> Dhaka 1201 Mirpur<br /> Bangladesh </p> </Typography>
            </Grid>
          </Grid>
          </Container>
        </AppBar>
    </div>
  );
};

export default Footer;
