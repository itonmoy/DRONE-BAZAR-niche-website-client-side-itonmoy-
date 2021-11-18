import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const ManageAllProduct = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-dusk-00665.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure,You want to delete?");
    if (proceed) {
      const url = `https://hidden-dusk-00665.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingUsers);
          }
        });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography sx variant="h4" component="div" sx={{ flexGrow: 1, m: 3 }}>
        Manage All Product
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Grid key={service._id} item xs={4} sm={4} md={4}>
              <Card sx={{ boxShadow: 2 }}>
              <img style={{ height: "300px" , width:"300px" }} src={service.img} />
                <Box sx={{ bgcolor: "text.disabled", color: "primary.main" }}  sx={{ backgroundColor: "#2E3B55" }} >
                  <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: "white" , p:1 }}>
                      {service.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      sx={{ color: "white", p: 1 }}
                    >
                      {service.price} BDT
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: "white" , p:1 }}>
                      {service.description}
                    </Typography>

                    <div sx={{ justifyContent: "center" }}>
                      <Button
                        variant="text"
                        onClick={() => handleDelete(service._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageAllProduct;
