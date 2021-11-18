import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ShowReview from '../ShowReview/ShowReview';

const ShowReviews = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://hidden-dusk-00665.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <Box sx={{ flexGrow: 1, mt:5 }}>
            
                    <Typography sx variant="h3" component="div" sx={{ flexGrow: 1 , mb: 2 }}>
                        THE HAPPY CUSTOMERS RATING 
                    </Typography>
      <Container>
      <Grid sx={{ flexGrow: 1 , mb: 3 , p:2 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        {
            services.map(service =>  <Grid item xs={4} sm={4} md={4} >
                <ShowReview key={service._id}
                        service={service}></ShowReview>
          </Grid>
             )
        }
      
    </Grid>
      </Container>
    </Box>
    );
};

export default ShowReviews;