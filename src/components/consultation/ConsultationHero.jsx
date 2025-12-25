import { motion } from 'framer-motion';

const ConsultationHero = () => {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight">
                        Define Your Legacy. <br className="hidden md:block" />
                        <span className="text-accent">Architect the Future.</span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                        A confidential, high-velocity session to strictly align your board strategy and executive leadership with elite global standards.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ConsultationHero;
