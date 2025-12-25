
import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, ShieldCheck } from 'lucide-react';

const ConsultationBenefits = () => {
    const benefits = [
        {
            icon: Target,
            title: "Absolute Clarity",
            description: "Eliminate ambiguity. Identify the core friction points ensuring your strategy is bulletproof."
        },
        {
            icon: TrendingUp,
            title: "High-Velocity Action",
            description: "Walk away with a concrete battle plan. No theory, just executed levers for growth."
        },
        {
            icon: Users,
            title: "Unified Command",
            description: "Align your C-Suite and Board with a singular, powerful vision that demands execution."
        },
        {
            icon: ShieldCheck,
            title: "Unfiltered Truth",
            description: "The hard truths internal teams fear to speak. An external verification of your reality."
        }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Why Book a Consultation?</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:bg-white/[0.05] transition-colors group"
                        >
                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                <benefit.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl text-white font-light mb-3">{benefit.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConsultationBenefits;
