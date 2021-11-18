import React from 'react';
import './ShowReview.css'
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia,Box, Typography ,Paper } from '@mui/material';
import Rating from 'react-rating';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
     
      <Paper elevation={3}  sx={{ p: 10 ,m:10 }} >
      <Typography component="div" variant="h5"  sx={{ p: 1 }}>
            {name}
          </Typography>
          <Typography component="div" variant="h6" sx={{ p: 1 }}>
            {/* {email} */}
          </Typography>
          <Rating
          initialRating={rating}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly></Rating>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ p: 1 }}>
            {description}
          </Typography>
      </Paper>
    </Box>
    );
};

export default ShowReview;