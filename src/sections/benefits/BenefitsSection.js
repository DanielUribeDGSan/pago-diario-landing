import React from 'react'
import { SliderCard } from '../../components/slider/SliderCard'
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

export const BenefitsSection = () => {
    return (
        <section className="benefits__section-content pt-75">
            <div className="container">
                <div className="d-flex align-items-center">
                    <article>
                        <h1 className="benefits__title" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" dangerouslySetInnerHTML={{ __html: benefits__titulo }}></h1>
                        <p className="benefits__text mt-1" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true" dangerouslySetInnerHTML={{ __html: benefits__sub_titulo }}></p>
                    </article>
                </div>
                <div className="d-lg-none">
                    <SliderCard />
                </div>
                <div className="row mt-3 d-none">
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body benefits__card-body">
                                <img src="./assets/images/benefits/withdrawal.svg" alt="salario" />
                                <h5 className="benefits__title-card mt-3 fw-500" dangerouslySetInnerHTML={{ __html: benefits__card_1_titulo }}></h5>
                                <ul className="benefits__list" dangerouslySetInnerHTML={{ __html: benefits__card_1_list }}>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body benefits__card-body">
                                <img src="./assets/images/benefits/Recipt.svg" alt="nómina" />
                                <h5 className="benefits__title-card mt-3 fw-500" dangerouslySetInnerHTML={{ __html: benefits__card_2_titulo }}></h5>
                                <ul className="benefits__list" dangerouslySetInnerHTML={{ __html: benefits__card_2_list }}>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body benefits__card-body">
                                <img src="./assets/images/benefits/cronografo.svg" alt="Próximamente" />
                                <h5 className="benefits__title-card mt-3 fw-500" dangerouslySetInnerHTML={{ __html: benefits__card_3_titulo }}></h5>
                                <ul className="benefits__list" dangerouslySetInnerHTML={{ __html: benefits__card_3_list }}>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
