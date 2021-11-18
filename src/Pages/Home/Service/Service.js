import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, name, price, description, img } = service;
  return (
    <Card sx={{ boxShadow: 4 }}>
      <img style={{ height: "300px", width: "300px" }} src={img} />
      <Box
        sx={{ bgcolor: "text.disabled", color: "primary.main" }}
        sx={{ backgroundColor: "#2E3B55" }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "white", p: 1 }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ color: "white", p: 1 }}
          >
            {price} BDT
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "white", p: 1 }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
            <Button size="medium">Buy Now</Button>
          </Link>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Service;
