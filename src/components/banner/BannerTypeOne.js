import React from 'react'
import { banner_type_one__titulo, banner_type_one__descripcion } from '../../constants/fileWithConstants'

export const BannerTypeOne = () => {
    return (
        <section className="banner-type-one__bg">
            <div className="container">
                <article>
                    <h1 dangerouslySetInnerHTML={{ __html: banner_type_one__titulo }}></h1>
                    <p className="mt-1" dangerouslySetInnerHTML={{ __html: banner_type_one__descripcion }}></p>
                </article>
            </div>
        </section>
    )
}
