
import { motion } from "framer-motion";

type AnalysisResultProps = {
  score: number;
  isLoading?: boolean;
};

export default function AnalysisResult({ 
  score, 
  isLoading = false 
}: AnalysisResultProps) {
  
  // Determine the result category
  const getCategory = () => {
    if (score > 85) return { label: "AI Generated", color: "text-red-500" };
    if (score > 60) return { label: "Likely AI", color: "text-orange-500" };
    if (score > 40) return { label: "Uncertain", color: "text-yellow-500" };
    if (score > 15) return { label: "Likely Real", color: "text-green-500" };
    return { label: "Real Image", color: "text-green-600" };
  };
  
  const category = getCategory();
  
  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-card rounded-xl shadow-sm animate-pulse">
        <div className="h-4 bg-secondary rounded-full w-3/4 mb-4"></div>
        <div className="h-8 bg-secondary rounded-full w-1/2 mb-6"></div>
        <div className="h-4 bg-secondary rounded-full w-full mb-2"></div>
        <div className="h-4 bg-secondary rounded-full w-5/6"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto p-6 bg-card rounded-xl shadow-sm"
    >
      <h3 className="text-lg font-medium mb-2">Analysis Result</h3>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-muted-foreground">AI Probability</span>
          <span className="text-sm font-medium">{score.toFixed(1)}%</span>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${score}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full bg-accent"
          ></motion.div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-medium">Classification</h4>
          <p className={`text-xl font-bold ${category.color}`}>
            {category.label}
          </p>
        </div>
        
        <div className="text-right">
          <h4 className="font-medium">Confidence</h4>
          <p className="text-xl font-bold">
            {Math.abs(score - 50) * 2}%
          </p>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-muted-foreground">
        <p>
          This analysis is based on a combination of visual patterns, metadata, and 
          statistical models that identify characteristics common in AI-generated images.
        </p>
      </div>
    </motion.div>
  );
}
