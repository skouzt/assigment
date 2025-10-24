import { useState, useRef } from "react";

export interface ImageItem {
  id: string;
  src: string;
}

export const useGallery = (initialImages: ImageItem[]) => {
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const scroll = (direction: "left" | "right"): void => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleAddImage = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newImages: ImageItem[] = Array.from(files).map((file, index) => ({
        id: `img-${Date.now()}-${index}`,
        src: URL.createObjectURL(file),
      }));

      setImages((prevImages) => [...prevImages, ...newImages]);

      setTimeout(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({
            left: scrollContainerRef.current.scrollWidth,
            behavior: "smooth",
          });
        }
      }, 100);
    }

    if (e.target) {
      e.target.value = "";
    }
  };

  return {
    images,
    scrollContainerRef,
    fileInputRef,
    scroll,
    handleAddImage,
    handleFileChange,
  };
};
