import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "How long does a typical project take?",
        answer:
            "Project timelines vary based on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.",
    },
    {
        question: "What is your development process?",
        answer:
            "We follow an agile development approach: Discovery & Planning → Design & Prototyping → Development → Testing & QA → Launch → Support. You'll receive regular updates and have opportunities to provide feedback throughout.",
    },
    {
        question: "Do you provide ongoing maintenance?",
        answer:
            "Yes! We offer flexible maintenance packages including security updates, performance optimization, content updates, and technical support to keep your digital presence running smoothly.",
    },
    {
        question: "Can you work with our existing tech stack?",
        answer:
            "Absolutely! While we specialize in modern frameworks like React and Next.js, we're experienced with various technologies and can integrate with or enhance your existing systems.",
    },
    {
        question: "What's included in your pricing?",
        answer:
            "Our quotes include design, development, testing, deployment, and initial training. We provide transparent pricing with no hidden fees. Hosting and third-party services are typically billed separately.",
    },
    {
        question: "Do you sign NDAs?",
        answer:
            "Yes, we're happy to sign Non-Disclosure Agreements to protect your intellectual property and confidential information. Client confidentiality is a top priority for us.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section-padding">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Got questions? We've got answers.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-card border border-border/50 hover:border-primary/50 transition-colors overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left group"
                            >
                                <span className="font-semibold pr-8">{faq.question}</span>
                                <Plus
                                    className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-45" : ""
                                        }`}
                                />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="px-6 pb-4 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
