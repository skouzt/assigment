"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Grid, HelpCircle } from "lucide-react";
import Image from "next/image";
import { CardContainer, CardItem } from "@/components/ui/3d-card";
import { useGallery, type ImageItem } from "@/hooks/useGallery";

const initialImages: ImageItem[] = [
  { id: "img-1", src: "/images/1.jpg" },
  { id: "img-2", src: "/images/2.jpg" },
  { id: "img-3", src: "/images/3.jpg" },
  { id: "img-4", src: "/images/4.jpg" },
  { id: "img-5", src: "/images/5.jpg" },
  { id: "img-6", src: "/images/6.jpg" },
];

export default function Gallery() {
  const {
    images,
    scrollContainerRef,
    fileInputRef,
    scroll,
    handleAddImage,
    handleFileChange,
  } = useGallery(initialImages);

  return (
    <Card className="w-full bg-gray-800 border-none p-6 rounded-2xl shadow-2xl relative">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      <div className="absolute top-6 left-6 text-gray-500">
        <HelpCircle className="h-5 w-5" />
      </div>

      <div className="absolute top-1/2 left-6 -translate-y-1/2 text-gray-500">
        <Grid className="h-5 w-5" />
      </div>

      <div className="flex justify-between items-center mb-6 pl-12 pr-4">
        <Button className="bg-black hover:bg-black/90 text-white shadow-md text-base font-semibold px-6 py-2.5 rounded-2xl h-auto">
          Gallery
        </Button>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleAddImage}
            className="bg-gray-700/50 hover:bg-gray-700/70 text-white text-sm font-medium px-4 py-2 rounded-xl h-auto"
          >
            + ADD IMAGE
          </Button>

          <Button
            onClick={() => scroll("left")}
            size="icon"
            className="bg-gray-700/50 hover:bg-gray-700/70 text-white border-none shadow-md rounded-xl h-10 w-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>

          <Button
            onClick={() => scroll("right")}
            size="icon"
            className="bg-gray-700/50 hover:bg-gray-700/70 text-white border-none shadow-md rounded-xl h-10 w-10"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="pl-12">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((imageItem, index) => (
            <CardContainer
              key={index}
              containerClassName="py-0 flex-shrink-0"
              className="w-[180px] h-[180px]"
            >
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full h-full mt-4"
              >
                <div className="relative w-[180px] h-[180px] overflow-hidden rounded-2xl border border-gray-700/30 shadow-xl bg-transparent">
                  <Image
                    src={imageItem.src}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="180px"
                    className="object-cover"
                  />
                </div>
              </CardItem>
            </CardContainer>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Card>
  );
}
