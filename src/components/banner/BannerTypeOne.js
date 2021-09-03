import React from 'react'

export const BannerTypeOne = ({ title, description }) => {
    return (
        <section className="banner-type-one__bg">
            <div className="container">
                <article>
                    <h1>{title}</h1>
                    <p className="mt-1">{description}</p>
                </article>
            </div>
        </section>
    )
}
