import React from 'react'
import { banner_type_one__titulo, banner_type_one__descripcion } from '../../constants/fileWithConstants'

export const BannerTypeOne = () => {
    return (
        <section className="banner-type-one__bg">
            <div className="container">
                <article>
                    <h1 dangerouslySetInnerHTML={{ __html: banner_type_one__titulo }} data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"></h1>
                    <p className="mt-1" dangerouslySetInnerHTML={{ __html: banner_type_one__descripcion }} data-aos="zoom-in" data-aos-duration="1100" data-aos-once="true"></p>
                </article>
            </div>
        </section>
    )
}
