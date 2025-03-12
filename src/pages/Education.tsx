
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Education() {
  // Animation variants for staggered list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="heading-1 mb-6">Understanding AI Image Detection</h1>
              <p className="text-xl text-muted-foreground">
                Learn how our technology identifies artificial intelligence generated images.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="heading-3 mb-4">How AI Images Are Created</h2>
                <p className="text-muted-foreground mb-4">
                  AI-generated images are created using sophisticated neural networks, 
                  particularly Generative Adversarial Networks (GANs) and diffusion models. 
                  These systems learn patterns from millions of real images and then 
                  generate new images that mimic these patterns.
                </p>
                <p className="text-muted-foreground">
                  Modern AI image generators include DALL-E, Midjourney, and Stable Diffusion, 
                  which can create highly realistic images from text descriptions or 
                  by transforming existing images.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm"
              >
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" 
                  alt="AI Image Generation Process" 
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold mb-2">AI Image Generation Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Visualization of how neural networks transform random noise or text prompts into detailed images.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm mb-16"
            >
              <h2 className="heading-3 mb-6">Detection Techniques</h2>
              
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.li variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Pattern Analysis</h3>
                    <p className="text-muted-foreground">
                      AI-generated images often contain subtle patterns that aren't 
                      present in natural photographs. Our algorithms identify these 
                      repeating elements that occur due to how neural networks process information.
                    </p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Artifact Detection</h3>
                    <p className="text-muted-foreground">
                      Current AI systems often struggle with certain details like 
                      hands, teeth, or text. Our system looks for these characteristic 
                      imperfections as indicators of AI generation.
                    </p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Metadata Analysis</h3>
                    <p className="text-muted-foreground">
                      Real photographs contain metadata from cameras (EXIF data). 
                      AI-generated images typically lack this information or have 
                      artificial metadata. We examine this data for authenticity.
                    </p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Neural Network Analysis</h3>
                    <p className="text-muted-foreground">
                      We use our own neural networks trained on thousands of real and 
                      AI-generated images to recognize the subtle characteristics that 
                      distinguish AI creations from photographs.
                    </p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            >
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="heading-4 mb-4">Limitations</h3>
                <p className="text-muted-foreground mb-4">
                  As AI technology advances, detection becomes more challenging. 
                  Current limitations include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Difficulty detecting highly refined AI images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Lower accuracy with heavily compressed images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Evolving AI techniques requiring constant updates</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-sm">
                <h3 className="heading-4 mb-4">Future Developments</h3>
                <p className="text-muted-foreground mb-4">
                  Our research team is constantly improving detection methods:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Integration of blockchain for image provenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Advanced frequency domain analysis techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Multi-model approach for higher accuracy</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-accent/10 rounded-xl p-8 mb-16"
            >
              <h2 className="heading-3 mb-4 text-accent">Why Detection Matters</h2>
              <p className="mb-4">
                As AI-generated images become increasingly realistic, the ability to 
                distinguish between real and artificial content becomes crucial for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-bold mb-2">Media Integrity</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintaining trust in visual journalism and preventing misinformation.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-bold mb-2">Copyright Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Identifying AI-generated content that may infringe on artists' works.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h3 className="font-bold mb-2">Digital Identity</h3>
                  <p className="text-sm text-muted-foreground">
                    Preventing impersonation and identity fraud using fake images.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="heading-3 mb-4">Ready to Try It Yourself?</h2>
              <p className="text-muted-foreground mb-6">
                Upload an image and experience our AI detection technology in action.
              </p>
              <a href="/" className="button-primary">
                Analyze an Image
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
