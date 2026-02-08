import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc",
        content:
            "PrimeWeb Labs transformed our vision into reality. Their attention to detail and technical expertise is unmatched. Our new platform has exceeded all expectations!",
        rating: 5,
        avatar: "SJ",
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        company: "InnovateCo",
        content:
            "Working with PrimeWeb Labs was an absolute pleasure. They delivered a stunning, high-performance application ahead of schedule. Highly recommended!",
        rating: 5,
        avatar: "MC",
    },
    {
        name: "Emily Rodriguez",
        role: "Founder",
        company: "GreenEarth",
        content:
            "The team's creativity and problem-solving skills are outstanding. They turned our complex requirements into an elegant, user-friendly solution.",
        rating: 5,
        avatar: "ER",
    },
];

const Testimonials = () => {
    return (
        <section className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Don't just take our word for it - hear from our satisfied clients
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card gradient-border p-6 group hover:scale-105 transition-transform relative"
                        >
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-4 w-4 fill-accent text-accent"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-semibold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-sm">{testimonial.name}</p>
                                    <p className="text-xs text-muted-foreground">
                                        {testimonial.role} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
