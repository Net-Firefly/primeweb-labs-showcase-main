import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface Slide {
    id: number;
    title: string;
    client: string;
    category: string;
    description: string;
    image: string;
    stats: {
        label: string;
        value: string;
    }[];
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Triple Kay Cutts and Spa",
        client: "Triple Kay Cutts and Spa",
        category: "Barber & Spa Website",
        description: "Luxury barber and spa digital experience with seamless online booking, service galleries, and customer testimonials. Modern, elegant design that captures the essence of premium grooming.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=700&fit=crop",
        stats: [
            { label: "Bookings", value: "+220%" },
            { label: "Mobile Traffic", value: "85%" },
            { label: "Customer Rating", value: "4.9/5" },
        ],
    },
    {
        id: 2,
        title: "NovaPay Financial Platform",
        client: "NovaPay Inc",
        category: "Fintech Dashboard",
        description: "Revolutionary financial dashboard with real-time analytics, secure transactions, and advanced reporting capabilities.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop",
        stats: [
            { label: "Users", value: "50K+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Satisfaction", value: "4.9/5" },
        ],
    },
    {
        id: 3,
        title: "Greenleaf E-commerce",
        client: "Greenleaf Markets",
        category: "Online Store",
        description: "High-converting e-commerce platform with seamless checkout, inventory management, and customer analytics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=700&fit=crop",
        stats: [
            { label: "Revenue Boost", value: "+250%" },
            { label: "Conversion", value: "8.5%" },
            { label: "Products", value: "5K+" },
        ],
    },
    {
        id: 4,
        title: "CloudSync Platform",
        client: "CloudSync Technologies",
        category: "SaaS Application",
        description: "Enterprise-grade cloud storage and collaboration platform with real-time synchronization and team features.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=700&fit=crop",
        stats: [
            { label: "Files Stored", value: "10M+" },
            { label: "Daily Active", value: "100K+" },
            { label: "Speed", value: "5x faster" },
        ],
    },
];

const ProjectCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = slides.length - 1;
            if (nextIndex >= slides.length) nextIndex = 0;
            return nextIndex;
        });
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background gradient effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Featured <span className="gradient-text">Success Stories</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Explore our latest projects and see the impact we've made
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="absolute inset-0"
                            >
                                <div className="relative h-full glass-card overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={slides[currentIndex].image}
                                            alt={slides[currentIndex].title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex items-center">
                                        <div className="max-w-2xl p-8 md:p-16">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-primary/30 mb-4">
                                                    <Star className="h-3 w-3 text-primary fill-primary" />
                                                    <span className="text-xs font-medium text-primary">
                                                        {slides[currentIndex].category}
                                                    </span>
                                                </div>

                                                <h3 className="font-display font-bold text-3xl md:text-5xl mb-3">
                                                    {slides[currentIndex].title}
                                                </h3>

                                                <p className="text-sm text-muted-foreground mb-6">
                                                    Client: {slides[currentIndex].client}
                                                </p>

                                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                                    {slides[currentIndex].description}
                                                </p>

                                                {/* Stats */}
                                                <div className="grid grid-cols-3 gap-6">
                                                    {slides[currentIndex].stats.map((stat, i) => (
                                                        <motion.div
                                                            key={stat.label}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.3 + i * 0.1 }}
                                                        >
                                                            <div className="font-display font-bold text-2xl md:text-3xl gradient-text">
                                                                {stat.value}
                                                            </div>
                                                            <div className="text-xs text-muted-foreground mt-1">
                                                                {stat.label}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card border border-border/50 hover:border-primary/50 flex items-center justify-center group transition-all z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>

                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card border border-border/50 hover:border-primary/50 flex items-center justify-center group transition-all z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                    ? "w-8 bg-gradient-to-r from-primary to-accent"
                                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectCarousel;
