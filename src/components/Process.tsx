import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket, Check } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Discovery",
        description: "We dive deep into your vision, goals, and requirements",
        color: "from-yellow-500/20 to-orange-500/20",
    },
    {
        icon: Palette,
        title: "Design",
        description: "Crafting beautiful, intuitive interfaces that users love",
        color: "from-purple-500/20 to-pink-500/20",
    },
    {
        icon: Code,
        title: "Development",
        description: "Building robust, scalable solutions with clean code",
        color: "from-blue-500/20 to-cyan-500/20",
    },
    {
        icon: Check,
        title: "Testing",
        description: "Rigorous QA to ensure flawless performance",
        color: "from-green-500/20 to-emerald-500/20",
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "Deploying your project and celebrating success",
        color: "from-primary/20 to-accent/20",
    },
];

const Process = () => {
    return (
        <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Our <span className="gradient-text">Process</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        A proven workflow that delivers exceptional results
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line - hidden on mobile */}
                    <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Step number and icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="relative z-10 mb-4"
                                    >
                                        <div
                                            className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:border-primary/50 transition-colors`}
                                        >
                                            <step.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xs font-bold">
                                            {i + 1}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="font-display font-semibold text-lg mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-muted-foreground mb-4">
                        Continuous communication and your feedback guide every step
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
