
import { motion } from "framer-motion";

export type LeaderboardEntry = {
  id: string;
  fileName: string;
  score: number;
  timestamp: string;
  verdict: "AI" | "Real" | "Uncertain";
};

type LeaderboardItemProps = {
  entry: LeaderboardEntry;
  index: number;
};

export default function LeaderboardItem({ entry, index }: LeaderboardItemProps) {
  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case "AI":
        return "text-red-500";
      case "Real":
        return "text-green-500";
      default:
        return "text-yellow-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center p-4 border-b border-border last:border-0"
    >
      <div className="mr-4 text-lg font-medium w-8 text-center">
        {index + 1}
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium truncate">{entry.fileName}</h3>
        <p className="text-sm text-muted-foreground">
          {new Date(entry.timestamp).toLocaleString()}
        </p>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="text-sm text-muted-foreground">AI Score</div>
          <div className="font-medium">{entry.score.toFixed(1)}%</div>
        </div>
        
        <div className="w-24 text-right">
          <span className={`font-bold ${getVerdictColor(entry.verdict)}`}>
            {entry.verdict}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
