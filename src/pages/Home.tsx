import AboutSubjectsSection from './AboutSubjectsSection'
import ActivitiesSection from './ActivitiesSection'
import AdmissionSection from './AdmissionSection'
import FAQContactSection from './FAQContactSection'
import GallerySection from './GallerySection'
import HeroSection from './HeroSection'
import OurKitchen from './OurKitchen'
import OurTeam from './OurTeam'
import PaymentType from './PaymentType'
import WhyUsSection from './WhyUsSection'

function Home() {
  return (
    <div>
        <HeroSection />
        <WhyUsSection />
        <AboutSubjectsSection />
        <ActivitiesSection />
        <GallerySection />
        <AdmissionSection />
        <FAQContactSection />
        <OurTeam />
        <OurKitchen />
        <PaymentType />
    </div>
  )
}

export default Home