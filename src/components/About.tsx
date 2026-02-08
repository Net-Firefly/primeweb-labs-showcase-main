import { motion } from "framer-motion";
import { Zap, Code2, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Innovation",
    text: "We push boundaries with cutting-edge technologies and creative solutions.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    text: "Maintainable, scalable, and well-documented codebases that stand the test of time.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    text: "Blazing-fast load times and optimized experiences across every device.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
              About <span className="gradient-text">PrimeWeb Labs</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're a modern digital lab obsessed with building premium web
              experiences. From startups to established brands, we partner with
              ambitious teams to transform ideas into performant, beautiful
              digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach blends engineering rigor with design intuition —
              delivering solutions that look incredible, run fast, and scale
              effortlessly.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card p-6 flex gap-5 items-start group hover:glow-blue transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <pillar.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
