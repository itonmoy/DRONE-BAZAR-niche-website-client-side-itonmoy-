import React from 'react';
import Services from '../Services/Services';
import Aftersale from './AfterSale/Aftersale';
import Banner from './Banner/Banner';
import ShowReviews from './ShowReviews/ShowReviews';


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <ShowReviews></ShowReviews>
            <Aftersale></Aftersale>

        </div>
    );
};

export default Home;