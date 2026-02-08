import { motion } from "framer-motion";

const brands = [
    "Triple Kay Cutts and Spa",
    "NovaPay Financial",
    "Greenleaf Markets",
    "CloudSync Tech",
    "HealthTrack",
    "UrbanEats",
    "FinFlow Analytics",
    "EduLearn",
];

const BrandsMarquee = () => {
    return (
        <section className="py-12 bg-muted/10 border-y border-border/50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        Trusted by Leading Brands
                    </p>
                </motion.div>

                {/* Scrolling brands - duplicated for seamless loop */}
                <div className="relative">
                    <div className="flex animate-marquee">
                        {[...brands, ...brands].map((brand, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex-shrink-0 mx-8"
                            >
                                <div className="text-xl font-semibold text-muted-foreground/40 hover:text-foreground transition-colors whitespace-nowrap">
                                    {brand}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsMarquee;
