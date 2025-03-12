
import { useState } from "react";
import { motion } from "framer-motion";
import ImageUploader from "./ImageUploader";
import { ArrowRight } from "lucide-react";

export default function ImageComparison() {
  const [leftImage, setLeftImage] = useState<File | null>(null);
  const [rightImage, setRightImage] = useState<File | null>(null);
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonResult, setComparisonResult] = useState<{
    leftScore: number;
    rightScore: number;
  } | null>(null);

  const handleCompare = () => {
    if (leftImage && rightImage) {
      setIsComparing(true);
      
      // Simulate API call for comparison
      setTimeout(() => {
        // Placeholder: Random scores for demonstration
        setComparisonResult({
          leftScore: Math.random() * 100,
          rightScore: Math.random() * 100,
        });
        setIsComparing(false);
      }, 2000);
    }
  };

  const bothImagesSelected = leftImage && rightImage;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Image 1</h3>
          <ImageUploader
            onImageSelected={(file) => setLeftImage(file)}
            label="Upload first image"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-3">Image 2</h3>
          <ImageUploader
            onImageSelected={(file) => setRightImage(file)}
            label="Upload second image"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCompare}
          disabled={!bothImagesSelected || isComparing}
          className={`button-primary flex items-center space-x-2 ${
            !bothImagesSelected && "opacity-50 cursor-not-allowed"
          }`}
        >
          <span>Compare Images</span>
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {isComparing && (
        <div className="mt-8 text-center">
          <div className="inline-block py-2 px-4 rounded-full bg-secondary">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-accent animate-pulse"></div>
              <span>Analyzing images...</span>
            </div>
          </div>
        </div>
      )}

      {comparisonResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-medium mb-2">Image 1 Analysis</h4>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-secondary rounded-full h-4">
                <div
                  className="bg-accent h-4 rounded-full"
                  style={{ width: `${comparisonResult.leftScore}%` }}
                ></div>
              </div>
              <span className="font-medium">
                {comparisonResult.leftScore.toFixed(1)}%
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {comparisonResult.leftScore > 70
                ? "Likely AI-generated"
                : "Likely real image"}
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-medium mb-2">Image 2 Analysis</h4>
            <div className="flex items-center space-x-4">
              <div className="flex-1 bg-secondary rounded-full h-4">
                <div
                  className="bg-accent h-4 rounded-full"
                  style={{ width: `${comparisonResult.rightScore}%` }}
                ></div>
              </div>
              <span className="font-medium">
                {comparisonResult.rightScore.toFixed(1)}%
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {comparisonResult.rightScore > 70
                ? "Likely AI-generated"
                : "Likely real image"}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
