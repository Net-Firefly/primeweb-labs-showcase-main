import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { Check, X, ArrowRight, Zap, Shield, Globe, Smartphone, Search, Lock } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$3,000 - $8,000",
    description: "Perfect for small businesses and startups",
    features: [
      "5-10 page website",
      "Mobile responsive design",
      "Contact forms",
      "Basic SEO optimization",
      "1 month post-launch support",
      "CMS integration",
      "Social media integration",
      "Google Analytics setup"
    ],
    notIncluded: [
      "E-commerce functionality",
      "Custom API development",
      "Advanced animations"
    ],
    recommended: false
  },
  {
    name: "Professional",
    price: "$8,000 - $20,000",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Custom web application",
      "E-commerce capabilities",
      "Advanced integrations",
      "Custom animations",
      "Blog/CMS platform",
      "3 months support",
      "Performance optimization",
      "Security hardening",
      "Email marketing integration"
    ],
    notIncluded: [
      "Dedicated account manager",
      "Multi-language support"
    ],
    recommended: true
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    description: "For complex platforms and SaaS",
    features: [
      "Everything in Professional",
      "Complex web platforms",
      "Custom API development",
      "Advanced security",
      "Scalable architecture",
      "Dedicated team",
      "Priority support",
      "Custom integrations",
      "Multi-language support",
      "White-label solutions",
      "Ongoing maintenance",
      "SLA guarantees"
    ],
    notIncluded: [],
    recommended: false
  }
];

const serviceDetails = [
  {
    icon: Globe,
    title: "Web Development",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Python"],
    deliverables: [
      "Fully responsive website",
      "Cross-browser compatible",
      "SEO optimized",
      "Performance tested",
      "Source code & documentation"
    ],
    timeline: "4-12 weeks"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    technologies: ["Figma", "Adobe XD", "Framer", "Tailwind CSS"],
    deliverables: [
      "User research & personas",
      "Wireframes & prototypes",
      "High-fidelity designs",
      "Design system",
      "Interactive prototypes"
    ],
    timeline: "2-6 weeks"
  },
  {
    icon: Search,
    title: "SEO & Performance",
    technologies: ["Google Analytics", "Search Console", "Lighthouse", "GTmetrix"],
    deliverables: [
      "Technical SEO audit",
      "On-page optimization",
      "Performance tuning",
      "Schema markup",
      "Monthly reports"
    ],
    timeline: "Ongoing"
  },
  {
    icon: Zap,
    title: "E-commerce Solutions",
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    deliverables: [
      "Product catalog",
      "Payment gateway",
      "Inventory management",
      "Order tracking",
      "Admin dashboard"
    ],
    timeline: "6-16 weeks"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    technologies: ["SSL/TLS", "AWS", "Cloudflare", "Docker"],
    deliverables: [
      "Security audits",
      "Regular updates",
      "Backup systems",
      "Monitoring",
      "Bug fixes"
    ],
    timeline: "Ongoing"
  },
  {
    icon: Lock,
    title: "API Development",
    technologies: ["REST", "GraphQL", "Node.js", "PostgreSQL"],
    deliverables: [
      "Custom APIs",
      "Third-party integrations",
      "Documentation",
      "Rate limiting",
      "Authentication"
    ],
    timeline: "4-10 weeks"
  }
];

const guarantees = [
  "99.9% uptime guarantee",
  "Money-back guarantee if project requirements aren't met",
  "Free revisions during development phase",
  "Source code ownership",
  "GDPR & privacy compliance",
  "Post-launch support included"
];

const ServicesPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <Services />

        {/* Service Details */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                What You <span className="gradient-text">Get</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions with detailed deliverables for each service.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceDetails.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{service.title}</h3>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Deliverables:</p>
                    <ul className="space-y-1">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Timeline: <span className="text-foreground font-semibold">{service.timeline}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Transparent <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the package that fits your needs. All packages include quality assurance and testing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`glass-card p-8 relative ${tier.recommended ? 'gradient-border ring-2 ring-primary/50' : ''
                    }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-display font-bold text-2xl mb-2">{tier.name}</h3>
                    <p className="text-3xl font-bold gradient-text mb-2">{tier.price}</p>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {tier.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 opacity-40">
                        <X className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group ${tier.recommended
                    ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90'
                    : 'glass-card border border-border hover:border-primary/50'
                    }`}>
                    Get Started
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <Process />

        {/* Guarantees */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Our <span className="gradient-text">Guarantees</span>
              </h2>
              <p className="text-muted-foreground">
                We stand behind our work with concrete commitments.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">{guarantee}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />
      </div>
      <Footer />
    </div>
  </PageTransition>
);

export default ServicesPage;
