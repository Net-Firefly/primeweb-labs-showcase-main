import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Lightbulb, TrendingUp, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
    id: string;
    text: string;
    sender: "user" | "nova";
    timestamp: Date;
    suggestions?: string[];
}

interface ConversationContext {
    topics: string[];
    userIntent: string;
    previousQuestions: string[];
    userInterests: Set<string>;
}

const NovaAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Hey there! 👋 I'm Nova, your advanced AI assistant powered by cutting-edge natural language processing. I'm here to be your personal guide through PrimeWeb Labs!\n\nI can help you with:\n✨ Exploring our services & capabilities\n💼 Reviewing our portfolio & past projects\n💡 Understanding our technology stack\n📊 Getting project estimates & timelines\n🚀 Learning web development best practices\n\nWhat would you like to discover today?",
            sender: "nova",
            timestamp: new Date(),
            suggestions: ["Show me your portfolio", "What services do you offer?", "Tell me about Triple Kay", "How much does a website cost?"]
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [context, setContext] = useState<ConversationContext>({
        topics: [],
        userIntent: "",
        previousQuestions: [],
        userInterests: new Set(),
    });
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    // Advanced AI response system with context awareness
    const getNovaResponse = (userMessage: string, conversationContext: ConversationContext): { text: string; suggestions?: string[] } => {
        const msg = userMessage.toLowerCase();
        const words = msg.split(/\s+/);

        // Update context
        conversationContext.previousQuestions.push(msg);

        // Sentiment detection
        const isQuestion = msg.includes("?") || msg.startsWith("how") || msg.startsWith("what") || msg.startsWith("why") || msg.startsWith("when") || msg.startsWith("where") || msg.startsWith("can") || msg.startsWith("do you");
        const isGreeting = /^(hi|hello|hey|yo|sup|greetings|good (morning|afternoon|evening))/.test(msg);
        const isPositive = /thank|thanks|awesome|great|perfect|excellent|love|amazing|wonderful/.test(msg);
        const isNegative = /bad|terrible|awful|hate|disappointed|frustrated|confused/.test(msg);

        // Enhanced pattern matching with synonyms
        const patterns = {
            notFound: /(404|lost|can't find|cannot find|page not found|broken link|error|missing page|where is|can'?t access|doesn'?t exist)/,
            quote: /(quote|booking|book|estimate|consultation|proposal|request a quote|get a quote|need a quote|pricing form|book service|schedule)/,
            tripleKay: /(triple|kay|barber|spa|cutts|salon|grooming|beauty)/,
            services: /(service|offer|provide|do you (do|offer|have)|capabilities|solutions|what can)/,
            portfolio: /(portfolio|project|work|example|case study|clients|previous|past work|showcase)/,
            contact: /(contact|reach|email|phone|call|message|talk|speak|discuss|get in touch)/,
            pricing: /(price|cost|fee|charge|rate|budget|expensive|afford|payment|quote|estimate)/,
            about: /(about|who are you|company|team|agency|business|founded)/,
            tech: /(tech|technology|stack|framework|language|tool|platform|code|programming|development)/,
            timeline: /(how long|timeline|duration|time|take|deliver|complete|finish|deadline)/,
            process: /(process|workflow|method|approach|how do you|steps|procedure)/,
            design: /(design|ui|ux|user interface|user experience|layout|visual|aesthetic|look)/,
            ecommerce: /(ecommerce|e-commerce|shop|store|online store|selling online|shopify|woocommerce)/,
            seo: /(seo|search engine|google|ranking|traffic|visibility|organic)/,
            performance: /(fast|speed|performance|load time|optimization|slow)/,
            mobile: /(mobile|responsive|phone|tablet|device|ios|android)/,
            security: /(security|secure|safe|https|ssl|hack|protect|encryption)/,
            ai: /(ai|artificial intelligence|machine learning|chatbot|automation|intelligent)/,
            help: /(help|assist|support|guide|show me|explain)/,
            features: /(feature|capability|functionality|what (can|does)|able to)/,
            comparison: /(better|vs|versus|compare|difference|why choose)/,
            maintenance: /(maintain|update|support|fix|bug|issue|problem)/,
            cms: /(cms|content management|wordpress|admin|dashboard|manage content)/,
            api: /(api|integration|connect|third party|external|plugin)/,
        };

        // Context-aware responses
        if (isPositive) {
            const responses = [
                "You're absolutely welcome! 😊 I'm thrilled I could help! Is there anything else you'd like to explore?",
                "Thank you for the kind words! 🌟 I'm here whenever you need assistance. What else can I help you discover?",
                "That's wonderful to hear! 💫 Feel free to ask me anything else about PrimeWeb Labs!",
            ];
            return {
                text: responses[Math.floor(Math.random() * responses.length)],
                suggestions: ["Tell me about your process", "Show pricing options", "Contact the team", "View more projects"]
            };
        }

        if (isNegative) {
            return {
                text: "I'm sorry to hear that! 😔 I'm here to help make things better. Could you tell me more about what's troubling you, or would you like me to connect you with our team directly?",
                suggestions: ["Talk to a human", "Contact information", "Start over"]
            };
        }

        // 404 / Lost Navigation Help
        if (patterns.notFound.test(msg)) {
            conversationContext.userInterests.add("navigation");
            return {
                text: "🧭 **Oops! Looks like you're lost!**\n\nNo worries—I'm here to help you find your way! Here's what I can do:\n\n**📍 Quick Navigation:**\n• **Home** - Return to our main page\n• **Services** - Explore what we offer\n• **Portfolio** - See our amazing work\n• **About** - Learn about our team\n• **Contact** - Get in touch with us\n\n**🔍 Common Issues:**\n• The page URL might be outdated or mistyped\n• The content may have moved to a new location\n• The link you followed might be broken\n\n**💡 What I Can Help With:**\n• Find the specific page you're looking for\n• Suggest relevant content based on what you need\n• Guide you to the right section of our site\n• Answer questions about any of our services\n\n**Need something specific?** Just tell me what you were trying to find, and I'll point you in the right direction! Or click one of the suggestions below to get started.\n\nRemember: There are no silly questions—I'm here 24/7 to help! 😊",
                suggestions: ["Go to Home", "View Services", "See Portfolio", "What are you looking for?"]
            };
        }

        // Quote & Booking Request
        if (patterns.quote.test(msg)) {
            conversationContext.userInterests.add("quote");
            conversationContext.userInterests.add("booking");
            return {
                text: "📋 **Get Your Custom Quote - Fast & Easy!**\n\nExcited to help you with a quote! We've made the process super simple:\n\n**🚀 Quick Quote Process:**\n\n**Step 1: Tell Us What You Need**\n• Select the services you're interested in\n• Web Development, UI/UX Design, E-commerce, etc.\n\n**Step 2: Share Project Details**\n• Project name and description\n• Budget range and timeline\n• Any specific requirements\n\n**Step 3: Your Contact Info**\n• Name, email, and phone number\n• Optional: Company and current website\n\n**Step 4: Submit & Relax**\n• Review everything\n• Submit your request\n• Get a response within 2 hours!\n\n**💰 What You'll Receive:**\n• Detailed project proposal\n• Custom pricing breakdown\n• Timeline with milestones\n• Technology recommendations\n• Free 30-minute consultation\n\n**⚡ Why Our Quote Process Is Better:**\n✅ No pressure - completely free\n✅ Detailed breakdown, not vague estimates\n✅ Fast response (2 hours during business hours)\n✅ Flexible payment options discussed\n✅ No hidden fees or surprises\n\n**Ready to get started?** Click the button below to access our quote form, or I can guide you through the services first if you'd like to explore more!\n\nThe form takes just 2-3 minutes to complete, and we'll take care of the rest! 🎯",
                suggestions: ["Go to Quote Form", "Tell me about pricing", "What services do you offer?", "See example projects"]
            };
        }

        // Triple Kay - Enhanced with more details
        if (patterns.tripleKay.test(msg)) {
            conversationContext.userInterests.add("portfolio");
            conversationContext.userInterests.add("triple-kay");
            return {
                text: "🌟 **Triple Kay Cutts and Spa** - One of our proudest achievements!\n\nWe crafted a luxurious digital experience for this premium barber and spa destination. Here's what we delivered:\n\n💈 **Premium Booking System** - Seamless online appointment scheduling with real-time availability\n📱 **Mobile-First Design** - 85% of their traffic comes from mobile devices\n📊 **Results** - 220% increase in online bookings, 4.9★ customer rating\n🎨 **Brand Identity** - Elegant design reflecting their luxury grooming services\n⚡ **Performance** - Lightning-fast load times under 1 second\n\nThis project showcases our ability to blend stunning design with practical business solutions. The result? A website that doesn't just look good—it drives real revenue!",
                suggestions: ["See more projects", "I need a booking system too", "What technologies did you use?", "Get a similar website"]
            };
        }

        // Services - Comprehensive with details
        if (patterns.services.test(msg)) {
            conversationContext.userInterests.add("services");
            return {
                text: "🚀 **Our Premium Digital Services:**\n\n**🌐 Web Development**\nCustom websites, web apps, and progressive web applications built with modern frameworks (React, Next.js, Vue)\n\n**🎨 UI/UX Design**\nUser-centered design that combines beauty with functionality. Figma prototypes, user testing, and design systems\n\n**🛒 E-commerce Solutions**\nFull-featured online stores with payment integration, inventory management, and conversion optimization\n\n**🔗 API Development & Integration**\nRESTful APIs, GraphQL, third-party integrations (Stripe, PayPal, Google, etc.)\n\n**📱 Mobile-Responsive Design**\nPixel-perfect experiences across all devices and screen sizes\n\n**🔍 SEO & Performance**\nTechnical SEO, Core Web Vitals optimization, and speed enhancements\n\n**🔒 Security & Maintenance**\nOngoing support, updates, security patches, and performance monitoring\n\n**🤖 AI Integration**\nChatbots, automation, and intelligent features (like me!)\n\nWhich service interests you most?",
                suggestions: ["E-commerce details", "UI/UX Design process", "API Integration capabilities", "Get a custom quote"]
            };
        }

        // Portfolio - Enhanced storytelling
        if (patterns.portfolio.test(msg)) {
            conversationContext.userInterests.add("portfolio");
            return {
                text: "💼 **Our Portfolio - Where Innovation Meets Results:**\n\nWe've delivered 50+ successful projects across diverse industries:\n\n🏆 **Featured Projects:**\n\n**Triple Kay Cutts and Spa** (Beauty & Wellness)\n• 220% booking increase, 4.9★ rating\n• Mobile-first luxury design\n\n**NovaPay Dashboard** (FinTech)\n• Real-time analytics & payment processing\n• Enterprise-grade security\n\n**Greenleaf E-commerce** (Sustainable Retail)\n• 180% conversion rate improvement\n• Eco-friendly brand storytelling\n\n**MediCare Portal** (Healthcare)\n• HIPAA-compliant patient management\n• Telemedicine integration\n\n**FitLife Tracker** (Health & Fitness)\n• AI-powered workout recommendations\n• Social fitness community\n\n**TechStart MVP** (SaaS Startup)\n• Rapid MVP development in 6 weeks\n• Scalable cloud architecture\n\n📊 **Our Track Record:**\n• 98% client satisfaction rate\n• Average 150% increase in conversions\n• 99.9% uptime guarantee\n\nWant to see specific project details or discuss how we can achieve similar results for you?",
                suggestions: ["Show me the carousel", "I need an e-commerce site", "Healthcare project details", "Start my project"]
            };
        }

        // Contact - Multiple channels
        if (patterns.contact.test(msg)) {
            conversationContext.userInterests.add("contact");
            return {
                text: "📞 **Let's Connect! Multiple Ways to Reach Us:**\n\n**Instant Response:**\n• Keep chatting with me right here - I'm available 24/7!\n\n**Direct Contact:**\n• 📧 Email: hello@primeweblabs.com\n• 📱 Phone: +1 (555) 123-4567\n• 💬 Contact Form: Scroll to the Contact section\n\n**Social Media:**\n• LinkedIn | Twitter | GitHub | Dribbble\n\n**Office Hours:**\n• Monday - Friday: 9 AM - 6 PM EST\n• Weekend: Emergency support available\n\n**Response Time:**\n• Email: Within 2 hours (business hours)\n• Phone: Immediate\n• Contact Form: Within 1 hour\n\nWould you like me to help you prepare information before reaching out, or do you want to send a message right now?",
                suggestions: ["Prepare project details", "Schedule a call", "Send a message", "Ask me more questions first"]
            };
        }

        // Pricing - Detailed and transparent
        if (patterns.pricing.test(msg)) {
            conversationContext.userInterests.add("pricing");
            return {
                text: "💰 **Transparent Pricing - Tailored to Your Needs:**\n\nEvery project is unique, so we offer custom quotes. Here's our general pricing framework:\n\n**🌟 Starter Package** ($3,000 - $8,000)\n• 5-10 page website\n• Mobile responsive\n• Contact forms\n• Basic SEO\n• 1 month support\n*Perfect for: Small businesses, portfolios, landing pages*\n\n**🚀 Professional Package** ($8,000 - $20,000)\n• Custom web application\n• Advanced features & integrations\n• CMS integration\n• E-commerce capabilities\n• 3 months support\n*Perfect for: Growing businesses, online stores*\n\n**⭐ Enterprise Package** ($20,000+)\n• Complex web platforms\n• Custom APIs & integrations\n• Advanced security\n• Scalable architecture\n• Ongoing maintenance\n*Perfect for: Large businesses, SaaS platforms*\n\n**💡 What's Included:**\n• No hidden fees - transparent pricing\n• Detailed project roadmap\n• Regular progress updates\n• Quality assurance testing\n• Training & documentation\n• Post-launch support\n\n**Payment Options:**\n• Flexible payment plans available\n• Milestone-based payments\n• Retainer agreements\n\nWant a customized quote for your specific project?",
                suggestions: ["Get a custom quote", "What's included in each package?", "Payment plans", "See portfolio examples"]
            };
        }

        // Technology Stack - Detailed explanation
        if (patterns.tech.test(msg)) {
            conversationContext.userInterests.add("technology");
            return {
                text: "🛠️ **Our Cutting-Edge Technology Stack:**\n\n**Frontend Excellence:**\n• ⚛️ React & Next.js - For blazing-fast, SEO-friendly apps\n• 📘 TypeScript - Type-safe, maintainable code\n• 🎨 Tailwind CSS - Modern, responsive styling\n• ✨ Framer Motion - Smooth, professional animations\n\n**Backend Power:**\n• 🟢 Node.js & Express - Scalable server architecture\n• 🐍 Python & Django - For data-intensive applications\n• 🔷 GraphQL & REST APIs - Flexible data management\n\n**Databases:**\n• 🍃 MongoDB - NoSQL for flexibility\n• 🐘 PostgreSQL - Robust relational database\n• 🔥 Firebase - Real-time capabilities\n\n**Cloud & DevOps:**\n• ☁️ AWS, Vercel, Azure - Enterprise hosting\n• 🐳 Docker & Kubernetes - Containerization\n• 🔄 CI/CD Pipelines - Automated deployments\n\n**AI & Advanced Features:**\n• 🤖 OpenAI API - AI integration (like me!)\n• 📊 TensorFlow - Machine learning\n• 🔍 Elasticsearch - Powerful search\n\n**Why This Matters:**\n✅ Future-proof technology\n✅ Faster development time\n✅ Better performance\n✅ Easier to scale\n✅ Strong community support\n\nWe choose the right tools for YOUR specific needs, not just what's trendy!",
                suggestions: ["Why React over WordPress?", "Tell me about your AI capabilities", "How do you ensure security?"]
            };
        }

        // Timeline - Realistic expectations
        if (patterns.timeline.test(msg)) {
            conversationContext.userInterests.add("timeline");
            return {
                text: "⏱️ **Project Timelines - What to Expect:**\n\n**⚡ Quick Launch** (2-4 weeks)\n• Simple business website (5-10 pages)\n• Landing page with forms\n• Portfolio website\n• Basic e-commerce (templates)\n\n**🚀 Standard Build** (6-10 weeks)\n• Custom web application\n• E-commerce with custom features\n• CMS integration\n• API development\n• Advanced animations\n\n**🏢 Enterprise Solution** (3-6 months)\n• Complex platforms (SaaS, marketplaces)\n• Multiple integrations\n• Custom admin dashboards\n• Extensive testing & security\n• Scalable architecture\n\n**📅 Our Process Timeline:**\n• Week 1-2: Discovery & planning\n• Week 2-4: Design & prototypes\n• Week 4-8: Development & features\n• Week 8-10: Testing & refinements\n• Week 10+: Launch & optimization\n\n**📊 What Affects Timeline:**\n• Project complexity\n• Custom features needed\n• Third-party integrations\n• Content availability\n• Feedback & revision cycles\n\n**💡 Fast-Track Available:**\nNeed it faster? We offer expedited development for urgent projects!\n\nWhat's your target launch date?",
                suggestions: ["I need it in 3 weeks", "Standard 8-week timeline works", "Tell me about your process", "What if I miss a deadline?"]
            };
        }

        // Process - Detailed workflow
        if (patterns.process.test(msg)) {
            conversationContext.userInterests.add("process");
            return {
                text: "🎯 **Our Battle-Tested Development Process:**\n\n**Phase 1: Discovery & Strategy** 🔍\n• Kickoff meeting to understand your goals\n• Competitor analysis & market research\n• User persona development\n• Technical requirements gathering\n• Project roadmap creation\n\n**Phase 2: Design & Prototyping** 🎨\n• Wireframes and site architecture\n• UI/UX design in Figma\n• Interactive prototypes\n• Design system creation\n• Client feedback & iterations\n\n**Phase 3: Development** ⚙️\n• Agile sprints (2-week cycles)\n• Daily progress updates\n• Version control with Git\n• Code reviews\n• Regular demo sessions\n\n**Phase 4: Testing & QA** 🧪\n• Cross-browser testing\n• Mobile responsiveness checks\n• Performance optimization\n• Security audits\n• User acceptance testing\n\n**Phase 5: Launch & Beyond** 🚀\n• Deployment to production\n• DNS & domain configuration\n• Analytics setup\n• SEO optimization\n• Team training\n• Post-launch support\n\n**✨ What Makes Us Different:**\n• Transparent communication\n• No surprises - always in the loop\n• Collaborative approach\n• Iterative improvements\n• Quality over speed (but we're still fast!)\n\nReady to start your project journey?",
                suggestions: ["Start my project", "How much client involvement?", "Can I make changes later?", "Show me a project example"]
            };
        }

        // Design - UI/UX focus
        if (patterns.design.test(msg)) {
            conversationContext.userInterests.add("design");
            return {
                text: "🎨 **Design Philosophy - Beauty Meets Functionality:**\n\n**Our Design Principles:**\n\n**1. User-Centered Design** 👥\n• Research-driven decisions\n• User journey mapping\n• Accessibility-first (WCAG 2.1 AA)\n• Intuitive navigation\n\n**2. Visual Excellence** ✨\n• Modern, clean aesthetics\n• Consistent brand identity\n• Micro-interactions & animations\n• Typography mastery\n• Color theory application\n\n**3. Responsive Design** 📱\n• Mobile-first approach\n• Fluid layouts for all devices\n• Touch-friendly interfaces\n• Fast loading on any connection\n\n**4. Conversion-Focused** 📊\n• Strategic CTAs placement\n• Reducing friction points\n• A/B testing capabilities\n• Analytics-driven improvements\n\n**Design Tools We Use:**\n• Figma - Collaborative design\n• Adobe Creative Suite\n• Prototyping tools\n• User testing platforms\n\n**What You Get:**\n• ✅ Complete design system\n• ✅ Interactive prototypes\n• ✅ Multiple revision rounds\n• ✅ Design source files\n• ✅ Style guide documentation\n\n**Real Results:**\nOur designs average 150% improvement in user engagement and 85% increase in conversion rates!\n\nWant to see our design portfolio?",
                suggestions: ["Show design examples", "What's your design process?", "Can I be involved in design?", "Mobile-first benefits"]
            };
        }

        // E-commerce specific
        if (patterns.ecommerce.test(msg)) {
            conversationContext.userInterests.add("ecommerce");
            return {
                text: "🛒 **E-commerce Solutions That Convert:**\n\n**Full-Featured Online Stores:**\n\n**Core Features:** 💳\n• Product catalog & categories\n• Shopping cart & checkout\n• Payment gateway integration (Stripe, PayPal, etc.)\n• SSL security & PCI compliance\n• Order management system\n• Email notifications\n\n**Advanced Capabilities:** 🚀\n• Multi-currency support\n• Inventory management\n• Shipping integrations (UPS, FedEx, USPS)\n• Discount codes & promotions\n• Customer accounts & wishlists\n• Product reviews & ratings\n• Abandoned cart recovery\n• Analytics & reporting\n\n**Platform Options:**\n• Custom-built solutions (most flexible)\n• Shopify integration\n• WooCommerce (WordPress)\n• Headless commerce (modern approach)\n\n**Optimization Features:** 📊\n• SEO for product pages\n• Fast loading speeds\n• Mobile-optimized checkout\n• Conversion rate optimization\n• A/B testing\n\n**Success Story:**\nGreenleaf E-commerce saw a 180% increase in conversions and 95% reduction in cart abandonment with our optimized checkout flow!\n\n**Investment:** $8,000 - $25,000\n(Depends on product count, features, and complexity)\n\nReady to start selling online?",
                suggestions: ["Get e-commerce quote", "Shopify vs Custom?", "See e-commerce examples", "Payment options"]
            };
        }

        // SEO focused
        if (patterns.seo.test(msg)) {
            conversationContext.userInterests.add("seo");
            return {
                text: "🔍 **SEO Mastery - Get Found on Google:**\n\n**Technical SEO Foundation:**\n• ✅ Semantic HTML5 structure\n• ✅ Optimized meta tags & titles\n• ✅ Schema markup (rich snippets)\n• ✅ XML sitemaps\n• ✅ Robots.txt configuration\n• ✅ Clean URL structure\n• ✅ Image alt tags\n• ✅ Mobile-friendly design\n\n**Performance SEO:**\n• ⚡ Core Web Vitals optimization\n• ⚡ Sub-second load times\n• ⚡ CDN integration\n• ⚡ Image optimization (WebP, lazy loading)\n• ⚡ Code minification\n\n**Content SEO:**\n• 📝 Keyword research & strategy\n• 📝 Content structure optimization\n• 📝 Internal linking strategy\n• 📝 Blog integration\n\n**Local SEO:**\n• 📍 Google My Business optimization\n• 📍 Local citations\n• 📍 Location-specific content\n\n**Analytics & Tracking:**\n• 📊 Google Analytics 4\n• 📊 Google Search Console\n• 📊 Keyword ranking monitoring\n• 📊 Conversion tracking\n\n**Results We Deliver:**\n• 1st page Google rankings\n• 200%+ organic traffic growth\n• Improved click-through rates\n• Higher domain authority\n\nSEO is built into every project from day one—not added as an afterthought!\n\nWant to rank higher on Google?",
                suggestions: ["SEO audit", "Content strategy", "How long for SEO results?", "Local SEO details"]
            };
        }

        // Performance optimization
        if (patterns.performance.test(msg)) {
            conversationContext.userInterests.add("performance");
            return {
                text: "⚡ **Lightning-Fast Performance - Every Millisecond Matters:**\n\n**Why Speed is Critical:**\n• 📉 53% of users abandon sites that take >3 seconds to load\n• 📈 1 second delay = 7% reduction in conversions\n• 🎯 Google uses speed as a ranking factor\n\n**Our Speed Optimization Arsenal:**\n\n**Frontend Optimization:** 🚀\n• Code splitting & lazy loading\n• Minimal JavaScript bundles\n• CSS optimization\n• Image compression (WebP, AVIF)\n• Browser caching strategies\n• Preloading critical resources\n\n**Backend Optimization:** ⚙️\n• Server-side rendering (SSR)\n• Static site generation (SSG)\n• API response caching\n• Database query optimization\n• CDN for global delivery\n\n**Monitoring & Testing:** 📊\n• Lighthouse scores (95+ )\n• Core Web Vitals tracking\n• Real user monitoring (RUM)\n• Performance budgets\n• Continuous optimization\n\n**Real Results:**\n• Triple Kay: <1 second load time\n• NovaPay: 99th percentile performance\n• Greenleaf: 85% improvement in speed\n\n**Performance Guarantees:**\n✅ Google PageSpeed score of 90+\n✅ <2 second load time on 4G\n✅ Optimized for Core Web Vitals\n\nSpeed isn't a feature—it's a foundation!",
                suggestions: ["Test my current site", "What's Core Web Vitals?", "Performance pricing", "See fast sites you built"]
            };
        }

        // Mobile/Responsive
        if (patterns.mobile.test(msg)) {
            conversationContext.userInterests.add("mobile");
            return {
                text: "📱 **Mobile-First Design - Your Users Are Mobile:**\n\n**The Mobile Reality:**\n• 📊 60%+ of web traffic is mobile\n• 📈 Google uses mobile-first indexing\n• 💡 Users expect native-app experiences\n\n**Our Mobile Approach:**\n\n**Design Philosophy:** 🎨\n• Mobile-first design process\n• Touch-friendly interfaces (44px+ tap targets)\n• Thumb-zone optimization\n• Simplified navigation\n• Fast-loading images\n\n**Technical Excellence:** ⚙️\n• Responsive layouts (not just mobile version)\n• Fluid typography & spacing\n• Optimized for all screen sizes (320px to 4K)\n• Works on iOS & Android\n• Cross-browser compatible\n\n**Performance:** ⚡\n• Lightweight mobile bundles\n• Progressive Web App (PWA) capabilities\n• Offline functionality\n• Add-to-home-screen support\n• Fast on slow connections\n\n**Testing Process:** 🧪\n• Real device testing (iPhone, Android, tablets)\n• Portrait & landscape modes\n• Different screen densities\n• Touch gesture support\n• Form usability on mobile\n\n**Results:**\n85% of Triple Kay's traffic is mobile with a 4.9★ mobile user rating!\n\nYour website will look stunning and work flawlessly on every device!",
                suggestions: ["Progressive Web Apps", "Mobile conversion optimization", "See mobile examples", "Test mobile site"]
            };
        }

        // Security
        if (patterns.security.test(msg)) {
            conversationContext.userInterests.add("security");
            return {
                text: "🔒 **Enterprise-Grade Security - Your Data is Safe:**\n\n**Security Foundations:**\n\n**Encryption & Protection:** 🛡️\n• SSL/TLS certificates (HTTPS)\n• Data encryption at rest & in transit\n• Secure authentication (OAuth, JWT)\n• CSRF & XSS protection\n• SQL injection prevention\n• DDoS mitigation\n\n**Secure Development:** 💻\n• OWASP Top 10 compliance\n• Security code reviews\n• Dependency vulnerability scanning\n• Regular security patches\n• Penetration testing\n\n**Privacy Compliance:** 📋\n• GDPR compliant\n• CCPA compliant\n• Cookie consent management\n• Privacy policy integration\n• Data minimization\n• Right to deletion support\n\n**Access Control:** 🔐\n• Multi-factor authentication (MFA)\n• Role-based access control (RBAC)\n• Session management\n• Brute-force protection\n• Secure password policies\n\n**Monitoring & Response:** 👁️\n• 24/7 security monitoring\n• Automated threat detection\n• Regular backups (daily)\n• Disaster recovery plans\n• Incident response procedures\n\n**Certifications & Standards:**\n✅ PCI DSS (for e-commerce)\n✅ HIPAA (for healthcare)\n✅ SOC 2 compliant hosting\n\nYour security is non-negotiable—it's built into everything we do!",
                suggestions: ["GDPR compliance", "Backup strategy", "Security audit", "Healthcare compliance"]
            };
        }

        // AI capabilities
        if (patterns.ai.test(msg)) {
            conversationContext.userInterests.add("ai");
            return {
                text: "🤖 **AI-Powered Features - The Future is Now:**\n\n**I'm living proof of what AI can do!** Here are the AI capabilities we integrate:\n\n**Conversational AI:** 💬\n• Smart chatbots (like me!)\n• Natural language processing\n• Context-aware responses\n• Multi-language support\n• 24/7 automated support\n\n**Personalization:** 🎯\n• Product recommendations\n• Content personalization\n• Behavioral predictions\n• Dynamic pricing\n• User journey optimization\n\n**Automation:** ⚙️\n• Content generation\n• Image optimization & tagging\n• Email marketing automation\n• Lead scoring & routing\n• Workflow automation\n\n**Analytics & Insights:** 📊\n• Predictive analytics\n• Sentiment analysis\n• Trend detection\n• Customer behavior analysis\n• Conversion optimization\n\n**Advanced Features:** 🚀\n• Voice interfaces (Alexa, Google)\n• Image recognition\n• Search enhancement\n• Fraud detection\n• A/B test automation\n\n**Technologies:**\n• OpenAI GPT (powers me!)\n• TensorFlow & PyTorch\n• Custom ML models\n• NLP engines\n\n**Real Impact:**\n• 50% reduction in support costs\n• 24/7 customer engagement\n• 30% increase in conversions\n• Personalized user experiences\n\nAI isn't just buzzwords—it's practical business value!",
                suggestions: ["Add chatbot to my site", "Personalization examples", "AI costs", "How smart is Nova?"]
            };
        }

        // Comparison / Why choose us
        if (patterns.comparison.test(msg)) {
            conversationContext.userInterests.add("why-choose");
            return {
                text: "🏆 **Why Choose PrimeWeb Labs? We're Different:**\n\n**vs Template Builders (Wix, Squarespace):**\n✅ We win: Full customization & ownership\n✅ We win: Better performance & SEO\n✅ We win: Unlimited scalability\n✅ We win: No monthly platform fees\n\n**vs Freelancers:**\n✅ We win: Complete team (designers, devs, QA)\n✅ We win: Project management\n✅ We win: Reliable timelines\n✅ We win: Ongoing support\n\n**vs Large Agencies:**\n✅ We win: Personal attention (not just a number)\n✅ We win: Competitive pricing\n✅ We win: Faster communication\n✅ We win: Direct access to developers\n\n**Our Unique Advantages:**\n\n🎯 **Client-First Approach**\n• Transparent communication\n• No jargon - clear explanations\n• Flexible & collaborative\n\n⚡ **Modern Technology**\n• Latest frameworks & tools\n• Future-proof solutions\n• Best practices enforced\n\n💎 **Quality Obsession**\n• Code reviews\n• Automated testing\n• Performance optimization\n• Security-first development\n\n📈 **Results-Driven**\n• Business goals focused\n• Data-driven decisions\n• ROI-focused features\n• Continuous optimization\n\n🤝 **Long-Term Partnership**\n• Post-launch support\n• Ongoing improvements\n• Growth alongside your business\n\n**The Numbers:**\n• 98% client satisfaction\n• 50+ successful projects\n• 99.9% uptime\n• 150% average ROI increase\n\nWe don't just build websites—we build growth engines!",
                suggestions: ["See client testimonials", "Case studies", "Get started", "Compare pricing"]
            };
        }

        // Maintenance & Support
        if (patterns.maintenance.test(msg)) {
            conversationContext.userInterests.add("maintenance");
            return {
                text: "🔧 **Maintenance & Support - We've Got Your Back:**\n\n**What's Included in Support:**\n\n**Regular Maintenance:** 🛠️\n• Software updates & patches\n• Security monitoring\n• Performance optimization\n• Backup verification\n• Uptime monitoring (99.9% SLA)\n• SSL certificate renewal\n\n**Content Updates:** ✏️\n• Text & image changes\n• Blog post publishing\n• Menu updates\n• Minor design tweaks\n• Product additions (e-commerce)\n\n**Technical Support:** 💻\n• Bug fixes & troubleshooting\n• Browser compatibility updates\n• Mobile optimization\n• Speed enhancements\n• Security patches\n\n**Monitoring & Reporting:** 📊\n• Monthly performance reports\n• Analytics insights\n• Traffic analysis\n• Conversion tracking\n• Recommendations for improvement\n\n**Support Plans:**\n\n**🌱 Basic** ($500/month)\n• Up to 5 hours support\n• Monthly updates\n• Email support (24hr response)\n• Backups & security\n\n**🚀 Professional** ($1,200/month)\n• 15 hours support\n• Priority fixes\n• Phone support (4hr response)\n• Performance optimization\n• Monthly strategy call\n\n**⭐ Enterprise** (Custom)\n• Unlimited support\n• Dedicated team member\n• Immediate response\n• Custom SLA\n• Proactive improvements\n\n**Response Times:**\n• Critical issues: 1 hour\n• Urgent fixes: 4 hours\n• Standard requests: 24 hours\n• Enhancements: Planned in sprint\n\nYour success is our success—we're in it for the long haul!",
                suggestions: ["Choose support plan", "Emergency support", "What counts as support hour?", "Add features later"]
            };
        }

        // CMS questions
        if (patterns.cms.test(msg)) {
            conversationContext.userInterests.add("cms");
            return {
                text: "📝 **Content Management - You're in Control:**\n\n**CMS Options We Offer:**\n\n**🎨 Headless CMS** (Recommended)\n• Contentful, Sanity, or Strapi\n• Complete design freedom\n• Better performance\n• Multi-platform content delivery\n• API-first approach\n*Best for: Modern, fast sites*\n\n**🔧 Traditional CMS**\n• WordPress (with custom themes)\n• User-friendly admin\n• Extensive plugins\n• Familiar interface\n*Best for: Content-heavy sites, blogs*\n\n**⚛️ Custom Admin Panel**\n• Built specifically for your needs\n• Tailored workflows\n• Perfect UX for your team\n• No bloat or unnecessary features\n*Best for: Complex platforms, SaaS*\n\n**What You Can Manage:**\n✅ Text content & blog posts\n✅ Images & media\n✅ Products (e-commerce)\n✅ Team members & profiles\n✅ Testimonials\n✅ FAQs & documentation\n✅ SEO settings\n✅ Forms & CTAs\n✅ Analytics review\n\n**Training Included:**\n• Comprehensive documentation\n• Video tutorials\n• Live training session\n• Ongoing support\n\n**No Technical Skills Required!**\nWe make it as easy as editing a Word document.\n\nYou control your content—we handle the technical stuff!",
                suggestions: ["WordPress vs Headless?", "Can I update it myself?", "Training details", "Content strategy help"]
            };
        }

        // API Integration
        if (patterns.api.test(msg)) {
            conversationContext.userInterests.add("api");
            return {
                text: "🔗 **API Integration & Development - Connect Everything:**\n\n**Popular Integrations We Build:**\n\n**💳 Payment Gateways:**\n• Stripe, PayPal, Square\n• Cryptocurrency payments\n• Subscription management\n• Invoicing automation\n\n**📧 Email & Marketing:**\n• Mailchimp, SendGrid, ConvertKit\n• Email automation\n• Newsletter management\n• Campaign tracking\n\n**📊 Analytics & Data:**\n• Google Analytics 4\n• Mixpanel, Amplitude\n• Custom dashboards\n• Real-time reporting\n\n**🤝 CRM & Sales:**\n• Salesforce, HubSpot\n• Custom CRM integrations\n• Lead management\n• Sales pipeline automation\n\n**📱 Social Media:**\n• Instagram, Facebook, Twitter\n• Social login (OAuth)\n• Content syndication\n• Social feed integration\n\n**📦 Shipping & Logistics:**\n• UPS, FedEx, USPS\n• Real-time tracking\n• Label generation\n• Rate calculation\n\n**Custom API Development:**\n• RESTful APIs\n• GraphQL endpoints\n• WebSocket connections\n• API documentation\n• Rate limiting & security\n• Webhooks & event triggers\n\n**Third-Party Services:**\n• Calendar (Google, Outlook)\n• Maps (Google Maps, Mapbox)\n• SMS (Twilio)\n• Cloud storage (AWS S3, Cloudinary)\n• And 100+ more!\n\n**We Handle:**\n✅ Authentication & security\n✅ Error handling\n✅ Data synchronization\n✅ Performance optimization\n✅ Monitoring & logging\n\nNeed to connect your site to external services? We've got you!",
                suggestions: ["Payment integration cost", "Custom API pricing", "Stripe vs PayPal?", "See API examples"]
            };
        }

        // General help
        if (patterns.help.test(msg) || patterns.features.test(msg)) {
            return {
                text: "🎯 **I'm Here to Help! Let Me Guide You:**\n\nI can assist you with:\n\n**📚 Learning About Us:**\n• Our services & capabilities\n• Portfolio & past projects\n• Technology stack\n• Design philosophy\n• Development process\n\n**💼 Project Planning:**\n• Pricing estimates\n• Timeline expectations\n• Feature recommendations\n• Technology choices\n• Best practices\n\n**🔍 Specific Topics:**\n• E-commerce solutions\n• SEO & performance\n• Mobile optimization\n• Security & compliance\n• AI integration\n• API development\n\n**📞 Next Steps:**\n• Contact information\n• Schedule consultation\n• Get custom quote\n• View case studies\n\n**💡 Industry Insights:**\n• Web development trends\n• Best practices\n• Competitor analysis\n• Strategy recommendations\n\nWhat would you like to explore? Just ask me anything in natural language—I understand context and I'm always learning!",
                suggestions: ["Show me your best work", "How much for an e-commerce site?", "What makes you different?", "I want to get started"]
            };
        }

        // Greetings - Friendly and engaging
        if (isGreeting) {
            const greetings = [
                "Hey there! 👋 Great to see you! I'm Nova, your AI guide. What brings you to PrimeWeb Labs today?",
                "Hello! 😊 I'm Nova, and I'm excited to help you! Whether you're exploring services or ready to build something amazing, I'm here for you. What's on your mind?",
                "Hi! ✨ Welcome to PrimeWeb Labs! I'm Nova, your intelligent assistant. Let's chat about how we can bring your digital vision to life!",
            ];
            return {
                text: greetings[Math.floor(Math.random() * greetings.length)],
                suggestions: ["Tell me about your services", "Show me projects", "I need a website", "How much does it cost?"]
            };
        }

        // Follow-up on previous context
        if (conversationContext.previousQuestions.length > 1) {
            const lastTopic = Array.from(conversationContext.userInterests).pop();
            if (lastTopic) {
                return {
                    text: `🤔 I'd love to help you further! Based on our conversation about **${lastTopic}**, I can provide more specific details, show you examples, or help you get started with a project.\n\nWhat specific aspect would you like to dive deeper into? Or feel free to ask about something completely different!`,
                    suggestions: ["Get a quote", "See examples", "Talk to the team", "Ask something else"]
                };
            }
        }

        // Intelligent default with suggestions
        return {
            text: "🤖 That's an interesting question! While I might not have a specific answer for that exact phrasing, I'm quite knowledgeable about:\n\n• 🌐 Web development services & solutions\n• 💼 Our portfolio & client success stories\n• 💰 Pricing & project timelines\n• 🛠️ Technology stack & tools we use\n• 🎨 Design & UX philosophy\n• 🔒 Security & performance\n• 🤖 AI integration & automation\n• 📞 How to get started with your project\n\nCould you rephrase your question, or would you like me to explain any of these topics?",
            suggestions: ["View portfolio", "Services overview", "Get pricing", "How to get started"]
        };
    };

    const handleSendMessage = (messageText?: string) => {
        const textToSend = messageText || inputValue;
        if (!textToSend.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: textToSend,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate realistic AI thinking time (varies by message complexity)
        const thinkingTime = 600 + Math.random() * 900 + textToSend.length * 20;

        setTimeout(() => {
            const response = getNovaResponse(textToSend, context);
            const novaMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: response.text,
                sender: "nova",
                timestamp: new Date(),
                suggestions: response.suggestions,
            };
            setMessages((prev) => [...prev, novaMessage]);
            setIsTyping(false);

            // Update context after response
            setContext(context);
        }, thinkingTime);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="message"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle className="h-6 w-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Pulse indicator */}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                        </span>
                    )}
                </Button>
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-96 h-[32rem] z-50 flex flex-col glass-card shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-primary/20 to-accent/20 border-b border-border">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <motion.div
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                                        animate={{
                                            boxShadow: [
                                                "0 0 0 0 rgba(99, 102, 241, 0.4)",
                                                "0 0 0 8px rgba(99, 102, 241, 0)",
                                                "0 0 0 0 rgba(99, 102, 241, 0)"
                                            ]
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Sparkles className="h-5 w-5 text-primary-foreground" />
                                    </motion.div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card animate-pulse"></span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm flex items-center gap-1.5">
                                        Nova AI
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-normal">Advanced</span>
                                    </h3>
                                    <p className="text-xs text-muted-foreground">Online • 24/7 • Context-Aware</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                            <div className="space-y-4">
                                {messages.map((message) => (
                                    <div key={message.id}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                                }`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.sender === "user"
                                                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                                                    : "bg-muted"
                                                    }`}
                                            >
                                                <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                                                <span className="text-xs opacity-70 mt-1 block">
                                                    {message.timestamp.toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </span>
                                            </div>
                                        </motion.div>

                                        {/* Quick Reply Suggestions */}
                                        {message.sender === "nova" && message.suggestions && message.suggestions.length > 0 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.3 }}
                                                className="flex flex-wrap gap-2 mt-2 ml-1"
                                            >
                                                {message.suggestions.map((suggestion, idx) => (
                                                    <motion.button
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.4 + idx * 0.1 }}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => handleSendMessage(suggestion)}
                                                        className="px-3 py-1.5 text-xs rounded-full glass-card border border-primary/30 hover:border-primary/60 transition-colors text-foreground/80 hover:text-foreground"
                                                    >
                                                        {suggestion}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                {/* Typing Indicator */}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex justify-start"
                                    >
                                        <div className="bg-muted rounded-2xl px-4 py-3 flex items-center gap-2">
                                            <Sparkles className="h-3 w-3 text-primary animate-pulse" />
                                            <div className="flex space-x-2">
                                                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                                <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
                                            </div>
                                            <span className="text-xs text-muted-foreground ml-1">Nova is thinking...</span>
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        </ScrollArea>

                        {/* Input */}
                        <div className="p-4 border-t border-border">
                            <div className="flex gap-2">
                                <Input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything about PrimeWeb..."
                                    className="flex-1"
                                    disabled={isTyping}
                                />
                                <Button
                                    onClick={() => handleSendMessage()}
                                    size="icon"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-1.5 mt-2">
                                <Sparkles className="h-3 w-3 text-primary" />
                                <p className="text-xs text-muted-foreground text-center">
                                    Powered by Nova AI · Advanced NLP · Context-Aware
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NovaAI;
