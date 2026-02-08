import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import QuoteBooking from "@/components/QuoteBooking";
import { motion } from "framer-motion";
import { Calculator, Sparkles } from "lucide-react";

const QuotePage = () => {
    return (
        <PageTransition>
            <div className="min-h-screen bg-background">
                <Navbar />

                <main className="pt-20">
                    {/* Hero Section */}
                    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <Calculator className="h-10 w-10 text-primary" />
                                    <h1 className="font-display font-bold text-4xl md:text-6xl">
                                        Get Your Custom <span className="gradient-text">Quote</span>
                                    </h1>
                                </div>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
                                    Tell us about your project and receive a detailed proposal within 2 hours during business hours.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                    <Sparkles className="h-4 w-4 text-primary" />
                                    <span>No commitment required • Free consultation included</span>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Quote Form */}
                    <QuoteBooking />

                    {/* Trust Badges */}
                    <section className="section-padding bg-muted/30">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-8 text-center"
                            >
                                <h3 className="font-display font-bold text-2xl mb-6">Why Choose PrimeWeb?</h3>
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                                            <Calculator className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Transparent Pricing</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Clear, upfront pricing with no hidden fees or surprises
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                                            <Sparkles className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Fast Response</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Get your detailed proposal within 2 hours on business days
                                        </p>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                                            <Calculator className="h-6 w-6 text-primary" />
                                        </div>
                                        <h4 className="font-semibold mb-2">Expert Consultation</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Free 30-minute consultation to discuss your project needs
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default QuotePage;
