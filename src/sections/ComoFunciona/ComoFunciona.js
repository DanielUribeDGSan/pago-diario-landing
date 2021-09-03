import React from 'react'

export const ComoFunciona = () => {
    return (
        <section className="como-funciona__section-content pt-75">
            <div className="container">
                <article>
                    <h1 className="como-funciona__title">¿Cómo funciona?</h1>
                </article>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="como-funciona__content-col d-flex align-items-center justify-content-center">
                            <div>
                                <p>Con PagoDiario, tus colaboradores podrán
                                    tener acceso a diversas soluciones financieras</p>

                                <ul className="como-funciona__list mt-3">
                                    <li>
                                        Diinero disponible 24/7 de forma inmediata
                                    </li>
                                    <li>
                                        Comisión única por retiro
                                    </li>
                                    <li>
                                        No genera cobros hasta hacer disposición
                                    </li>
                                    <li>
                                        No es préstamo, es el dinero ya trabajado
                                    </li>
                                    <li>
                                        Sin cobro de intereses
                                    </li>
                                </ul>
                                <a class="buttons__btn buttons__btn-primary mt-3">Conoce más</a>
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
                                <p>Implementación fácil, segura y rápida</p>

                                <ul className="como-funciona__list mt-3">
                                    <li>Firma un convenio con nuestro equipo comercial</li>
                                    <li> Carga tu base de datos rápidamente o apóyate de nuestro equipo</li>
                                    <li> Onboarding para tus empleados a su nueva prestación gratis</li>
                                    <li> Ajustable a procesos y/o softwares de nómina de tu empresa</li>
                                </ul>
                                <a class="buttons__btn buttons__btn-primary mt-3">Conoce más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
