import React from 'react'

export const TeamSection = () => {
    return (
        <section className="team__section-content pt-75 pb-75">
            <div className="container">
                <article>
                    <h1 className="team__title text-center">Nuestra meta es causar un impacto positivo en la salud
                        financiera de millones de personas.</h1>
                    <h2 className="team__sub-title text-center">Nuestro equipo</h2>
                </article>
                <div className="team__photos-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/carlosbn.png)' }}></div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Pablobn.png)' }}></div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/kevinbn.png)' }}></div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/marielbn.png)' }}></div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Javierbn.png)' }}></div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Agustinbn.png)' }}></div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4">
                            <div className="team__content-img" style={{ backgroundImage: 'url(./assets/images/team/Perlabn.png)' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
