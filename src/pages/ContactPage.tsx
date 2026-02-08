import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle, Calendar, CheckCircle2 } from "lucide-react";

const offices = [
  {
    city: "New York",
    address: "123 Innovation Ave, Suite 400",
    state: "NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@primeweblabs.com",
    hours: "Mon-Fri: 9AM - 6PM EST"
  },
  {
    city: "San Francisco",
    address: "456 Tech Boulevard, Floor 12",
    state: "CA 94105",
    phone: "+1 (555) 987-6543",
    email: "sf@primeweblabs.com",
    hours: "Mon-Fri: 9AM - 6PM PST"
  },
  {
    city: "London",
    address: "789 Digital Street, Level 3",
    state: "EC1A 1BB, UK",
    phone: "+44 20 1234 5678",
    email: "uk@primeweblabs.com",
    hours: "Mon-Fri: 9AM - 5PM GMT"
  }
];

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our AI assistant Nova 24/7",
    action: "Start Chat",
    highlight: "Instant Response"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "hello@primeweblabs.com",
    action: "Send Email",
    highlight: "Response within 2 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+1 (555) 123-4567",
    action: "Call Now",
    highlight: "Mon-Fri 9AM-6PM EST"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation call",
    action: "View Calendar",
    highlight: "30-min free consultation"
  }
];

const faqs = [
  {
    question: "What is your typical response time?",
    answer: "We respond to all inquiries within 2 hours during business hours (Mon-Fri, 9AM-6PM EST). For urgent matters, you can call us directly or use our live chat feature for immediate assistance."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a complimentary 30-minute consultation to discuss your project requirements, provide initial recommendations, and give you a rough estimate. No commitment required."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use a combination of email updates, project management tools (like Asana or Jira), and regular video calls. You'll have a dedicated project manager as your main point of contact throughout the project."
  },
  {
    question: "What information should I prepare before contacting you?",
    answer: "Having a clear idea of your goals, target audience, desired features, timeline, and budget range is helpful. However, if you're not sure about any of these, we can help you figure it out during the consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We have clients across North America, Europe, and Asia. We're experienced in working across different time zones and can adjust our communication schedule to fit your needs."
  },
  {
    question: "What happens after I submit the contact form?",
    answer: "You'll receive an automated confirmation email immediately. Within 2 hours (business hours), a team member will reach out to schedule an initial consultation and discuss your project in detail."
  }
];

const trustIndicators = [
  "98% Client Satisfaction Rate",
  "50+ Projects Delivered",
  "Average 4.9★ Rating",
  "Money-Back Guarantee",
  "NDA & Confidentiality",
  "Flexible Payment Plans"
];

const ContactPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
                Let's Build Something <span className="gradient-text">Amazing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your digital presence? We're here to help turn your vision into reality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Choose Your <span className="gradient-text">Contact Method</span>
              </h2>
              <p className="text-muted-foreground">
                Pick the way that works best for you—we're flexible and responsive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, i) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center hover:glow-blue transition-shadow group cursor-pointer"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <method.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                    {method.highlight}
                  </span>
                  <button className="mt-4 w-full py-2 rounded-lg glass-card border border-border hover:border-primary/50 transition-colors text-sm font-medium">
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <Contact />

        {/* Office Locations */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Our <span className="gradient-text">Locations</span>
              </h2>
              <p className="text-muted-foreground">
                Global presence with local expertise. Visit us or schedule a virtual meeting.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-display font-bold text-2xl mb-4">{office.city}</h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm">{office.address}</p>
                        <p className="text-sm text-muted-foreground">{office.state}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-sm hover:text-primary transition-colors">
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-sm hover:text-primary transition-colors">
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.hours}</p>
                    </div>
                  </div>

                  <button className="mt-6 w-full py-2 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all text-sm font-semibold">
                    Get Directions
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="section-padding">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Why Clients <span className="gradient-text">Trust Us</span>
              </h2>
              <p className="text-muted-foreground">
                Your satisfaction and project success are our top priorities.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {trustIndicators.map((indicator, i) => (
                <motion.div
                  key={indicator}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card p-4 flex items-center gap-3 hover:glow-blue transition-shadow"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{indicator}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions about getting in touch and starting your project.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                    <span className="text-primary">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card gradient-border p-12"
            >
              <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fill out the form above, schedule a call, or just send us an email.
                We'll get back to you within 2 hours during business hours.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all font-semibold">
                  Start Your Project
                </button>
                <button className="px-8 py-3 rounded-lg glass-card border border-border hover:border-primary/50 transition-colors font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </PageTransition>
);

export default ContactPage;
