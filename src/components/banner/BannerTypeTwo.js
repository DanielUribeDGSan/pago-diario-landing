import React from 'react'
import {
    banner_type_two__titulo_1,
    banner_type_two__descripcion_1,
    banner_type_two__titulo_2,
    banner_type_two__descripcion_2,
    banner_type_two__titulo_3,
    banner_type_two__descripcion_3
} from '../../constants/fileWithConstants'

import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

export const BannerTypeTwo = () => {
    let view = false;
    return (
        <section className="banner-type-two__bg" id="sobre-nosotros">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="100">
                            <article>
                                <h1 className="text-white" dangerouslySetInnerHTML={{ __html: banner_type_two__titulo_1 }}></h1>
                                <p className="text-white fw-200 mt-2" dangerouslySetInnerHTML={{ __html: banner_type_two__descripcion_1 }}></p>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-4 mt-4">
                        <div className="d-lg-flex align-items-center justify-content-center" data-aos="fade-down" data-aos-duration="1800" data-aos-once="true" data-aos-delay="200">
                            <article>
                                <h1 className="text-white">
                                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                        {({ isVisible }) => (
                                            <div style={{ height: 40 }}>
                                                {isVisible ? <span>+<CountUp end={600} duration={2} /></span> : null}
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </h1>
                                <p className="text-white fw-400 mt-2" dangerouslySetInnerHTML={{ __html: banner_type_two__descripcion_2 }}></p>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-lg-0 mt-md-4 mt-4">
                        <div className="d-lg-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="200">
                            <article>
                                <h1 className="text-white">
                                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                        {({ isVisible }) => (
                                            <div style={{ height: 40 }}>
                                                {isVisible ? <span>+<CountUp end={300} duration={2} /></span> : null}
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </h1>
                                <p className="text-white fw-400 mt-2" dangerouslySetInnerHTML={{ __html: banner_type_two__descripcion_3 }}></p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
