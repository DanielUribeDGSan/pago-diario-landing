import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


// const slinky = $('#mobile-menu').slinky();


export const Header = () => {
    return (
        <header className="header-area header-responsive-padding header-height-1">
            <div className="header-bottom sticky-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-6 col-6">
                            <div className="logo">
                                <a href="/"><img src="./assets/images/logo/logo-color.svg" alt="PagoDiario" /></a>
                            </div>
                        </div>
                        <div className="col-lg-10 d-none d-lg-block d-flex justify-content-end">
                            <div className="main-menu text-center">
                                <nav>
                                    <ul>
                                        <li>
                                            <AnchorLink offset='10' href='#beneficios'>Beneficios para tu empresa</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink offset='10' href='#como-funciona'>¿Cómo funciona?</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink offset='50' href='#sobre-nosotros'>Sobre nosotros</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink offset='10' href='#lo-quiero-para-mi-empresa'>Lo quiero para mi empresa</AnchorLink>
                                        </li>
                                        <li>
                                            <div>
                                                <a className="buttons__btn buttons__btn-primary">Entrar</a>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 d-lg-none col-md-6 col-6">
                            <div className="header-action-wrap">
                                <div className="header-action-style d-block ">

                                    <input type="checkbox" className="openSidebarMenu header__input-movil" id="openSidebarMenu" />
                                    <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                                        <div className="spinner diagonal part-1"></div>
                                        <div className="spinner horizontal"></div>
                                        <div className="spinner diagonal part-2"></div>
                                    </label>
                                    <div id="sidebarMenu">
                                        <ul className="sidebarMenuInner">
                                            <li>
                                                <AnchorLink offset='10' href='#beneficios'>Beneficios para tu empresa</AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink offset='10' href='#como-funciona'>¿Cómo funciona?</AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink offset='50' href='#sobre-nosotros'>Sobre nosotros</AnchorLink>
                                            </li>
                                            <li>
                                                <AnchorLink offset='10' href='#lo-quiero-para-mi-empresa'>Lo quiero para mi empresa</AnchorLink>
                                            </li>
                                            <li>
                                                <a className="buttons__btn buttons__btn-primary header__btn">Entrar</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

