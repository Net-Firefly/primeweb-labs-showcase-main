import { useState } from "react";
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
    Sparkles
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

const QuoteBooking = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Service Selection
        selectedServices: [] as string[],
        // Step 2: Project Details
        projectName: "",
        projectDescription: "",
        budget: "",
        timeline: "",
        // Step 3: Contact Info
        fullName: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        // Step 4: Additional
        hearAboutUs: "",
        additionalNotes: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleService = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(serviceId)
                ? prev.selectedServices.filter(id => id !== serviceId)
                : [...prev.selectedServices, serviceId]
        }));
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const canProceedStep1 = formData.selectedServices.length > 0;
    const canProceedStep2 = formData.projectName && formData.projectDescription && formData.budget && formData.timeline;
    const canProceedStep3 = formData.fullName && formData.email && formData.phone;

    const handleSubmit = () => {
        // In a real app, send this to your backend
        console.log("Quote Request:", formData);
        setIsSubmitted(true);

        // Reset after 5 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
                selectedServices: [],
                projectName: "",
                projectDescription: "",
                budget: "",
                timeline: "",
                fullName: "",
                email: "",
                phone: "",
                company: "",
                website: "",
                hearAboutUs: "",
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

                {/* Progress Steps */}
                <div className="mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${s === step
                                            ? "bg-gradient-to-br from-primary to-accent text-white scale-110"
                                            : s < step
                                                ? "bg-primary/20 text-primary"
                                                : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    {s < step ? <Check className="h-5 w-5" /> : s}
                                </div>
                                {s < 4 && (
                                    <div
                                        className={`w-12 h-1 mx-2 rounded ${s < step ? "bg-primary" : "bg-muted"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-8 text-xs text-muted-foreground">
                        <span className={step === 1 ? "text-primary font-semibold" : ""}>Services</span>
                        <span className={step === 2 ? "text-primary font-semibold" : ""}>Project</span>
                        <span className={step === 3 ? "text-primary font-semibold" : ""}>Contact</span>
                        <span className={step === 4 ? "text-primary font-semibold" : ""}>Review</span>
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
                                What services do you need?
                            </h3>
                            <p className="text-muted-foreground mb-6">Select all that apply</p>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {services.map((service) => (
                                    <motion.div
                                        key={service.id}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => toggleService(service.id)}
                                        className={`glass-card p-6 cursor-pointer transition-all ${formData.selectedServices.includes(service.id)
                                                ? "gradient-border ring-2 ring-primary/50"
                                                : "hover:border-primary/30"
                                            }`}
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                                <service.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <div
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.selectedServices.includes(service.id)
                                                        ? "bg-primary border-primary"
                                                        : "border-muted-foreground"
                                                    }`}
                                            >
                                                {formData.selectedServices.includes(service.id) && (
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

                    {/* Step 2: Project Details */}
                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">
                                Tell us about your project
                            </h3>
                            <p className="text-muted-foreground mb-6">The more details, the better we can help</p>

                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="projectName" className="flex items-center gap-2 mb-2">
                                        <FileText className="h-4 w-4 text-primary" />
                                        Project Name *
                                    </Label>
                                    <Input
                                        id="projectName"
                                        placeholder="e.g., E-commerce Website for Sustainable Products"
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
                                        placeholder="Describe your project goals, target audience, key features, and any specific requirements..."
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

                    {/* Step 3: Contact Information */}
                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">
                                Your contact information
                            </h3>
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

                    {/* Step 4: Review & Submit */}
                    {step === 4 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="font-display font-bold text-2xl mb-2">
                                Review your quote request
                            </h3>
                            <p className="text-muted-foreground mb-6">Make sure everything looks good</p>

                            <div className="space-y-6">
                                {/* Selected Services */}
                                <div className="glass-card p-6">
                                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                                        <Sparkles className="h-5 w-5 text-primary" />
                                        Selected Services
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {formData.selectedServices.map((id) => {
                                            const service = services.find(s => s.id === id);
                                            return (
                                                <span key={id} className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                                                    {service?.name}
                                                </span>
                                            );
                                        })}
                                    </div>
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

                        {step < 4 ? (
                            <Button
                                onClick={() => setStep(step + 1)}
                                disabled={
                                    (step === 1 && !canProceedStep1) ||
                                    (step === 2 && !canProceedStep2) ||
                                    (step === 3 && !canProceedStep3)
                                }
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
