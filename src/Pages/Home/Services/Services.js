import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://hidden-dusk-00665.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Typography sx variant="h3" component="div" sx={{ flexGrow: 1 , m: 3 }}>
                       DRONES WE HAVE
                    </Typography>
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            services.map(service =>  <Grid item xs={4} sm={4} md={4} >
                <Service key={service.id}
                        service={service}></Service>
          </Grid>
             )
        }
      
    </Grid>
      
    </Box>
    );
};

export default Services;