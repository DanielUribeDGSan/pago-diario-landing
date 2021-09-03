import React from 'react'
import { SliderCompany } from '../../components/slider/SliderCompany'

export const CompanySection = () => {

    return (
        <section className="company__section-content pt-75 pb-75">
            <div className="container">
                <article>
                    <h1 className="company__title text-center">Empresas usando PagoDairio</h1>
                </article>
                <SliderCompany />
            </div>
        </section>
    )
}
