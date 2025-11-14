// components/ItemLists/sliderCard.js

import React from "react";

const SliderCards = ({cards}) => {
    const addLineBreaks = (str) => 
        str.split('\n').map((subStr) => {
            return (
                <>
                    {subStr}
                    <br />
                    <br />
                </>
            );
        });

    return (
        cards.map((item, i) => (
            <div key={i}className="cascade-slider-item cascade-item" style={{ backgroundImage: `url(${ item?.image ? require('../../resources/images/' + item.image) : ''})` }} >
                <div className="cascade-item-overlay"></div>
                <div className="cascade-item-wrapper">
                    <div className="cascade-item-row">
                        <h4>{item.title}</h4>
                        <p>{addLineBreaks(item.text)}</p>
                    </div>
                </div>
            </div>
        ))
    );
};

export default SliderCards;