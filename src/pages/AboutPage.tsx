import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award, TrendingUp, Globe2 } from "lucide-react";

const team = [
  {
    name: "Alex Rivera",
    role: "Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "10+ years building scalable web applications. Former tech lead at Fortune 500 companies."
  },
  {
    name: "Sarah Chen",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Award-winning UI/UX designer with a passion for creating intuitive, beautiful interfaces."
  },
  {
    name: "Marcus Johnson",
    role: "Senior Full-Stack Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Specializes in modern JavaScript frameworks and cloud architecture. AI & ML enthusiast."
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Ensuring seamless project delivery and client satisfaction with agile methodologies."
  }
];

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our success. We align our goals with yours and measure our performance by your results."
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of the curve, constantly learning and implementing the latest technologies and best practices."
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We believe in transparent communication and working together as partners, not just service providers."
  },
  {
    icon: Award,
    title: "Quality Obsessed",
    description: "We never compromise on quality. Every line of code, every pixel, every interaction is crafted with care."
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "We're committed to continuous improvement, both for ourselves and for the clients we serve."
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description: "We build for the world, with accessibility, internationalization, and inclusivity at our core."
  }
];

const milestones = [
  { year: "2019", event: "Founded PrimeWeb Labs", description: "Started with a vision to build better web experiences" },
  { year: "2020", event: "Reached 25 Clients", description: "Growing our portfolio across diverse industries" },
  { year: "2021", event: "Launched AI Division", description: "Integrating cutting-edge AI into web solutions" },
  { year: "2022", event: "50+ Projects Delivered", description: "Milestone achievement with 98% satisfaction rate" },
  { year: "2023", event: "International Expansion", description: "Serving clients across 3 continents" },
  { year: "2024", event: "Award Recognition", description: "Best Web Development Agency - Tech Innovation Awards" },
];

const AboutPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <About />

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="font-display font-bold text-2xl mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses of all sizes with exceptional digital solutions that drive growth,
                  enhance user experiences, and create lasting value. We're committed to making high-quality
                  web development accessible and impactful.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8"
              >
                <h3 className="font-display font-bold text-2xl mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted partner for businesses seeking to transform their digital presence.
                  We envision a future where every company, regardless of size, has access to world-class web
                  solutions that fuel innovation and growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Stats />

        {/* Core Values */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from how we work with clients to how we write code.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 hover:glow-blue transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Talented individuals passionate about creating exceptional digital experiences.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center group hover:glow-blue transition-shadow"
                >
                  <div className="relative mb-4 mx-auto w-32 h-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to industry recognition—here's how we've grown.
              </p>
            </motion.div>

            <div className="space-y-8 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-primary/0 before:via-primary/50 before:to-primary/0">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-20 group"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                  <div className="glass-card p-6">
                    <h3 className="font-semibold text-xl mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />
      </div>
      <Footer />
    </div>
  </PageTransition>
);

export default AboutPage;
