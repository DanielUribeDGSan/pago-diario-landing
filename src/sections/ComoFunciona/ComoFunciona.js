import React from 'react'
import {
    como_funciona__titulo,
    como_funciona__sub_titulo_1,
    como_funciona__list_1,
    como_funciona__boton_1,
    como_funciona__sub_titulo_2,
    como_funciona__list_2,
    como_funciona__boton_2
} from '../../constants/fileWithConstants'

export const ComoFunciona = () => {
    return (
        <section className="como-funciona__section-content pt-75" id="como-funciona">
            <div className="container">
                <article>
                    <h1 className="como-funciona__title" dangerouslySetInnerHTML={{ __html: como_funciona__titulo }} data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true" data-aos-delay="100"></h1>
                </article>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center" data-aos="zoom-in-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="200">
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: como_funciona__sub_titulo_1 }}></p>

                                <ul className="como-funciona__list mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__list_1 }}>

                                </ul>
                                <a className="buttons__btn buttons__btn-primary mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__boton_1 }}></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mt-lg-0 mt-md-0 mt-5">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center" data-aos="zoom-in-down" data-aos-duration="1800" data-aos-once="true" data-aos-delay="300">
                            <img src="./assets/images/comoFunciona/phone.svg" alt="pago diario" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 d-none-mv">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center" data-aos="zoom-in-down" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
                            <img src="./assets/images/comoFunciona/computadora.svg" alt="pago diario" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center" data-aos="zoom-in-up" data-aos-duration="1800" data-aos-once="true" data-aos-delay="500">
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: como_funciona__sub_titulo_2 }}></p>

                                <ul className="como-funciona__list mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__list_2 }}>

                                </ul>
                                <a className="buttons__btn buttons__btn-primary mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__boton_2 }}></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mt-5 d-lg-none d-md-none">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center" data-aos="zoom-in-down" data-aos-duration="1800" data-aos-once="true" data-aos-delay="400">
                            <img src="./assets/images/comoFunciona/computadora.svg" alt="pago diario" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
