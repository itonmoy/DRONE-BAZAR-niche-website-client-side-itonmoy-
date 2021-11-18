import { Grid, Typography } from '@mui/material';
import React from 'react';

const Aftersale = () => {
    return (
        <div>
            <Typography variant="h3"> AFTER SALES SUPPORT </Typography>
            <Grid container spacing={2}>
                <Grid style={{backgroundColor:"#"}} item xs={12} sm={12} md={6}>
                <Typography variant="h5"> After sales services we provide 
                <h5> Life time service charge free  </h5> 
                <h5>Changing of components is free of cost for first 6 months  </h5> 
                <h5> 24/7 customer care dedicative support </h5> 
                <h5> Life time service charge free  </h5> 
                <h6> Terms and conditions applicable</h6>
                </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img style={{ width: "100%",   height: "auto"}} src={'https://i.ibb.co/mCJgyxk/A-man-points-to-an-operator-s-symbol-with-icons-for-after-sales-services-The-communication-channel-o.jpg'} alt=""></img>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default Aftersale;