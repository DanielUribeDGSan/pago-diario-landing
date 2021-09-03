import React from 'react'
import {
    banner_type_two__titulo_1,
    banner_type_two__descripcion_1,
    banner_type_two__titulo_2,
    banner_type_two__descripcion_2,
    banner_type_two__titulo_3,
    banner_type_two__descripcion_3
} from '../../constants/fileWithConstants'

export const BannerTypeTwo = () => {
    return (
        <section className="banner-type-two__bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <article>
                                <h1 className="text-white" dangerouslySetInnerHTML={{ __html: banner_type_two__titulo_1 }}></h1>
                                <p className="text-white fw-200 mt-2" dangerouslySetInnerHTML={{ __html: banner_type_two__descripcion_1 }}></p>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <article>
                                <h1 className="text-white" dangerouslySetInnerHTML={{ __html: banner_type_two__titulo_2 }}></h1>
                                <p className="text-white fw-400 mt-2" dangerouslySetInnerHTML={{ __html: banner_type_two__descripcion_2 }}></p>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <article>
                                <h1 className="text-white" dangerouslySetInnerHTML={{ __html: banner_type_two__titulo_3 }}></h1>
                                <p className="text-white fw-400 mt-2" dangerouslySetInnerHTML={{ __html: banner_type_two__descripcion_3 }}></p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
