import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Palette,
  ShoppingCart,
  Plug,
  Wrench,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  serviceId: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom-built, performant websites and web applications using modern frameworks and best practices.",
    serviceId: "web-dev",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Stunning interfaces and seamless user experiences that convert visitors into loyal customers.",
    serviceId: "ui-ux",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with payment integrations, inventory management, and analytics.",
    serviceId: "ecommerce",
  },
  {
    icon: Plug,
    title: "API & System Integration",
    description:
      "Connect your tools and automate workflows with robust API development and third-party integrations.",
    serviceId: "api",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Ongoing support, updates, and optimization to keep your digital presence running smoothly.",
    serviceId: "maintenance",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Services = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    // Store the selected service in sessionStorage
    sessionStorage.setItem('preSelectedService', serviceId);

    // Navigate to the quote page
    navigate('/quote');
  };

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end digital solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              onClick={() => handleServiceClick(service.serviceId)}
              className="glass-card gradient-border p-8 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <service.icon
                  size={24}
                  className="text-primary group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Get a Quote</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
