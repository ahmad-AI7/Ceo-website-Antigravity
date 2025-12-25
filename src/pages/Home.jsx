import Hero from '../components/home/Hero';
import AboutSummary from '../components/home/AboutSummary';
import ServicesIndex from '../components/home/ServicesIndex';
import SkillsSection from '../components/home/SkillsSection';
import PortfolioSummary from '../components/home/PortfolioSummary';
// Globe imported lazily below
import WhyChooseMe from '../components/home/WhyChooseMe';
import Testimonials from '../components/home/Testimonials';
import LatestBlogs from '../components/home/LatestBlogs';

import { Suspense, lazy } from 'react';

const Globe = lazy(() => import('../components/home/Globe/Globe').then(module => ({ default: module.Globe })));

const Home = () => {
    return (
        <>
            <Hero />
            <AboutSummary />
            <ServicesIndex />
            <SkillsSection />
            <PortfolioSummary />
            <Suspense fallback={<div className="h-96 w-full bg-black" />}>
                <Globe />
            </Suspense>
            <WhyChooseMe />
            <Testimonials />
            <LatestBlogs />
        </>
    );
};

export default Home;
