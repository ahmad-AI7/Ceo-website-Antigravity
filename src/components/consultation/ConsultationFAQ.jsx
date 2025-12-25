
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const ConsultationFAQ = () => {
    const faqs = [
        {
            question: "Is this consultation confidential?",
            answer: "Absolutely. All discussions are held in strict confidence. NDAs are available upon request prior to the session."
        },
        {
            question: "Who is this consultation for?",
            answer: "This service is designed for C-Suite executives, Board Members, and Senior Leaders seeking strategic advisory on digital transformation, governance, or leadership challenges."
        },
        {
            question: "Can I bring my team?",
            answer: "Yes, you are welcome to invite up to 2 additional key stakeholders to the call if their input is relevant to the strategic discussion."
        },
        {
            question: "What happens after the call?",
            answer: "You will receive a summary of our discussion and a proposal for continued advisory services if applicable. there is no obligation to proceed further."
        }
    ];

    return (
        <section className="py-20 bg-[#0a0a09]">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-light text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-white/50">Common questions about the advisory process.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/10 rounded-lg overflow-hidden bg-white/[0.02]">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
            >
                <span className="text-white font-medium">{faq.question}</span>
                {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-white/50" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ConsultationFAQ;
