import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
            </div>

            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass-card gradient-border p-12 text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                            <Sparkles className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">Ready to get started?</span>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="font-display font-bold text-3xl md:text-5xl mb-4"
                    >
                        Let's Build Something{" "}
                        <span className="gradient-text">Amazing</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
                    >
                        Transform your ideas into powerful digital experiences. Let's discuss
                        your project and create something extraordinary together.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="/services#get-quote">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2 group"
                            >
                                <Calculator className="h-5 w-5" />
                                Get a Quote
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-lg glass-card gradient-border font-medium inline-flex items-center gap-2"
                            >
                                Contact Us
                            </motion.button>
                        </Link>

                        <Link to="/portfolio">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-lg glass-card border border-border hover:border-primary/50 transition-colors font-medium inline-flex items-center gap-2"
                            >
                                View Our Work
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
