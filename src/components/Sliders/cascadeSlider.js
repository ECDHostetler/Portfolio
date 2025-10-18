// components/Sliders/cascadeSlider.js

import React, { useEffect } from 'react';
import SliderCards from '../ItemLists/sliderCard';

const CascadeSlider = ({title, cards}) => {

    useEffect(() => {
        const cascadeSlider = document.querySelector(".cascade-slider");
        const sliderItems = document.querySelectorAll(".cascade-slider-item");
        const itemCount = sliderItems.length;
        let sliderHeight;
        let sliderVertPos;

        const getVerticalPosition = () => {
            sliderVertPos = cascadeSlider.getBoundingClientRect().top + window.scrollY;
        }

        const getHeight = () =>  {
            sliderHeight = cascadeSlider.getBoundingClientRect().height;
        }

        const udpateSlider = () =>  {
            let x = sliderVertPos + sliderHeight;
            let y = sliderHeight / itemCount;
            if (window.scrollY > sliderVertPos && window.scrollY < x)
                for (let i = 0; i < itemCount; i++) {
                    let a = 1 - .08 * (window.scrollY - sliderVertPos + 60 - y * i) / y;
                    let b = 1 - .15 * (window.scrollY - sliderVertPos + 60 - y * i) / y;
                    let c = 60 - 30 * (window.scrollY - sliderVertPos + 60 - y * i) / y;
                    a > 1 && (a = 1);
                    sliderItems[i].style.transform = `scale(${a})`;
                    sliderItems[i].style.opacity = b;
                    sliderItems[i].style.top = c + "px";
                } 
            else {
                for (let i = 0; i < itemCount; i++) {
                    sliderItems[i].style.transform = "scale(1)"; 
                    sliderItems[i].style.opacity = 1; 
                    sliderItems[i].style.top = "60px";
                }
            }
        }

        getVerticalPosition();
        setTimeout((function() {
            getHeight();
            udpateSlider();
        }), 200);

        document.addEventListener("resize", (e => {
            getVerticalPosition();
            setTimeout((function() {
                getHeight();
            }), 200);
        }));

        document.addEventListener("scroll", (e => {
            udpateSlider();
        }));   

        window.FLS = !0;
    }, []);

    return (
        <div className="cascade">
            <div className="title">{title}</div>
            <div className="cascade-slider">
                <SliderCards cards={cards} />
            </div>
        </div>
    );
};

export default CascadeSlider;