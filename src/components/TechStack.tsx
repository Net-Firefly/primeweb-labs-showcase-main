import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Cloud,
    Zap,
    Layers,
    Globe,
    Cpu,
    Lock,
    Smartphone,
    Workflow,
    Palette,
    GitBranch,
} from "lucide-react";

const techStack = [
    { icon: Code2, name: "React & Next.js", color: "text-cyan-400" },
    { icon: Zap, name: "TypeScript", color: "text-blue-400" },
    { icon: Layers, name: "Node.js", color: "text-green-400" },
    { icon: Palette, name: "Tailwind CSS", color: "text-sky-400" },
    { icon: Database, name: "PostgreSQL", color: "text-blue-500" },
    { icon: Database, name: "MongoDB", color: "text-green-500" },
    { icon: Cloud, name: "AWS & Cloud", color: "text-orange-400" },
    { icon: Workflow, name: "Docker", color: "text-blue-600" },
    { icon: GitBranch, name: "Git & CI/CD", color: "text-red-400" },
    { icon: Smartphone, name: "React Native", color: "text-purple-400" },
    { icon: Cpu, name: "GraphQL", color: "text-pink-400" },
    { icon: Lock, name: "Security First", color: "text-yellow-400" },
];

const TechStack = () => {
    return (
        <section className="section-padding bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Our <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        We use cutting-edge technologies to build exceptional digital
                        experiences
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {techStack.map((tech, i) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                            className="glass-card p-6 flex flex-col items-center justify-center gap-3 group cursor-default border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <tech.icon
                                className={`w-12 h-12 ${tech.color} transition-all duration-300 group-hover:scale-110`}
                            />
                            <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                                {tech.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-muted-foreground">
                        ...and many more technologies tailored to your project needs
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
