import React from 'react'

export const BenefitsSection = () => {
    return (
        <section className="benefits__section-content pt-75">
            <div className="container">
                <div className="d-flex align-items-center">
                    <article>
                        <h1 className="benefits__title" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">Explora tus beneficios</h1>
                        <p className="benefits__text mt-1" data-aos="fade-up" data-aos-duration="1100" data-aos-once="true">Ofrecemos soluciones financieras a tu medida:</p>
                    </article>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body benefits__card-body">
                                <img src="./assets/images/benefits/withdrawal.svg" alt="salario" />
                                <h5 className="benefits__title-card mt-3 fw-500">Salario on demand</h5>
                                <ul className="benefits__list">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body benefits__card-body">
                                <img src="./assets/images/benefits/Recipt.svg" alt="nómina" />
                                <h5 className="benefits__title-card mt-3 fw-500">Créditos de nómina
                                    personalizados</h5>
                                <ul className="benefits__list">
                                    <li>Desde $3,000, hasta dos meses de sueldo neto</li>
                                    <li>Respuesta en 4 horas hábiles</li>
                                    <li>Plazos desde 3, 6, 12 y 18 meses</li>
                                    <li>Para colaboradores con al menos un año de antigüedad en la empresa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center">
                        <div className="card">
                            <div className="card-body benefits__card-body">
                                <img src="./assets/images/benefits/cronografo.svg" alt="Próximamente" />
                                <h5 className="benefits__title-card mt-3 fw-500">Próximamente</h5>
                                <ul className="benefits__list">
                                    <li>Pago de servicios</li>
                                    <li>Módulo de ahorro</li>
                                    <li>Marketplace</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
