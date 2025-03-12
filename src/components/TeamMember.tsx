
import { motion } from "framer-motion";
import { useState } from "react";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  index: number;
};

export default function TeamMember({
  name,
  role,
  bio,
  imageUrl,
  index,
}: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-card rounded-xl overflow-hidden shadow-sm card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden relative">
        <motion.img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHovered ? 1.05 : 1,
            rotateY: isHovered ? 5 : 0 
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-accent/10 backdrop-blur-sm opacity-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="text-white text-lg font-bold"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            View Profile
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="p-6"
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -5 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3 
          className="text-xl font-bold mb-1"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>
        <p className="text-accent mb-4">{role}</p>
        <p className="text-muted-foreground">{bio}</p>
      </motion.div>
    </motion.div>
  );
}
