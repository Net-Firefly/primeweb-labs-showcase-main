import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Calculator,
    Check,
    Calendar,
    DollarSign,
    FileText,
    User,
    Mail,
    Phone,
    Building,
    Globe,
    ShoppingCart,
    Palette,
    Code,
    Zap,
    ChevronRight,
    Sparkles,
    Layers,
    Paintbrush,
    CreditCard,
    Package,
    Settings,
    Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const services = [
    { id: "web-dev", name: "Web Development", icon: Globe, price: "$5,000 - $15,000" },
    { id: "ui-ux", name: "UI/UX Design", icon: Palette, price: "$3,000 - $10,000" },
    { id: "ecommerce", name: "E-commerce", icon: ShoppingCart, price: "$8,000 - $25,000" },
    { id: "api", name: "API Development", icon: Code, price: "$4,000 - $12,000" },
    { id: "maintenance", name: "Maintenance & Support", icon: Zap, price: "$500 - $2,000/mo" },
];

const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $50,000",
    "$50,000+",
    "Not sure yet"
];

const timelines = [
    "ASAP (1-2 weeks)",
    "1-2 months",
    "2-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
];

// Service-specific step configurations
const serviceSteps: Record<string, Array<{ num: number; title: string; subtitle: string }>> = {
    "web-dev": [
        { num: 1, title: "Service", subtitle: "Select service" },
        { num: 2, title: "Website Type", subtitle: "Type & features" },
        { num: 3, title: "Design", subtitle: "Visual preferences" },
        { num: 4, title: "Budget & Timeline", subtitle: "Project scope" },
        { num: 5, title: "Contact", subtitle: "Your details" },
        { num: 6, title: "Review", subtitle: "Finalize request" }
    ],
    "ui-ux": [
        { num: 1, title: "Service", subtitle: "Select service" },
        { num: 2, title: "Design Scope", subtitle: "What you need" },
        { num: 3, title: "Brand", subtitle: "Guidelines & assets" },
        { num: 4, title: "Budget & Timeline", subtitle: "Project scope" },
        { num: 5, title: "Contact", subtitle: "Your details" },
        { num: 6, title: "Review", subtitle: "Finalize request" }
    ],
    "ecommerce": [
        { num: 1, title: "Service", subtitle: "Select service" },
        { num: 2, title: "Store Details", subtitle: "Your business" },
        { num: 3, title: "Products & Payments", subtitle: "Store features" },
        { num: 4, title: "Budget & Timeline", subtitle: "Project scope" },
        { num: 5, title: "Contact", subtitle: "Your details" },
        { num: 6, title: "Review", subtitle: "Finalize request" }
    ],
    "api": [
        { num: 1, title: "Service", subtitle: "Select service" },
        { num: 2, title: "API Requirements", subtitle: "Technical needs" },
        { num: 3, title: "Integration", subtitle: "Systems & data" },
        { num: 4, title: "Budget & Timeline", subtitle: "Project scope" },
        { num: 5, title: "Contact", subtitle: "Your details" },
        { num: 6, title: "Review", subtitle: "Finalize request" }
    ],
    "maintenance": [
        { num: 1, title: "Service", subtitle: "Select service" },
        { num: 2, title: "Current Website", subtitle: "Existing setup" },
        { num: 3, title: "Support Needs", subtitle: "What you need" },
        { num: 4, title: "Budget & Timeline", subtitle: "Ongoing plan" },
        { num: 5, title: "Contact", subtitle: "Your details" },
        { num: 6, title: "Review", subtitle: "Finalize request" }
    ]
};

const QuoteBooking = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Service Selection
        selectedService: "",
        // Step 2: Service-Specific Details
        websiteType: "",
        features: [] as string[],
        designStyle: "",
        hasExistingBrand: "",
        brandAssets: "",
        storeType: "",
        productCount: "",
        paymentMethods: [] as string[],
        apiType: "",
        integrations: "",
        currentWebsite: "",
        supportLevel: "",
        // Step 4: Budget & Timeline
        projectName: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        // Step 5: Contact Info
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        // Step 6: Additional
        additionalNotes: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Check for pre-selected service from Services section
    useEffect(() => {
        const preSelectedService = sessionStorage.getItem('preSelectedService');
        if (preSelectedService) {
            setFormData(prev => ({
                ...prev,
                selectedService: preSelectedService
            }));
            // Clear it so it doesn't persist across page reloads
            sessionStorage.removeItem('preSelectedService');
        }
    }, []);

    // Get current steps based on selected service
    const currentSteps = formData.selectedService
        ? serviceSteps[formData.selectedService] || serviceSteps["web-dev"]
        : serviceSteps["web-dev"];

    const selectService = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            selectedService: serviceId
        }));
    };

    const handleInputChange = (field: string, value: string | string[]) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const toggleArrayItem = (field: string, value: string) => {
        setFormData(prev => {
            const array = (prev[field as keyof typeof prev] as string[]) || [];
            return {
                ...prev,
                [field]: array.includes(value)
                    ? array.filter(item => item !== value)
                    : [...array, value]
            };
        });
    };

    // Validation for each step based on selected service
    const canProceed = () => {
        const { selectedService } = formData;

        switch (step) {
            case 1:
                return !!selectedService;
            case 2:
                if (selectedService === "web-dev") return formData.websiteType && formData.features.length > 0;
                if (selectedService === "ui-ux") return formData.designStyle;
                if (selectedService === "ecommerce") return formData.storeType && formData.productCount;
                if (selectedService === "api") return formData.apiType;
                if (selectedService === "maintenance") return formData.currentWebsite;
                return true;
            case 3:
                if (selectedService === "web-dev") return formData.designStyle;
                if (selectedService === "ui-ux") return formData.hasExistingBrand;
                if (selectedService === "ecommerce") return formData.paymentMethods.length > 0;
                if (selectedService === "api") return formData.integrations;
                if (selectedService === "maintenance") return formData.supportLevel;
                return true;
            case 4:
                return formData.projectName && formData.projectDescription && formData.budget && formData.timeline;
            case 5:
                return formData.fullName && formData.email && formData.phone;
            default:
                return true;
        }
    };

    const handleSubmit = () => {
        // In a real app, send this to your backend
        console.log("Quote Request:", formData);
        setIsSubmitted(true);

        // Reset after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
                selectedService: "",
                websiteType: "",
                features: [],
                designStyle: "",
                hasExistingBrand: "",
                brandAssets: "",
                storeType: "",
                productCount: "",
                paymentMethods: [],
                apiType: "",
                integrations: "",
                currentWebsite: "",
                supportLevel: "",
                projectName: "",
                projectDescription: "",
                budget: "",
                timeline: "",
                fullName: "",
                email: "",
                phone: "",
                company: "",
                website: "",
                additionalNotes: "",
            });
        }, 5000);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-2xl mx-auto text-center py-20"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <Check className="h-12 w-12 text-white" />
                </motion.div>
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                    Quote Request <span className="gradient-text">Submitted!</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                    Thank you for your interest! We'll review your request and get back to you within 2 hours during business hours.
                </p>
                <div className="glass-card p-6 max-w-md mx-auto">
                    <p className="text-sm text-muted-foreground mb-4">
                        What happens next?
                    </p>
                    <div className="space-y-3 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">1</span>
                            </div>
                            <p className="text-sm">We'll review your requirements and prepare a detailed proposal</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">2</span>
                            </div>
                            <p className="text-sm">Schedule a free 30-minute consultation call</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold text-primary">3</span>
                            </div>
                            <p className="text-sm">Receive a custom quote with timeline and deliverables</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <section id="get-quote" className="section-padding bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Calculator className="h-8 w-8 text-primary" />
                        <h2 className="font-display font-bold text-3xl md:text-5xl">
                            Get Your Custom <span className="gradient-text">Quote</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Tell us about your project and get a detailed proposal within 2 hours. No commitment required.
                    </p>
                </motion.div>

                {/* Progress Steps - Sticky */}
                <div className="mb-8 max-w-6xl mx-auto sticky top-4 z-20">
                    <div className="glass-card p-4 md:p-6 shadow-xl border-2 border-primary/10">
                        <div className="flex items-center justify-between relative">
                            {/* Progress Line */}
                            <div className="absolute top-6 left-0 right-0 h-1 bg-muted mx-8 md:mx-12 hidden sm:block">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${((step - 1) / 5) * 100}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                                />
                            </div>

                            {currentSteps.map((s) => (
                                <div key={s.num} className="flex-1 flex flex-col items-center relative z-10">
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            scale: s.num === step ? 1.15 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-2 transition-all duration-500 shadow-lg ${s.num < step
                                                ? "bg-gradient-to-br from-green-500 to-emerald-500 text-white"
                                                : s.num === step
                                                    ? "bg-gradient-to-br from-primary to-accent text-white ring-4 ring-primary/30"
                                                    : "bg-background border-2 border-muted text-muted-foreground"
                                            }`}
                                    >
                                        {s.num < step ? (
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                            >
                                                <Check className="h-6 w-6" strokeWidth={3} />
                                            </motion.div>
                                        ) : (
                                            <span className="text-base">{s.num}</span>
                                        )}
                                    </motion.div>
                                    <div className="text-center hidden lg:block">
                                        <p className={`font-semibold text-xs mb-0.5 transition-colors ${s.num === step
                                                ? "text-primary"
                                                : s.num < step
                                                    ? "text-green-600 dark:text-green-400"
                                                    : "text-muted-foreground"
                                            }`}>
                                            {s.title}
                                        </p>
                                        <p className="text-[10px] text-muted-foreground">{s.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile/Tablet Step Title */}
                        <div className="lg:hidden mt-3 text-center border-t border-border/50 pt-3">
                            <p className="font-semibold text-primary text-sm">
                                {currentSteps[step - 1]?.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {currentSteps[step - 1]?.subtitle}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 md:p-12">
                    {/* Step 1: Service Selection */}
                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">
                                What service do you need?
                            </h3>
                            <p className="text-muted-foreground mb-6">Choose the service that best fits your project</p>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {services.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => selectService(service.id)}
                                        className={`glass-card p-6 cursor-pointer transition-all ${formData.selectedService === service.id
                                                ? "gradient-border ring-2 ring-primary/50"
                                                : "hover:border-primary/30"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                                <service.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.selectedService === service.id
                                                        ? "bg-primary border-primary"
                                                        : "border-muted-foreground"
                                                    }`}
                                            >
                                                {formData.selectedService === service.id && (
                                                    <Check className="h-4 w-4 text-white" />
                                                )}
                                            </div>
                                        </div>
                                        <h4 className="font-semibold mb-1">{service.name}</h4>
                                        <p className="text-sm text-muted-foreground">{service.price}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Step 2: Service-Specific Details */}
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            {formData.selectedService === "web-dev" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Website Type & Features</h3>
                                    <p className="text-muted-foreground mb-6">Tell us about your website needs</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Website Type *</Label>
                                            <select
                                                className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                                value={formData.websiteType}
                                                onChange={(e) => handleInputChange("websiteType", e.target.value)}
                                            >
                                                <option value="">Select type</option>
                                                <option value="business">Business Website</option>
                                                <option value="portfolio">Portfolio</option>
                                                <option value="blog">Blog/Magazine</option>
                                                <option value="landing">Landing Page</option>
                                                <option value="web-app">Web Application</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label className="mb-2 block">Features Needed *</Label>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {["Contact Forms", "Blog", "Search", "User Accounts", "Booking System", "Payment Integration"].map(feature => (
                                                    <label key={feature} className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.features.includes(feature)}
                                                            onChange={() => toggleArrayItem("features", feature)}
                                                            className="rounded border-border"
                                                        />
                                                        <span className="text-sm">{feature}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "ui-ux" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Design Scope</h3>
                                    <p className="text-muted-foreground mb-6">What design services do you need?</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Design Style Preference *</Label>
                                            <select
                                                className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                                value={formData.designStyle}
                                                onChange={(e) => handleInputChange("designStyle", e.target.value)}
                                            >
                                                <option value="">Select style</option>
                                                <option value="modern">Modern & Minimalist</option>
                                                <option value="bold">Bold & Creative</option>
                                                <option value="corporate">Corporate & Professional</option>
                                                <option value="playful">Playful & Fun</option>
                                                <option value="elegant">Elegant & Luxury</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label htmlFor="designPages" className="mb-2 block">Number of Pages/Screens</Label>
                                            <Input
                                                id="designPages"
                                                type="number"
                                                placeholder="e.g., 5"
                                                value={formData.productCount}
                                                onChange={(e) => handleInputChange("productCount", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "ecommerce" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Store Details</h3>
                                    <p className="text-muted-foreground mb-6">Tell us about your e-commerce needs</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Store Type *</Label>
                                            <select
                                                className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                                value={formData.storeType}
                                                onChange={(e) => handleInputChange("storeType", e.target.value)}
                                            >
                                                <option value="">Select type</option>
                                                <option value="b2c">B2C (Business to Consumer)</option>
                                                <option value="b2b">B2B (Business to Business)</option>
                                                <option value="marketplace">Marketplace</option>
                                                <option value="subscription">Subscription</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label htmlFor="productCount" className="mb-2 block">Estimated Product Count *</Label>
                                            <Input
                                                id="productCount"
                                                placeholder="e.g., 100"
                                                value={formData.productCount}
                                                onChange={(e) => handleInputChange("productCount", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "api" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">API Requirements</h3>
                                    <p className="text-muted-foreground mb-6">What type of API do you need?</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">API Type *</Label>
                                            <select
                                                className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                                value={formData.apiType}
                                                onChange={(e) => handleInputChange("apiType", e.target.value)}
                                            >
                                                <option value="">Select type</option>
                                                <option value="rest">REST API</option>
                                                <option value="graphql">GraphQL</option>
                                                <option value="websocket">WebSocket</option>
                                                <option value="third-party">Third-party Integration</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label htmlFor="apiEndpoints" className="mb-2 block">Estimated Number of Endpoints</Label>
                                            <Input
                                                id="apiEndpoints"
                                                type="number"
                                                placeholder="e.g., 10"
                                                value={formData.productCount}
                                                onChange={(e) => handleInputChange("productCount", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "maintenance" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Current Website</h3>
                                    <p className="text-muted-foreground mb-6">Tell us about your existing website</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="currentWebsite" className="mb-2 block">Website URL *</Label>
                                            <Input
                                                id="currentWebsite"
                                                type="url"
                                                placeholder="https://yourwebsite.com"
                                                value={formData.currentWebsite}
                                                onChange={(e) => handleInputChange("currentWebsite", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="platform" className="mb-2 block">Current Platform/CMS</Label>
                                            <Input
                                                id="platform"
                                                placeholder="e.g., WordPress, React, Custom"
                                                value={formData.websiteType}
                                                onChange={(e) => handleInputChange("websiteType", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}

                    {/* Step 3: Additional Service Details */}
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            {formData.selectedService === "web-dev" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Design Preferences</h3>
                                    <p className="text-muted-foreground mb-6">Visual style and branding</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Design Style *</Label>
                                            <select
                                                className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                                value={formData.designStyle}
                                                onChange={(e) => handleInputChange("designStyle", e.target.value)}
                                            >
                                                <option value="">Select style</option>
                                                <option value="modern">Modern</option>
                                                <option value="minimalist">Minimalist</option>
                                                <option value="creative">Creative</option>
                                                <option value="corporate">Corporate</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label htmlFor="inspiration" className="mb-2 block">Inspiration/Reference Sites (Optional)</Label>
                                            <Textarea
                                                id="inspiration"
                                                placeholder="Share URLs of websites you like..."
                                                rows={3}
                                                value={formData.brandAssets}
                                                onChange={(e) => handleInputChange("brandAssets", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "ui-ux" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Brand Guidelines</h3>
                                    <p className="text-muted-foreground mb-6">Do you have existing branding?</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Existing Brand Guidelines *</Label>
                                            <div className="space-y-2">
                                                {["Yes, full brand guidelines", "Partial (logo/colors only)", "No, need full branding"].map(option => (
                                                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="hasExistingBrand"
                                                            checked={formData.hasExistingBrand === option}
                                                            onChange={() => handleInputChange("hasExistingBrand", option)}
                                                            className="border-border"
                                                        />
                                                        <span className="text-sm">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="brandAssets" className="mb-2 block">Brand Assets/Notes</Label>
                                            <Textarea
                                                id="brandAssets"
                                                placeholder="Describe your brand colors, fonts, or link to assets..."
                                                rows={3}
                                                value={formData.brandAssets}
                                                onChange={(e) => handleInputChange("brandAssets", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "ecommerce" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Products & Payments</h3>
                                    <p className="text-muted-foreground mb-6">Store features and payment options</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Payment Methods *</Label>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {["Stripe", "PayPal", "Credit Cards", "Apple Pay", "Crypto", "Invoice/NET terms"].map(method => (
                                                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={formData.paymentMethods.includes(method)}
                                                            onChange={() => toggleArrayItem("paymentMethods", method)}
                                                            className="rounded border-border"
                                                        />
                                                        <span className="text-sm">{method}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="shipping" className="mb-2 block">Shipping Requirements (Optional)</Label>
                                            <Textarea
                                                id="shipping"
                                                placeholder="Describe shipping needs, international requirements, etc..."
                                                rows={3}
                                                value={formData.brandAssets}
                                                onChange={(e) => handleInputChange("brandAssets", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "api" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Integration Details</h3>
                                    <p className="text-muted-foreground mb-6">Systems and data requirements</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label htmlFor="integrations" className="mb-2 block">Systems to Integrate *</Label>
                                            <Textarea
                                                id="integrations"
                                                placeholder="List the systems, databases, or services to integrate..."
                                                rows={4}
                                                value={formData.integrations}
                                                onChange={(e) => handleInputChange("integrations", e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="dataVolume" className="mb-2 block">Expected Data Volume</Label>
                                            <Input
                                                id="dataVolume"
                                                placeholder="e.g., 10K requests/day"
                                                value={formData.storeType}
                                                onChange={(e) => handleInputChange("storeType", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                            {formData.selectedService === "maintenance" && (
                                <>
                                    <h3 className="font-display font-bold text-2xl mb-2">Support Needs</h3>
                                    <p className="text-muted-foreground mb-6">What level of support do you need?</p>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="mb-2 block">Support Level *</Label>
                                            <div className="space-y-2">
                                                {["Basic (Updates & backups)", "Standard (Above + monitoring)", "Premium (24/7 support)"].map(level => (
                                                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="supportLevel"
                                                            checked={formData.supportLevel === level}
                                                            onChange={() => handleInputChange("supportLevel", level)}
                                                            className="border-border"
                                                        />
                                                        <span className="text-sm">{level}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="maintenanceNeeds" className="mb-2 block">Specific Maintenance Needs</Label>
                                            <Textarea
                                                id="maintenanceNeeds"
                                                placeholder="Content updates, security patches, performance optimization, etc..."
                                                rows={3}
                                                value={formData.integrations}
                                                onChange={(e) => handleInputChange("integrations", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}

                    {/* Step 4: Budget & Timeline */}
                    {step === 4 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">Budget & Timeline</h3>
                            <p className="text-muted-foreground mb-6">Project scope and expectations</p>

                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="projectName" className="flex items-center gap-2 mb-2">
                                        <FileText className="h-4 w-4 text-primary" />
                                        Project Name *
                                    </Label>
                                    <Input
                                        id="projectName"
                                        placeholder="e.g., Company Website Redesign"
                                        value={formData.projectName}
                                        onChange={(e) => handleInputChange("projectName", e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="projectDescription" className="flex items-center gap-2 mb-2">
                                        <FileText className="h-4 w-4 text-primary" />
                                        Project Description *
                                    </Label>
                                    <Textarea
                                        id="projectDescription"
                                        placeholder="Describe your project goals, target audience, key features..."
                                        rows={5}
                                        value={formData.projectDescription}
                                        onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="budget" className="flex items-center gap-2 mb-2">
                                            <DollarSign className="h-4 w-4 text-primary" />
                                            Budget Range *
                                        </Label>
                                        <select
                                            id="budget"
                                            className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                            value={formData.budget}
                                            onChange={(e) => handleInputChange("budget", e.target.value)}
                                        >
                                            <option value="">Select budget range</option>
                                            {budgetRanges.map((range) => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <Label htmlFor="timeline" className="flex items-center gap-2 mb-2">
                                            <Calendar className="h-4 w-4 text-primary" />
                                            Timeline *
                                        </Label>
                                        <select
                                            id="timeline"
                                            className="w-full px-4 py-2 rounded-lg glass-card border border-border focus:border-primary/50 focus:outline-none transition-colors"
                                            value={formData.timeline}
                                            onChange={(e) => handleInputChange("timeline", e.target.value)}
                                        >
                                            <option value="">Select timeline</option>
                                            {timelines.map((time) => (
                                                <option key={time} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 5: Contact Information */}
                    {step === 5 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">Contact Information</h3>
                            <p className="text-muted-foreground mb-6">How can we reach you?</p>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                                            <User className="h-4 w-4 text-primary" />
                                            Full Name *
                                        </Label>
                                        <Input
                                            id="fullName"
                                            placeholder="John Doe"
                                            value={formData.fullName}
                                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                                            <Mail className="h-4 w-4 text-primary" />
                                            Email *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                                            <Phone className="h-4 w-4 text-primary" />
                                            Phone Number *
                                        </Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+1 (555) 123-4567"
                                            value={formData.phone}
                                            onChange={(e) => handleInputChange("phone", e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="company" className="flex items-center gap-2 mb-2">
                                            <Building className="h-4 w-4 text-primary" />
                                            Company (Optional)
                                        </Label>
                                        <Input
                                            id="company"
                                            placeholder="Your Company Name"
                                            value={formData.company}
                                            onChange={(e) => handleInputChange("company", e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="website" className="flex items-center gap-2 mb-2">
                                        <Globe className="h-4 w-4 text-primary" />
                                        Current Website (Optional)
                                    </Label>
                                    <Input
                                        id="website"
                                        type="url"
                                        placeholder="https://yourwebsite.com"
                                        value={formData.website}
                                        onChange={(e) => handleInputChange("website", e.target.value)}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Step 6: Review & Submit */}
                    {step === 6 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">Review Your Request</h3>
                            <p className="text-muted-foreground mb-6">Make sure everything looks good before submitting</p>

                            <div className="space-y-6">
                                {/* Selected Service */}
                                <div className="glass-card p-6">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                        <Sparkles className="h-5 w-5 text-primary" />
                                        Selected Service
                                    </h4>
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                                        {services.find(s => s.id === formData.selectedService)?.name}
                                    </span>
                                </div>

                                {/* Project Details */}
                                <div className="glass-card p-6">
                                    <h4 className="font-semibold mb-3">Project Details</h4>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <span className="text-muted-foreground">Project Name:</span>
                                            <p className="font-medium">{formData.projectName}</p>
                                        </div>
                                        <div>
                                            <span className="text-muted-foreground">Description:</span>
                                            <p className="font-medium">{formData.projectDescription}</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="text-muted-foreground">Budget:</span>
                                                <p className="font-medium">{formData.budget}</p>
                                            </div>
                                            <div>
                                                <span className="text-muted-foreground">Timeline:</span>
                                                <p className="font-medium">{formData.timeline}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Info */}
                                <div className="glass-card p-6">
                                    <h4 className="font-semibold mb-3">Contact Information</h4>
                                    <div className="space-y-2 text-sm">
                                        <p><span className="text-muted-foreground">Name:</span> <span className="font-medium">{formData.fullName}</span></p>
                                        <p><span className="text-muted-foreground">Email:</span> <span className="font-medium">{formData.email}</span></p>
                                        <p><span className="text-muted-foreground">Phone:</span> <span className="font-medium">{formData.phone}</span></p>
                                        {formData.company && <p><span className="text-muted-foreground">Company:</span> <span className="font-medium">{formData.company}</span></p>}
                                        {formData.website && <p><span className="text-muted-foreground">Website:</span> <span className="font-medium">{formData.website}</span></p>}
                                    </div>
                                </div>

                                {/* Additional Notes */}
                                <div>
                                    <Label htmlFor="additionalNotes" className="mb-2 block">
                                        Additional Notes (Optional)
                                    </Label>
                                    <Textarea
                                        id="additionalNotes"
                                        placeholder="Any other details you'd like us to know..."
                                        rows={3}
                                        value={formData.additionalNotes}
                                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                        <Button
                            variant="outline"
                            onClick={() => setStep(Math.max(1, step - 1))}
                            disabled={step === 1}
                            className="px-6"
                        >
                            Previous
                        </Button>

                        {step < 6 ? (
                            <Button
                                onClick={() => setStep(step + 1)}
                                disabled={!canProceed()}
                                className="px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                            >
                                Continue
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                className="px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                            >
                                Submit Quote Request
                                <Check className="h-4 w-4 ml-2" />
                            </Button>
                        )}
                    </div>

                    {/* Help Text */}
                    <p className="text-xs text-muted-foreground text-center mt-6">
                        🔒 Your information is secure and will never be shared. We'll respond within 2 hours during business hours.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QuoteBooking;
