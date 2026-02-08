import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    Rocket,
    Shield,
    Zap,
    Palette,
    Code2,
    Globe,
    Lock,
    X,
    Check,
} from "lucide-react";
import { useState } from "react";

interface Feature {
    icon: any;
    title: string;
    description: string;
    detailedDescription: string;
    benefits: string[];
    technologies?: string[];
}

const features: Feature[] = [
    {
        icon: Rocket,
        title: "Lightning Fast",
        description: "Optimized performance with sub-second load times",
        detailedDescription: "We engineer websites for speed. Every millisecond counts in user experience and conversions. Our optimization techniques ensure your site loads in under a second, keeping visitors engaged and search engines happy. We implement advanced caching strategies, code splitting, lazy loading, and image optimization to deliver blazing-fast performance across all devices and network conditions.",
        benefits: [
            "Sub-second page load times for optimal user experience",
            "Optimized images with next-gen formats (WebP, AVIF)",
            "Code splitting and lazy loading for efficient resource delivery",
            "CDN integration for global content delivery",
            "Performance monitoring and continuous optimization",
            "Minimal JavaScript bundles for faster parsing and execution",
            "Server-side rendering (SSR) for instant first paint",
            "Progressive Web App (PWA) capabilities for offline functionality"
        ],
        technologies: ["Vite", "React", "Next.js", "Cloudflare CDN", "WebP/AVIF", "Service Workers"]
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Enterprise-grade security and 99.9% uptime",
        detailedDescription: "Security isn't optional—it's fundamental. We implement industry-leading security practices to protect your data and your users. From SSL/TLS encryption to regular security audits, we ensure your digital assets are safe from threats. Our infrastructure is designed for reliability with redundant systems, automated backups, and 24/7 monitoring to guarantee 99.9% uptime.",
        benefits: [
            "SSL/TLS encryption for all data transmission",
            "Regular security audits and vulnerability scanning",
            "DDoS protection and firewall configuration",
            "Automated daily backups with point-in-time recovery",
            "99.9% uptime SLA with redundant infrastructure",
            "Secure authentication and authorization systems",
            "OWASP Top 10 security compliance",
            "24/7 monitoring and instant threat detection",
            "Data encryption at rest and in transit"
        ],
        technologies: ["SSL/TLS", "WAF", "Auth0", "AWS Shield", "Cloudflare Security"]
    },
    {
        icon: Zap,
        title: "Modern Stack",
        description: "Built with the latest technologies and frameworks",
        detailedDescription: "Stay ahead with cutting-edge technology. We build with modern frameworks and tools that ensure your website is future-proof, maintainable, and scalable. Our tech stack includes React, TypeScript, Next.js, and the latest web standards, giving you access to the best features and community support. We stay updated with the latest developments to deliver solutions that leverage the most advanced capabilities.",
        benefits: [
            "React & Next.js for powerful, scalable applications",
            "TypeScript for type-safe, maintainable code",
            "Server-side rendering (SSR) and static generation (SSG)",
            "Modern CSS with Tailwind for rapid, consistent styling",
            "GraphQL or REST APIs for flexible data management",
            "Microservices architecture for independent scaling",
            "Containerization with Docker for consistent deployments",
            "CI/CD pipelines for automated testing and deployment",
            "Cloud-native architecture (AWS, Vercel, Azure)"
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Docker", "Kubernetes"]
    },
    {
        icon: Palette,
        title: "Beautiful Design",
        description: "Pixel-perfect interfaces that users love",
        detailedDescription: "Design is more than aesthetics—it's about creating intuitive, delightful experiences that drive conversions. Our design process combines user research, psychology, and artistic vision to craft interfaces that are not only beautiful but highly functional. Every pixel is intentional, every interaction is smooth, and every element serves a purpose. We create designs that reflect your brand identity while exceeding user expectations.",
        benefits: [
            "Custom UI/UX design tailored to your brand",
            "Mobile-first responsive design for all screen sizes",
            "Accessibility compliance (WCAG 2.1 AA standards)",
            "Consistent design system for brand cohesion",
            "Micro-interactions and smooth animations",
            "User-tested interfaces for optimal usability",
            "Dark mode and theme customization options",
            "Typography and color theory expertise",
            "Figma/Adobe XD prototypes before development"
        ],
        technologies: ["Figma", "Framer Motion", "Tailwind CSS", "CSS3", "SVG Animations"]
    },
    {
        icon: Code2,
        title: "Clean Code",
        description: "Maintainable, scalable, and well-documented",
        detailedDescription: "Quality code is the foundation of long-term success. We write clean, readable, and efficient code that follows industry best practices and coding standards. Our code is structured for scalability, thoroughly documented, and easy to maintain. We use modern development practices including test-driven development (TDD), code reviews, and continuous integration to ensure the highest quality. This means future developers can easily understand, modify, and extend your codebase.",
        benefits: [
            "SOLID principles and design patterns for robust architecture",
            "Comprehensive code documentation and inline comments",
            "Automated testing (unit, integration, and e2e)",
            "Code reviews and pair programming for quality assurance",
            "Version control with Git and meaningful commit messages",
            "Modular, reusable components for faster development",
            "ESLint and Prettier for consistent code formatting",
            "Technical debt management and refactoring",
            "Clear project structure and file organization"
        ],
        technologies: ["Git", "ESLint", "Prettier", "Jest", "Testing Library", "TypeScript"]
    },
    {
        icon: Globe,
        title: "SEO Optimized",
        description: "Built for search engines and social sharing",
        detailedDescription: "Get found online. We build websites with SEO at the core, not as an afterthought. From semantic HTML and meta tags to structured data and Core Web Vitals optimization, we ensure your site ranks well in search results. Our SEO strategy includes technical optimization, content strategy, and social media integration to maximize your online visibility and drive organic traffic.",
        benefits: [
            "Semantic HTML5 markup for better indexing",
            "Optimized meta tags, titles, and descriptions",
            "Structured data (Schema.org) for rich snippets",
            "XML sitemaps and robots.txt configuration",
            "Open Graph and Twitter Card integration",
            "Core Web Vitals optimization (LCP, FID, CLS)",
            "Mobile-friendly and fast loading for SEO rankings",
            "Clean URLs and proper heading hierarchy",
            "Image alt tags and accessibility for screen readers",
            "Google Analytics and Search Console integration"
        ],
        technologies: ["Schema.org", "Google Analytics", "Google Search Console", "Sitemap XML"]
    },
    {
        icon: Lock,
        title: "GDPR Compliant",
        description: "Privacy-first approach to data handling",
        detailedDescription: "Privacy is a right, not a privilege. We build with privacy at the forefront, ensuring full compliance with GDPR, CCPA, and other data protection regulations. Our approach includes transparent data collection, user consent management, secure data storage, and user rights implementation (access, deletion, portability). We help you build trust with your users by respecting their privacy and giving them control over their data.",
        benefits: [
            "Cookie consent management with customizable banners",
            "Privacy policy and terms of service integration",
            "Data minimization—collect only what's necessary",
            "User rights implementation (access, delete, export data)",
            "Transparent data processing and usage disclosure",
            "Secure data storage with encryption",
            "Third-party service audit for compliance",
            "Regular compliance reviews and updates",
            "Data breach notification procedures",
            "Age verification for sensitive content"
        ],
        technologies: ["Cookie Consent Tools", "Encryption", "Privacy APIs"]
    },
    {
        icon: Sparkles,
        title: "AI-Powered",
        description: "Enhanced with intelligent features and automation",
        detailedDescription: "Leverage the power of artificial intelligence to create smarter, more engaging experiences. We integrate AI capabilities including chatbots, recommendation engines, content generation, and intelligent search. Our AI solutions learn from user behavior to provide personalized experiences, automate routine tasks, and deliver insights that drive decision-making. From natural language processing to machine learning models, we implement AI that adds real value to your business.",
        benefits: [
            "AI chatbots for 24/7 customer support and engagement",
            "Personalized content recommendations based on behavior",
            "Intelligent search with natural language processing",
            "Automated content generation and optimization",
            "Predictive analytics for business insights",
            "Image recognition and processing capabilities",
            "Sentiment analysis for customer feedback",
            "A/B testing automation for conversion optimization",
            "Fraud detection and anomaly detection systems",
            "Voice interface integration (Alexa, Google Assistant)"
        ],
        technologies: ["OpenAI API", "TensorFlow", "Natural Language Processing", "Machine Learning", "Claude AI"]
    },
];

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

    return (
        <section className="section-padding bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Powerful <span className="gradient-text">Features</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Everything you need for a successful digital presence. Click any feature to learn more.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            onClick={() => setSelectedFeature(feature)}
                            className="glass-card p-6 group cursor-pointer border border-border/50 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                            <p className="text-xs text-primary mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                Click to learn more →
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Feature Detail Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedFeature(null)}
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass-card gradient-border max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card border border-border/50 hover:border-primary/50 flex items-center justify-center transition-colors group"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                            </button>

                            {/* Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                                    <selectedFeature.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                                        {selectedFeature.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {selectedFeature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Detailed Description */}
                            <div className="mb-6">
                                <p className="text-foreground/90 leading-relaxed">
                                    {selectedFeature.detailedDescription}
                                </p>
                            </div>

                            {/* Benefits */}
                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" />
                                    Key Benefits
                                </h4>
                                <ul className="space-y-3">
                                    {selectedFeature.benefits.map((benefit, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="flex items-start gap-3"
                                        >
                                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">
                                                {benefit}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            {selectedFeature.technologies && (
                                <div>
                                    <h4 className="font-semibold text-lg mb-4">
                                        Technologies We Use
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedFeature.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="px-3 py-1 rounded-full glass-card border border-primary/30 text-xs font-medium text-primary"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Features;
