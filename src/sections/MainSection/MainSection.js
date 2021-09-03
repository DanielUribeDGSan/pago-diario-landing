import React from 'react'

export const MainSection = () => {
    return (
        <section className="main-section__section-content">
            <div className="row min-h100vh m-0">
                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                    <article>
                        <p className="main-section__text fw-500">En Pago Diario</p>
                        <h1 className="main-section__title-h1">¡Todos los días son de pago!</h1>
                        <p className="main-section__text-2 fw-500 mt-1">Tu nómina disponible 24/7 con nuestra<br />
                            modalidad de salario on demand</p>
                        <div className="main-section__espacio-text"></div>
                        <a className="buttons__btn buttons__btn-primary ">Contáctanos</a>
                        <div className="main-section__espacio-text"></div>
                        <p className="d-none-mv"><small>Descarga la app</small></p>
                        <img className="mt-1 mr-2 img-fluid d-none-mv" src="./assets/images/store/icon-02.png" alt="google play store" />
                        <img className="mt-1 img-fluid d-none-mv" src="./assets/images/store/icon-01.png" alt="apple store" />
                    </article>
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center p-0 main-section__bg">
                    <div className="d-none-mv">
                        <img
                            className='card-img main-section__image'
                            src='./assets/images/home/phone.svg?v=123'
                            alt='pagodiario'
                        />
                        <img
                            className='card-img main-section__image2'
                            src='./assets/images/home/puntos.svg?v=123'
                            alt='pagodiario'
                        />
                    </div>
                    <div className="d-lg-none d-md-none">
                        <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-center">
                                <img
                                    className='card-img main-section__image'
                                    src='./assets/images/home/phone.svg?v=123'
                                    alt='pagodiario'
                                />

                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex justify-content-center w-100">
                                <div>
                                    <p className="text-white"><small>Descarga la app</small></p>
                                    <img className="mt-1 mr-2 img-fluid" src="./assets/images/store/icon-02.png" alt="google play store" />
                                    <img className="mt-1 img-fluid" src="./assets/images/store/icon-01.png" alt="apple store" />
                                    <img
                                        className='card-img main-section__image2'
                                        src='./assets/images/home/puntos.svg?v=123'
                                        alt='pagodiario'
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >
    )
}
