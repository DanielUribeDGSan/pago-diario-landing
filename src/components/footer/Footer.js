import React from 'react'


export const Footer = () => {
    return (
        <footer className="footer__content footer__pb-footer footer__pt-footer" id="lo-quiero-para-mi-empresa">
            <div className="container">
                <div className="row footer__row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <h6>SUSCRÍBETE A NUESTRA NEWSLETTER</h6>
                        <p className="fw-200 mt-2">Suscríbete para no perderte ningún contenido</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <p><small className="fw-200 footer__title-input">Escribe tu correo electrónico</small></p>
                        <form className="form-inline">
                            <div className="form-group  mb-2">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" className="footer__form-newsletter" id="email" placeholder="correo@mail.com" />
                            </div>
                            <button type="submit" className="buttons__btn buttons__btn-primary footer__btn-newsletter mb-2">Suscribirse</button>
                        </form>
                    </div>
                </div>
                <div className="row footer__row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-lg-3 col-md-4 d-lg-flex d-md-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        <div>
                            <img
                                className='footer__logo'
                                src='./assets/images/logo/logo-color.svg'
                                alt='pagodiario'
                            />
                            <p className="footer__text text-justify fw-200 d-none">Somos una empresa de servicios financieros 100% mexicana.</p>
                            <p className="footer__text text-justify fw-200 d-none">Llevamos más de media década ofreciendo servicios financieros.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-lg-flex d-md-flex justify-content-center" data-aos="fade-up" data-aos-duration="1300" data-aos-once="true">
                        <div className="w-auto footer__pl10 footer__pl-md footer__pt-sm">
                            <a className="footer__text-link fw-200">Conoce PagoDiario</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Contáctanos</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 d-lg-flex d-md-flex justify-content-center" data-aos="fade-up" data-aos-duration="1300" data-aos-once="true">
                        <div className="w-auto footer__pt-sm">
                            <a className="footer__text-link fw-200">Ingresos</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Egresos</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Patrimonio</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 d-lg-flex d-md-flex justify-content-center" data-aos="fade-down" data-aos-duration="1400" data-aos-once="true">
                        <div className="w-100 footer__pl-md footer__pt-sm">
                            <p className="footer__title text-justify fw-200">Siguenos </p>
                            <a className="footer__link" href="https://mx.linkedin.com/company/tupagodiario" target="_blank"><img className="mr-3" src="./assets/images/footer/linkeding.svg" alt="linkeding" />
                            </a>
                            <a className="footer__link" href="https://www.instagram.com/tupagodiario/" target="_blank"><img className="mr-3" src="./assets/images/footer/instagram.svg" alt="instagram" />
                            </a>
                            <a className="footer__link" href="https://www.facebook.com/tupagodiario" target="_blank"><img className="mr-3" src="./assets/images/footer/facebook.svg" alt="facebook" />
                            </a>
                            <div className="footer__espacio-text"></div>
                            <p className="footer__title text-justify fw-200">Descarga la app </p>
                            <div className="position-relative">
                                <a className="footer__link" href="https://play.google.com/store/apps/details?id=com.ih.pagodiario" target="_blank">
                                    <img className="mr-2 img-fluid" src="./assets/images/store/icon-02.png" alt="google play store" />
                                </a>
                                <a className="footer__link" href="https://apps.apple.com/mx/app/pago-diario/id1505827398?l=en" target="_blank">
                                    <img className="img-fluid" src="./assets/images/store/icon-01.png" alt="apple store" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
