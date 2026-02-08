import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tech: string;
  category: string;
  image: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Tripple Kay Cutts and Spa",
    description: "Premium barber and spa website featuring online booking system, service showcase, gallery, and customer reviews. Elegant design reflecting luxury grooming and wellness services.",
    tech: "React · TypeScript · Tailwind · Framer Motion",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
    link: "#",
    featured: true,
  },
  {
    title: "NovaPay Dashboard",
    description: "Comprehensive fintech dashboard with real-time analytics, transaction monitoring, and advanced reporting features.",
    tech: "React · TypeScript · Chart.js · REST API",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Greenleaf E-commerce",
    description: "Full-featured online store with inventory management, payment processing, and customer analytics.",
    tech: "Next.js · Stripe · PostgreSQL · Tailwind",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "CloudSync Platform",
    description: "Cloud-based file synchronization platform with real-time collaboration and secure file sharing.",
    tech: "React · Node.js · AWS S3 · WebSocket",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    github: "#",
  },
  {
    title: "HealthTrack Mobile",
    description: "Fitness and health tracking mobile app with workout plans, nutrition tracking, and progress analytics.",
    tech: "React Native · Firebase · Redux",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    title: "UrbanEats Delivery",
    description: "Food delivery platform connecting restaurants with customers, featuring order tracking and payment integration.",
    tech: "Vue · Express · MongoDB · Socket.io",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    link: "#",
  },
  {
    title: "FinFlow Analytics",
    description: "Advanced financial analytics platform with data visualization, predictive modeling, and automated reporting.",
    tech: "React · D3.js · Python · TensorFlow",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "EduLearn LMS",
    description: "Learning management system for online education with course creation, student tracking, and assessment tools.",
    tech: "Next.js · Prisma · PostgreSQL · AWS",
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    link: "#",
  },
];

const categories = ["All", "Web Development", "E-commerce", "SaaS", "Mobile App", "Fintech"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            A showcase of projects we've brought to life with cutting-edge technology
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                  : "glass-card border border-border/50 hover:border-primary/50"
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              layout
              className="group relative rounded-xl overflow-hidden glass-card border border-border/50 hover:border-primary/50 transition-all"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-primary-foreground">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                      aria-label="View project"
                    >
                      <ExternalLink className="h-5 w-5 text-primary-foreground" />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full glass-card border border-border flex items-center justify-center"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground">{project.tech}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
