import React from 'react'
import {
    main_section__titulo,
    main_section__sub_titulo,
    main_section__descripcion,
    main_section__boton,
    main_section__texto_sm
} from '../../constants/fileWithConstants'
export const MainSection = () => {
    return (
        <section className="main-section__section-content">
            <div className="row min-h100vh m-0">
                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                    <article>
                        <p className="main-section__text fw-500" dangerouslySetInnerHTML={{ __html: main_section__titulo }}></p>
                        <h1 className="main-section__title-h1" dangerouslySetInnerHTML={{ __html: main_section__sub_titulo }}></h1>
                        <p className="main-section__text-2 fw-500 mt-1" dangerouslySetInnerHTML={{ __html: main_section__descripcion }}></p>
                        <div className="main-section__espacio-text"></div>
                        <a className="buttons__btn buttons__btn-primary" dangerouslySetInnerHTML={{ __html: main_section__boton }}></a>
                        <div className="main-section__espacio-text"></div>
                        <p className="d-none-mv" dangerouslySetInnerHTML={{ __html: main_section__texto_sm }}></p>
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
