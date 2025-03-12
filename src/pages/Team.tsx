
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";

const team = [
  {
    name: "سيف محمد أبوزيد خلف الله",
    role: "Team Member",
    bio: "ID: 4231474",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "يوسف عمرو محمد",
    role: "Team Member",
    bio: "ID: 4231263",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    name: "عبدالرحمن وائل الجمل",
    role: "Team Member",
    bio: "ID: 4231032",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
  },
  {
    name: "بدير أحمد الحناوي",
    role: "Team Member",
    bio: "ID: 4231607",
    imageUrl: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
  }
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div 
          className="section-container" 
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented individuals behind our AI detection technology.
            </p>
            
            <motion.div
              className="w-24 h-24 rounded-full bg-accent/20 absolute"
              animate={{
                x: mousePosition.x - 48,
                y: mousePosition.y - 48,
                scale: 1.5,
                opacity: 0.3
              }}
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              style={{ mixBlendMode: "plus-lighter" }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {team.map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                index={index}
              />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-24 max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-2 mb-6">Join Our Team</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals who are passionate about 
              AI technology and its ethical applications. If you're interested in 
              joining our team, check out our current openings.
            </p>
            <motion.a 
              href="#" 
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
