
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-card rounded-xl overflow-hidden shadow-sm card-hover"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-accent mb-4">{role}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </motion.div>
  );
}
