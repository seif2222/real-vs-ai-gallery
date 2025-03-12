
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";

const team = [
  {
    name: "Alex Johnson",
    role: "Lead AI Researcher",
    bio: "Specializes in computer vision and deep learning with 8+ years of experience in image analysis.",
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    name: "Sarah Chen",
    role: "Backend Developer",
    bio: "Expert in Python and machine learning infrastructure with a background in computer science.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
  },
  {
    name: "Marcus Williams",
    role: "Frontend Developer",
    bio: "Creates intuitive and responsive user interfaces with expertise in modern web technologies.",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Data Scientist",
    bio: "Develops and optimizes the machine learning models that power our AI detection algorithms.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
  },
  {
    name: "David Kim",
    role: "UX Designer",
    bio: "Creates seamless user experiences with a focus on accessibility and intuitive interactions.",
    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
  },
  {
    name: "Olivia Taylor",
    role: "Project Manager",
    bio: "Ensures the team delivers high-quality solutions on time with effective coordination.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  }
];

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="section-container">
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
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
          
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
            <a href="#" className="button-primary">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
