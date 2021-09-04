import React from 'react'
import { SliderTeam } from '../../components/slider/SliderTeam'
import {
    team__titulo,
    team__sub_titulo
} from '../../constants/fileWithConstants'

export const TeamSection = () => {
    return (
        <section className="team__section-content pt-75 pb-75">
            <div className="container">
                <article>
                    <h1 className="team__title text-center" dangerouslySetInnerHTML={{ __html: team__titulo }}></h1>
                    <h2 className="team__sub-title text-center" dangerouslySetInnerHTML={{ __html: team__sub_titulo }}></h2>
                </article>
                <div className="team__photos-content">
                    <div className="row d-none-mv">
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
                    <div className="d-lg-none d-md-none">
                        <SliderTeam />
                    </div>
                </div>
            </div>
        </section >
    )
}
