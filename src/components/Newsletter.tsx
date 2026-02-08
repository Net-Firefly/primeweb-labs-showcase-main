import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail("");
            }, 3000);
        }
    };

    return (
        <section className="section-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-2xl glass-card gradient-border p-12 md:p-16 text-center"
                >
                    {/* Background gradient effects */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse-glow [animation-delay:1.5s]" />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-6"
                        >
                            <Mail className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Stay Updated</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="font-display font-bold text-3xl md:text-4xl mb-4"
                        >
                            Get the Latest{" "}
                            <span className="gradient-text">Web Development</span> Insights
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-muted-foreground mb-8 max-w-2xl mx-auto"
                        >
                            Join 5,000+ developers and business owners receiving monthly tips,
                            case studies, and exclusive offers straight to your inbox.
                        </motion.p>

                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="max-w-md mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="flex-1 px-5 py-4 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={subscribed}
                                    className="px-6 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {subscribed ? (
                                        "Subscribed! ✓"
                                    ) : (
                                        <>
                                            Subscribe
                                            <ArrowRight className="h-4 w-4" />
                                        </>
                                    )}
                                </motion.button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-4">
                                No spam, unsubscribe anytime. We respect your privacy.
                            </p>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
