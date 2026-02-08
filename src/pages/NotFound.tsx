import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Compass, FileQuestion, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const popularPages = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/services", icon: Compass },
    { name: "Portfolio", path: "/portfolio", icon: Search },
    { name: "About", path: "/about", icon: FileQuestion },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 404 Graphic */}
            <div className="relative mb-12">
              <motion.div
                className="text-[12rem] md:text-[16rem] font-display font-bold gradient-text leading-none"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                    "0 0 40px rgba(168, 85, 247, 0.4)",
                    "0 0 20px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.div>
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-32 h-32 rounded-full border-4 border-primary/20 border-t-primary"></div>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-3xl md:text-5xl mb-4"
            >
              Houston, We Have a Problem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground mb-4"
            >
              The page you're looking for seems to have vanished into the digital void.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground mb-12"
            >
              Attempted URL: <code className="px-2 py-1 rounded bg-muted text-primary">{location.pathname}</code>
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              <Link
                to="/"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all font-semibold flex items-center gap-2 group"
              >
                <Home className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 rounded-lg glass-card border border-border hover:border-primary/50 transition-colors font-semibold flex items-center gap-2 group"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </button>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="font-semibold text-lg mb-6 text-muted-foreground">
                Or explore these popular pages:
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {popularPages.map((page, i) => (
                  <motion.div
                    key={page.path}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    <Link
                      to={page.path}
                      className="glass-card p-6 hover:glow-blue transition-shadow group block"
                    >
                      <page.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <p className="font-semibold">{page.name}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Help Text - Nova AI Assistance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16 max-w-2xl mx-auto space-y-4"
            >
              <div className="glass-card gradient-border p-8 relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <h3 className="font-display font-bold text-2xl">
                      Lost? <span className="gradient-text">Nova Can Help!</span>
                    </h3>
                  </div>

                  <p className="text-center text-muted-foreground mb-6">
                    Our AI assistant <strong className="text-foreground">Nova</strong> is here 24/7 to help you find exactly what you're looking for.
                    Just click the chat button in the bottom right corner and ask away!
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="glass-card p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Try asking:</p>
                      <p className="text-sm font-semibold">"Show me services"</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Try asking:</p>
                      <p className="text-sm font-semibold">"I can't find the portfolio"</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Try asking:</p>
                      <p className="text-sm font-semibold">"Help me navigate"</p>
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center justify-center gap-2 text-sm"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">
                      Look for the <strong className="text-primary">chat icon</strong> at the bottom right →
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="glass-card p-6 text-center">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Still need human help?</strong> Contact our support team at{" "}
                  <a href="mailto:support@primeweblabs.com" className="text-primary hover:underline">
                    support@primeweblabs.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
