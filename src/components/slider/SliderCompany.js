import React from 'react'
import Carousel, { consts } from "react-elastic-carousel";

export const SliderCompany = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 4 },
        { width: 550, itemsToShow: 4 },
        { width: 768, itemsToShow: 7 },
        { width: 1200, itemsToShow: 8 },
    ];

    const itemP = [0, 0, 0, 0];
    return (
        <div className="slider-company__content" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">
            <Carousel breakPoints={breakPoints} autoPlaySpeed={8000} transitionMs={1000} enableAutoPlay={true} pagination={false} showArrows={false} itemPadding={itemP} itemPosition={consts.CENTER}>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo21.svg" alt="trbajando con pago diario" />
                </div>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo1.svg" alt="trbajando con pago diario" />
                </div>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo11.svg" alt="trbajando con pago diario" />
                </div>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo22.svg" alt="trbajando con pago diario" />
                </div>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo2.svg" alt="trbajando con pago diario" />
                </div>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo12.svg" alt="trbajando con pago diario" />
                </div>
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo23.svg" alt="trbajando con pago diario" />
                </div>
                {/* <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo3.svg" alt="trbajando con pago diario" />
                </div> */}
                <div className="mr-3 d-flex align-items-center justify-content-center">
                    <img src="./assets/images/company/logo1.svg" alt="trbajando con pago diario" />
                </div>
            </Carousel>

        </div>
    )
}
