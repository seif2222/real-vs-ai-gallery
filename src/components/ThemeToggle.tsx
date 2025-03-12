
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm border border-border/30 shadow-sm"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === 'dark' ? (
          <Moon className="h-5 w-5 text-accent" />
        ) : (
          <Sun className="h-5 w-5 text-accent" />
        )}
      </motion.div>
    </motion.button>
  );
}
