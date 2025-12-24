import { motion } from 'framer-motion';

const ServicesExpertise = () => {
    const expertiseItems = [
        { name: "DevOps", category: "tech" },
        { name: "Project Management", category: "business" },
        { name: "SaaS Solutions", category: "tech" },
        { name: "Data Analytics and Insights", category: "business" },
        { name: "Market Research", category: "business" },
        { name: "AI Solutions", category: "tech" },
        { name: "UI/UX Design", category: "tech" },
        { name: "ERP/CRM Software", category: "business" },
        { name: "E-Commerce Solutions", category: "tech" },
        { name: "Database Management", category: "business" },
        { name: "Cloud Solutions", category: "tech" },
        { name: "Staff Augmentation", category: "tech" },
        { name: "Cybersecurity", category: "tech" },
        { name: "Data Mining", category: "business" },
        { name: "Design & Development", category: "tech" },
        { name: "Maintenance & Support", category: "business" },
        { name: "Quality Assurance", category: "business" },
        { name: "Web Development", category: "tech" },
        { name: "Data Extraction/ETL", category: "business" },
        { name: "Virtual Assistance", category: "business" }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        <p className="text-[10px] tracking-[0.3em] text-white/50 uppercase font-medium">
                            OUR EXPERTISE
                        </p>
                        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
                        Expertise That{' '}
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Drives Results
                        </span>
                    </h2>
                    <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
                        Our portfolio spans strategic business consulting and next-gen tech implementation.
                    </p>
                </motion.div>

                {/* Expertise Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {expertiseItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05, duration: 0.6 }}
                            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
                        >
                            {/* Category Badge */}
                            <span className={`text-[9px] tracking-widest font-medium uppercase mb-4 inline-block px-3 py-1.5 rounded-lg ${item.category === 'tech' ? 'bg-white/5 text-white/50 border border-white/10' : 'bg-white/5 text-white/50 border border-white/10'}`}>
                                {item.category}
                            </span>

                            {/* Service Name */}
                            <h3 className="text-lg lg:text-xl text-white font-light mb-4 leading-tight">{item.name}</h3>

                            {/* Explore Link */}
                            <div className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase group-hover:text-white/70 transition-colors">
                                <span>Explore Service</span>
                                <span className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
                            </div>

                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesExpertise;
