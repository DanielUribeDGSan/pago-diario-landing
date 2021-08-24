import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const Footer = () => {
    return (
        <footer className="pb-content mb-content">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                        <div>
                            <img
                                className='footer__logo'
                                src='./assets/images/logo/logo-color.svg'
                                alt='pagodiario'
                            />
                            <p className="footer__text text-justify fw-200">Somos una empresa de servicios financieros 100% mexicana.</p>
                            <p className="footer__text text-justify fw-200">Llevamos más de media década ofreciendo servicios financieros.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                        <div className="w-100 footer__pl10">
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={faMapMarkerAlt} />
                            <span className="footer__text-icon text-justify fw-200">Montes Urales 430 Lomas Virreyes</span>
                            <div className="footer__espacio-text"></div>
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={faPhoneAlt} />
                            <span className="footer__text-icon text-justify fw-200">(55) 7586 8002</span>
                            <div className="footer__espacio-text"></div>
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={['fab', 'whatsapp']} />
                            <span className="footer__text-icon text-justify fw-200">(55) 7586 8002</span>
                            <div className="footer__espacio-text"></div>
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={faEnvelope} />
                            <span className="footer__text-icon text-justify fw-200">(55) 3678 2904</span>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                        <div className="w-100 footer__pl10">
                            <a className="footer__text-link fw-200">Conoce PagoDiario</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Club PagoDiario</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Blog</a>
                            <div className="footer__espacio-text"></div>
                            <a className="footer__text-link fw-200">Podcast</a>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-center">
                        <div className="w-100">
                            <p className="footer__title text-justify fw-200">Siguenos </p>
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={faMapMarkerAlt} />
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={faMapMarkerAlt} />
                            <FontAwesomeIcon className="mr-3 footer__icon" icon={faMapMarkerAlt} />
                            <div className="footer__espacio-text"></div>
                            <p className="footer__title text-justify fw-200">Siguenos </p>
                            <img className="footer__img-shop" src="./assets/images/footer/app.png" alt="tiendas movil" />
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}
