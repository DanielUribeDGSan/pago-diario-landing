import React from 'react'
import Carousel, { consts } from "react-elastic-carousel";
import {
    benefits__titulo,
    benefits__sub_titulo,
    benefits__card_1_titulo,
    benefits__card_1_list,
    benefits__card_2_titulo,
    benefits__card_2_list,
    benefits__card_3_titulo,
    benefits__card_3_list,

} from '../../constants/fileWithConstants'

export const SliderCard = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img className="slider__icon" src="./assets/images/slider/left.svg" alt="left icon" /> : <img className="slider__icon" src="./assets/images/slider/right.svg" alt="right icon" />;
        return (
            <button className="slider__btn" onClick={onClick} disabled={isEdge}>
                {pointer}
            </button>
        )
    }

    const itemP = [20, 20, 20, 20];

    return (
        <div className="slider__content" data-aos="fade-up" data-aos-duration="1400" data-aos-once="true">
            <Carousel breakPoints={breakPoints} showArrows={false} itemPadding={itemP}>
                <div className="card">
                    <div className="card-body benefits__card-body">
                        <img src="./assets/images/benefits/withdrawal.svg" alt="salario" />
                        <h5 className="benefits__title-card mt-3 fw-500" dangerouslySetInnerHTML={{ __html: benefits__card_1_titulo }}></h5>
                        <ul className="benefits__list" dangerouslySetInnerHTML={{ __html: benefits__card_1_list }}>

                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body benefits__card-body">
                        <img src="./assets/images/benefits/Recipt.svg" alt="nómina" />
                        <h5 className="benefits__title-card mt-3 fw-500" dangerouslySetInnerHTML={{ __html: benefits__card_2_titulo }}></h5>
                        <ul className="benefits__list" dangerouslySetInnerHTML={{ __html: benefits__card_2_list }}>

                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body benefits__card-body">
                        <img src="./assets/images/benefits/cronografo.svg" alt="Próximamente" />
                        <h5 className="benefits__title-card mt-3 fw-500" dangerouslySetInnerHTML={{ __html: benefits__card_3_titulo }}></h5>
                        <ul className="benefits__list" dangerouslySetInnerHTML={{ __html: benefits__card_3_list }}>

                        </ul>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}
