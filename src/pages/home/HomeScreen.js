import React from 'react'
import { BannerTypeOne } from '../../components/banner/BannerTypeOne'
import { BannerTypeTwo } from '../../components/banner/BannerTypeTwo'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { BenefitsSection } from '../../sections/benefits/BenefitsSection'
import { ComoFunciona } from '../../sections/ComoFunciona/ComoFunciona'
import { CompanySection } from '../../sections/company/CompanySection'
import { MainSection } from '../../sections/MainSection/MainSection'
import { TeamSection } from '../../sections/team/TeamSection'



export const HomeScreen = () => {
    return (
        <div className="main-wrapper main-wrapper-2">
            <Header />
            <main>
                <MainSection />
                <BannerTypeOne title="Ahorra hasta 3 millones de pesos anuales en rotación" description="Disminuye el estrés financiero de tus colaboradores" />
                <BenefitsSection />
                <ComoFunciona />
                <CompanySection />
                <BannerTypeTwo />
                <TeamSection />
            </main>
            <Footer />
        </div>
    )
}
