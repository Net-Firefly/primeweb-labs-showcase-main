import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProjectCarousel from "@/components/ProjectCarousel";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Award, ExternalLink, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Triple Kay Cutts and Spa",
    category: "Beauty & Wellness",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
    challenge: "Triple Kay needed a modern digital presence to match their premium barber and spa services. Their old website was outdated, not mobile-friendly, and lacked an online booking system.",
    solution: "We built a luxurious, mobile-first website with integrated booking system, service galleries, and customer review management. The site reflects their premium brand with smooth animations and elegant design.",
    results: [
      { metric: "220%", label: "Increase in online bookings" },
      { metric: "85%", label: "Mobile traffic" },
      { metric: "4.9★", label: "Customer rating" },
      { metric: "65%", label: "Reduced phone inquiries" }
    ],
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    testimonial: "PrimeWeb Labs transformed our business. The new website perfectly captures our luxury brand and the booking system has streamlined our operations completely.",
    client: "Kay Thompson, Owner",
    link: "#"
  },
  {
    title: "NovaPay Dashboard",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    challenge: "A fintech startup needed a secure, real-time payment dashboard that could handle high transaction volumes while maintaining enterprise-grade security.",
    solution: "Developed a scalable platform with real-time analytics, multi-currency support, and advanced security features. The dashboard provides instant insights into payment flows and trends.",
    results: [
      { metric: "$2M+", label: "Daily transactions processed" },
      { metric: "99.99%", label: "Uptime achieved" },
      { metric: "3.2s", label: "Average load time" },
      { metric: "50K+", label: "Active users" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    testimonial: "The team delivered a robust platform that handles our growing transaction volume flawlessly. Their attention to security and performance is exceptional.",
    client: "Michael Stevens, CTO",
    link: "#"
  },
  {
    title: "Greenleaf E-commerce",
    category: "Sustainable Retail",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    challenge: "An eco-friendly product retailer wanted to create an online store that reflected their sustainability values while providing a seamless shopping experience.",
    solution: "Built a beautiful e-commerce platform with product filtering, sustainable shipping options, carbon footprint calculator, and a loyalty rewards program.",
    results: [
      { metric: "180%", label: "Conversion rate increase" },
      { metric: "4.8★", label: "Average product rating" },
      { metric: "$350K", label: "First year revenue" },
      { metric: "12K+", label: "Products sold" }
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "Framer Motion"],
    testimonial: "Our online store is now our biggest revenue channel. The sustainable features resonate with our customers and the checkout process is incredibly smooth.",
    client: "Emma Rodriguez, Founder",
    link: "#"
  }
];

const stats = [
  { icon: TrendingUp, number: "150%", label: "Average ROI Increase" },
  { icon: Users, number: "50+", label: "Happy Clients" },
  { icon: Zap, number: "99.9%", label: "Uptime Guarantee" },
  { icon: Award, number: "98%", label: "Satisfaction Rate" }
];

const industries = [
  "E-commerce & Retail",
  "Healthcare & Wellness",
  "Financial Services",
  "SaaS & Technology",
  "Education & E-learning",
  "Real Estate",
  "Food & Beverage",
  "Beauty & Lifestyle",
  "Non-Profit Organizations",
  "Professional Services"
];

const PortfolioPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Featured Projects Carousel */}
        <ProjectCarousel />

        {/* Portfolio Grid */}
        <Portfolio />

        {/* Success Stats */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Proven <span className="gradient-text">Results</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We measure our success by the impact we create for our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="font-display font-bold text-4xl gradient-text mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Featured <span className="gradient-text">Case Studies</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Deep dive into how we've helped businesses transform their digital presence.
              </p>
            </motion.div>

            <div className="space-y-20">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                          {study.category}
                        </span>
                        <a href={study.link} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </a>
                      </div>

                      <h3 className="font-display font-bold text-3xl mb-4">{study.title}</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-2">THE CHALLENGE</h4>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-2">THE SOLUTION</h4>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-3">TECHNOLOGIES USED</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 rounded-full glass-card border border-primary/30 text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="glass-card p-4 text-center">
                            <div className="font-display font-bold text-2xl gradient-text mb-1">
                              {result.metric}
                            </div>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      <div className="glass-card p-6 border-l-4 border-primary">
                        <p className="text-muted-foreground italic mb-3">"{study.testimonial}"</p>
                        <p className="font-semibold text-sm">— {study.client}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Industries We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our diverse portfolio spans multiple industries, bringing specialized expertise to every project.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {industries.map((industry, i) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-4 text-center hover:glow-blue transition-shadow group"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium">{industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <Testimonials />
      </div>
      <Footer />
    </div>
  </PageTransition>
);

export default PortfolioPage;
