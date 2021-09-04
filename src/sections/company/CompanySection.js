import React from 'react'
import { SliderCompany } from '../../components/slider/SliderCompany'
import {
    company__titulo,
} from '../../constants/fileWithConstants'

export const CompanySection = () => {

    return (
        <section className="company__section-content pt-75 pb-75">
            <div className="container">
                <article>
                    <h1 className="company__title text-center" dangerouslySetInnerHTML={{ __html: company__titulo }} data-aos="zoom-in" data-aos-duration="1800" data-aos-once="true" data-aos-delay="100"></h1>
                </article>
                <SliderCompany />
            </div>
        </section>
    )
}
