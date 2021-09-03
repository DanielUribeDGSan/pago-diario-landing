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
        <section className="como-funciona__section-content pt-75">
            <div className="container">
                <article>
                    <h1 className="como-funciona__title" dangerouslySetInnerHTML={{ __html: como_funciona__titulo }}></h1>
                </article>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center">
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: como_funciona__sub_titulo_1 }}></p>

                                <ul className="como-funciona__list mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__list_1 }}>

                                </ul>
                                <a class="buttons__btn buttons__btn-primary mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__boton_1 }}></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center">
                            <img src="./assets/images/comoFunciona/phone.svg" alt="pago diario" />
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center">
                            <img src="./assets/images/comoFunciona/computadora.svg" alt="pago diario" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center">
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: como_funciona__sub_titulo_2 }}></p>

                                <ul className="como-funciona__list mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__list_2 }}>

                                </ul>
                                <a class="buttons__btn buttons__btn-primary mt-3" dangerouslySetInnerHTML={{ __html: como_funciona__boton_2 }}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
