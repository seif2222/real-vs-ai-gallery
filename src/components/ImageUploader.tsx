
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Image, X } from "lucide-react";

type ImageUploaderProps = {
  onImageSelected: (file: File) => void;
  label?: string;
  multiple?: boolean;
  className?: string;
};

export default function ImageUploader({
  onImageSelected,
  label = "Upload an image",
  multiple = false,
  className = "",
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      console.error("Please upload an image file");
      return;
    }

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Send the file to the parent component
    onImageSelected(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const clearImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {!preview ? (
        <motion.div
          whileHover={{ scale: 1.01 }}
          className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-colors cursor-pointer ${
            isDragging
              ? "border-accent bg-accent/5"
              : "border-border hover:border-accent/50 hover:bg-accent/5"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-10 h-10 mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">{label}</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop your image here, or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            Supported formats: JPG, PNG, GIF
          </p>
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-xl overflow-hidden aspect-video"
        >
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          <button
            onClick={clearImage}
            className="absolute top-2 right-2 p-1 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background"
            aria-label="Remove image"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
