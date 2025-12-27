import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const SkillsSection = () => {
    const skillCategories = [
        {
            category: "Strategic Leadership",
            skills: [
                "Business Strategy & Consulting",
                "Digital Transformation & Automation",
                "Brand Building & Market Positioning"
            ]
        },
        {
            category: "Technical Excellence",
            skills: [
                "CRM Systems (HubSpot, Salesforce, Zoho)",
                "Project & Operations Management",
                "Growth Marketing & Funnel Strategy"
            ]
        },
        {
            category: "Client Success",
            skills: [
                "Client Experience & Account Management",
                "Stakeholder Communication",
                "Business Process Optimization"
            ]
        }
    ];

    return (
        <section className="relative py-32 bg-gradient-to-b from-black via-[#0a0a09] to-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[140px]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-block mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                <Sparkles className="w-3 h-3 text-white/40" />
                                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">Expertise</span>
                            </div>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                            Skills &<br />
                            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                Specializations
                            </span>
                        </h2>

                        <p className="text-base text-white/50 max-w-2xl mx-auto">
                            Over 7 years of experience delivering excellence across strategic leadership, technical implementation, and client success.
                        </p>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, catIdx) => (
                            <motion.div
                                key={catIdx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIdx * 0.2, duration: 0.6 }}
                                className="group"
                            >
                                {/* Category Card */}
                                <div className="h-full bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                                    {/* Category Header */}
                                    <div className="mb-8">
                                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/10 transition-all duration-300">
                                            <CheckCircle2 className="w-6 h-6 text-white/40 group-hover:text-white/60 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-light text-white mb-2">{category.category}</h3>
                                        <div className="w-8 h-[1px] bg-gradient-to-r from-white/30 to-transparent"></div>
                                    </div>

                                    {/* Skills List */}
                                    <ul className="space-y-4">
                                        {category.skills.map((skill, skillIdx) => (
                                            <motion.li
                                                key={skillIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIdx * 0.2 + skillIdx * 0.1 }}
                                                className="flex items-start space-x-3 group/item"
                                            >
                                                <div className="mt-1.5">
                                                    <div className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover/item:bg-white/60 transition-colors"></div>
                                                </div>
                                                <span className="text-sm text-white/60 group-hover/item:text-white/80 transition-colors leading-relaxed">
                                                    {skill}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { label: "Tools Mastered", value: "20+" },
                            { label: "Industries Served", value: "10+" },
                            { label: "Certifications", value: "5+" },
                            { label: "Success Rate", value: "98%" }
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all duration-300"
                            >
                                <div className="text-3xl font-light text-white mb-2">{stat.value}</div>
                                <div className="text-[10px] tracking-wider text-white/40 uppercase">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
