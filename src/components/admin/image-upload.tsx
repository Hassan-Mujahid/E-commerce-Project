"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageUploadProps {
  images: string[];
  setImages: (images: string[]) => void;
  maxImages?: number;
}

export function ImageUpload({
  images,
  setImages,
  maxImages = 5,
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);

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

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    if (images.length >= maxImages) {
      alert(`You can only upload a maximum of ${maxImages} images.`);
      return;
    }

    const newImages: string[] = [];

    Array.from(files).forEach((file) => {
      if (images.length + newImages.length >= maxImages) return;

      if (!file.type.startsWith("image/")) {
        alert("Please upload image files only.");
        return;
      }

      // In a real app, you would upload to a server or cloud storage
      // For this demo, we'll use a local URL
      const imageUrl = URL.createObjectURL(file);
      newImages.push(imageUrl);
    });

    setImages([...images, ...newImages]);
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="h-10 w-10 mx-auto text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">
          Drag and drop images here, or{" "}
          <label className="text-primary hover:underline cursor-pointer">
            browse
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
          </label>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          PNG, JPG, GIF up to 5MB
        </p>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence>
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                className="relative aspect-square rounded-md overflow-hidden border"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Product image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-1 right-1 h-6 w-6"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
