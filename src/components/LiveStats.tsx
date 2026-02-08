import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Stat {
    value: number;
    suffix: string;
    label: string;
    speed: number;
}

const stats: Stat[] = [
    { value: 24, suffix: "/7", label: "Support Available", speed: 100 },
    { value: 150, suffix: "+", label: "Projects Delivered", speed: 20 },
    { value: 500, suffix: "K+", label: "Lines of Code", speed: 5 },
    { value: 98, suffix: "%", label: "Client Satisfaction", speed: 30 },
];

const LiveStats = () => {
    const [counts, setCounts] = useState(stats.map(() => 0));

    useEffect(() => {
        const timers = stats.map((stat, index) => {
            const increment = stat.value / (2000 / stat.speed);
            return setInterval(() => {
                setCounts((prevCounts) => {
                    const newCounts = [...prevCounts];
                    if (newCounts[index] < stat.value) {
                        newCounts[index] = Math.min(
                            newCounts[index] + increment,
                            stat.value
                        );
                    }
                    return newCounts;
                });
            }, stat.speed);
        });

        return () => timers.forEach(clearInterval);
    }, []);

    return (
        <section className="py-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                                {Math.floor(counts[i])}
                                {stat.suffix}
                            </div>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LiveStats;
