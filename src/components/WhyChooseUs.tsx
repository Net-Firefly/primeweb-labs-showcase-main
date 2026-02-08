import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

const achievements = [
    {
        icon: Award,
        value: "15+",
        label: "Industry Awards",
        description: "Recognized for excellence",
    },
    {
        icon: Users,
        value: "500K+",
        label: "Happy Users",
        description: "Across all platforms",
    },
    {
        icon: Zap,
        value: "99.9%",
        label: "Uptime SLA",
        description: "Enterprise reliability",
    },
    {
        icon: TrendingUp,
        value: "24/7",
        label: "Support",
        description: "Always here to help",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="section-padding bg-muted/20 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Why Choose <span className="gradient-text">PrimeWeb Labs</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We don't just build websites—we create digital experiences that drive
                        real business results
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {achievements.map((achievement, i) => (
                        <motion.div
                            key={achievement.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="glass-card gradient-border p-6 text-center group cursor-default"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <achievement.icon className="h-7 w-7 text-primary" />
                            </div>
                            <div className="font-display font-bold text-3xl mb-2 gradient-text">
                                {achievement.value}
                            </div>
                            <h3 className="font-semibold mb-1">{achievement.label}</h3>
                            <p className="text-xs text-muted-foreground">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Value Propositions */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Client-First Approach",
                            description:
                                "Your success is our success. We work closely with you at every step, ensuring your vision becomes reality.",
                        },
                        {
                            title: "Cutting-Edge Tech",
                            description:
                                "We leverage the latest technologies and best practices to build future-proof solutions that scale with your business.",
                        },
                        {
                            title: "Proven Track Record",
                            description:
                                "From startups to enterprises, we've delivered 150+ successful projects with measurable impact and ROI.",
                        },
                    ].map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="font-display font-semibold text-xl mb-3">
                                {value.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
