import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const PortfolioSummary = () => {
    const works = [
        {
            title: "Scaled Operations for a Global eCommerce Brand",
            description: "Implemented ClickUp & Airtable systems to manage tasks, automate workflows, and improve team accountability – reducing operational overhead by 30%.",
            category: "Operations",
            result: "30% Cost Reduction",
            id: "01"
        },
        {
            title: "CRM Overhaul for a UAE Business Consultancy",
            description: "Set up and optimized Zoho CRM, improving lead management and client communication across departments, resulting in a 2x increase in conversion rates.",
            category: "CRM",
            result: "2x Conversion Rate",
            id: "02"
        },
        {
            title: "Digital Transformation for a Remote Marketing Agency",
            description: "Led the integration of Zapier and AI tools to automate repetitive tasks and reporting, saving 20+ hours weekly for the core team.",
            category: "Automation",
            result: "20+ Hours Saved/Week",
            id: "03"
        },
        {
            title: "Brand Strategy for a Fast-Growing Startup",
            description: "Developed brand identity, customer journey mapping, and go-to-market strategy – helping the startup secure its first round of funding.",
            category: "Brand Strategy",
            result: "Funding Secured",
            id: "04"
        },
        {
            title: "KPI Dashboards for a Leadership Team",
            description: "Built real-time tracking dashboards using Notion & Google Data Studio, giving executives data-driven insights for faster decision-making.",
            category: "Analytics",
            result: "Real-time Insights",
            id: "05"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-black via-[#0a0a09] to-black py-12 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    {/* Left Side: Fixed Header */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                    <div className="max-w-lg">
                        {/* Badge */}
                        <div className="inline-block mb-6">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                <TrendingUp className="w-3 h-3 text-white/40" />
                                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-medium">Portfolio</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-tight mb-6">
                            Recent Work &<br />
                            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                Success Stories
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-base text-white/50 leading-relaxed mb-4 lg:mb-12">
                            Delivering measurable results across operations, automation, and strategic growth initiatives for businesses worldwide.
                        </p>

                        {/* CTA */}
                        <div className="mt-8">
                            <Link
                                to="/portfolio"
                                className="group inline-flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <span className="text-sm font-medium text-white tracking-wide">View All Projects</span>
                                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </div>
                        </div>
                    </div>

                    {/* Right Side: Scrolling List */}
                    <div className="lg:col-span-7">
                        <div className="">
                            {works.map((work, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group py-6 lg:py-12 border-b border-white/10 last:border-0 relative"
                                >
                                    {/* Project Card */}
                                    <div className="relative">
                                        {/* Number Badge */}
                                        <div className="absolute -left-2 top-0 lg:-left-6">
                                            <span className="text-5xl font-light text-white/[0.05] group-hover:text-white/10 transition-all">
                                                {work.id}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="relative space-y-6 pl-12 lg:pl-16">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-4">
                                                <h3 className="text-xl lg:text-2xl xl:text-3xl font-light text-white leading-tight group-hover:text-white/80 transition-colors">
                                                    {work.title}
                                                </h3>
                                                <div className="flex-shrink-0">
                                                    <span className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] tracking-wider text-white/50 uppercase">
                                                        {work.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-white/50 leading-relaxed max-w-2xl">
                                                {work.description}
                                            </p>

                                            {/* Result Badge */}
                                            <div className="flex items-center space-x-3 pt-2">
                                                <div className="flex items-center space-x-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-lg">
                                                    <TrendingUp className="w-3 h-3 text-white/40" />
                                                    <span className="text-xs text-white/60 font-medium">{work.result}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSummary;
