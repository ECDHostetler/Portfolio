// components/Sliders/carousel.js

import React from 'react';
import Slider from 'react-slick';

function Carousel({title, slideData}) {
    const cardsFromCaller = slideData.map(row => {
        return {
            id: row.id,
            title: row.client_name,
            image: row.background_image,
            text: row.client_feedback,
        };
    });

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        opacity: 0.8,
    };
    return (
        <>
            <div className="title">{title}</div>
            <div className="slider-container mb-5">
                <Slider {...settings}>
                    {cardsFromCaller.map((item, i) => (
                        <div key={i} >
                            <div className="slider-item item" style={{ backgroundImage: `url(${ item?.image ? require('../../resources/images/' + item.image) : ''})` }} >
                                <div className="item-overlay"></div>
                                <div className="item-wrapper">
                                    <div className="item-row">
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Carousel;