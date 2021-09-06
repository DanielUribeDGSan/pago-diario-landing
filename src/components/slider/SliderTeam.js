import React from 'react'
import Carousel from "react-elastic-carousel";

export const SliderTeam = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const itemP = [20, 20, 20, 20];

    return (
        <div className="slider__content" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">
            <Carousel breakPoints={breakPoints} showArrows={false} itemPadding={itemP}>

                <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/carlosbn.png)' }}></div>


                <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Pablobn.png)' }}></div>


                <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/kevinbn.png)' }}></div>


                <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/marielbn.png)' }}></div>


                <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Javierbn.png)' }}></div>


                <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Agustinbn.png)' }}></div>


                {/* <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Perlabn.png)' }}></div> */}

            </Carousel>
        </div>
    )
}
