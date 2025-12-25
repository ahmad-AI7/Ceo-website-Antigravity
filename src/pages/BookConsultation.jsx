
import ConsultationHero from '../components/consultation/ConsultationHero';
import BookingForm from '../components/consultation/BookingForm';
import ConsultationBenefits from '../components/consultation/ConsultationBenefits';
import ConsultationFAQ from '../components/consultation/ConsultationFAQ';
import Testimonials from '../components/home/Testimonials'; // Reuse existing testimonials

const BookConsultation = () => {
    return (
        <div className="bg-black min-h-screen">
            <ConsultationHero />
            <BookingForm />
            <ConsultationBenefits />
            <Testimonials />
            <ConsultationFAQ />
        </div>
    );
};

export default BookConsultation;
