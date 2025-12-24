import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServicesList = () => {
    const services = [
        {
            title: "C-Suite Advisory & Strategic Leadership",
            desc: "Providing executive-level guidance to drive organizational transformation, optimize decision-making, and achieve sustainable competitive advantage."
        },
        {
            title: "Board Governance & NED Services",
            desc: "Independent board director expertise to enhance corporate governance, risk management, and strategic oversight for growing organizations."
        },
        {
            title: "Digital Transformation Excellence",
            desc: "Leading comprehensive digital transformation initiatives to modernize operations, enhance customer experiences, and drive innovation at scale."
        },
        {
            title: "Business Strategy & Growth Planning",
            desc: "Developing clear roadmaps with actionable insights to scale operations, attract investors, and strengthen market presence across industries."
        },
        {
            title: "Operational Excellence & Process Optimization",
            desc: "Streamlining backend systems, automating workflows, and optimizing cross-functional operations to maximize efficiency and profitability."
        },
        {
            title: "Leadership Development & Change Management",
            desc: "Building high-performance leadership teams and managing organizational change to create resilient, future-ready enterprises."
        }
    ];

    return (
        <section id="services-list" className="relative py-32 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}></div>
            </div>

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
                        Comprehensive Executive
                        <br />
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Advisory Services
                        </span>
                    </h2>
                    <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
                        Leveraging 30+ years of experience to deliver transformative solutions for boards, C-suite executives, and growing organizations.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center">
                                <span className="text-sm font-light text-white">0{idx + 1}</span>
                            </div>

                            {/* Content */}
                            <div className="space-y-6 pt-4">
                                <h3 className="text-xl lg:text-2xl font-light text-white leading-tight group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-white/60 leading-relaxed font-light">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Hover Gradient Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-20 pt-20 border-t border-white/5"
                >
                    <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
                        Ready to Transform Your Organization?
                    </h3>
                    <p className="text-base text-white/60 mb-10 max-w-2xl mx-auto">
                        Schedule a consultation to discuss how we can help achieve your strategic objectives.
                    </p>
                    <Link
                        to="/appointment"
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black text-sm font-semibold tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-white/20"
                    >
                        <span>Book Consultation</span>
                        <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesList;
