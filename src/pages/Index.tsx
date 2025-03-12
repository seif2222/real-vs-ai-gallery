
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageUploader from "@/components/ImageUploader";
import AnalysisResult from "@/components/AnalysisResult";
import ImageComparison from "@/components/ImageComparison";
import { ArrowDown, Info, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<number | null>(null);

  const handleImageSelected = (file: File) => {
    setSelectedImage(file);
    
    // Start analysis when an image is selected
    setIsAnalyzing(true);
    setAnalysisResult(null);
    
    // Simulating API call for analysis
    setTimeout(() => {
      // Placeholder: Random score for demonstration
      setAnalysisResult(Math.random() * 100);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-background/95"></div>
          
          <div className="container mx-auto px-4 pt-20 z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="heading-1 mb-6">
                  Detect AI-Generated Images with Precision
                </h1>
                <p className="text-xl text-muted-foreground mb-8 text-balance">
                  Our advanced technology analyzes images to determine if they were 
                  created by artificial intelligence or captured in the real world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-xl shadow-sm overflow-hidden p-6 md:p-8"
              >
                <h2 className="heading-3 mb-6">Upload an image for analysis</h2>
                <ImageUploader onImageSelected={handleImageSelected} />
                
                {isAnalyzing && (
                  <div className="mt-8">
                    <AnalysisResult score={0} isLoading={true} />
                  </div>
                )}
                
                {analysisResult !== null && (
                  <div className="mt-8">
                    <AnalysisResult score={analysisResult} />
                  </div>
                )}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex justify-center mt-12"
            >
              <a
                href="#features"
                className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-sm mb-2">Discover More</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-container bg-card">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers comprehensive tools for identifying and comparing 
              AI-generated and real images.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Info className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Educational Resources</h3>
              <p className="text-muted-foreground mb-4">
                Learn about the technology behind AI image generation and detection.
              </p>
              <Link
                to="/education"
                className="button-secondary mt-auto"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Image Leaderboard</h3>
              <p className="text-muted-foreground mb-4">
                View recent submissions and their analysis results.
              </p>
              <Link
                to="/leaderboard"
                className="button-secondary mt-auto"
              >
                View Leaderboard
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background rounded-xl p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Team</h3>
              <p className="text-muted-foreground mb-4">
                Meet the experts behind our AI detection technology.
              </p>
              <Link
                to="/team"
                className="button-secondary mt-auto"
              >
                Meet the Team
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="section-container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Compare Images</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upload two images to compare their AI probability scores side by side.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-sm p-6 md:p-8"
          >
            <ImageComparison />
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-24 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="heading-2 mb-6">Start Using Our AI Detector Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-accent-foreground/90">
              Upload your first image and discover the power of AI detection technology.
            </p>
            <a href="#top" className="button-primary bg-background text-foreground hover:bg-background/90">
              Get Started
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
