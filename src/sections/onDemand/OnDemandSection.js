import React from 'react'

export const OnDemandSection = () => {
    return (
        <section className="ondemand__section-content pt-content pb-content mt-content mb-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <article>
                            <h1 className="ondemand__title-h1 text-center fw-300">Salario on-demand</h1>
                            <p className="text-center ondemand__text fw-500">¡Tu libertad financiera en una app! </p>
                            <p className="text-center ondemand__text">Tener PagoDiario en tu celular te permite disponer de tu nómina de forma inmediata.</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <a className="buttons__bt buttons__btn-primary-light mr-3">Conocer mas</a>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="card ondemand__card">
                            <div className="card-body">
                                <div>
                                    <img src="./assets/images/ondemand/phone.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200">Accede a tu nómina ya trabajada desde tu celular 24/7.</p>
                                    <hr />
                                </div>
                                <div className="mt-4">
                                    <img src="./assets/images/ondemand/retirar.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200">Tus retiros no son créditos ni préstamos, no generan intereses ni recargos.</p>
                                    <hr />
                                </div>
                                <div className="mt-4">
                                    <img src="./assets/images/ondemand/etiqueta-del-precio.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200">Paga una comisión fija sin preocuparte de la cantidad que retires.</p>
                                    <hr />
                                </div>
                                <div className="mt-4">
                                    <img src="./assets/images/ondemand/archivo.svg" className="ondemand__icon" alt="phone" />
                                    <p className="fw-200">Disfruta PagoDiario sin llenar ninguna solicitud. Solo necesitas descargar la app y registrarte.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
