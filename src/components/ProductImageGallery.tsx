import React, { useState, useEffect } from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Camera } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
  console.log('ProductImageGallery loaded');

  // Set the first image as active by default, or null if no images are provided
  const [activeImage, setActiveImage] = useState<string | null>(images && images.length > 0 ? images[0] : null);

  // Effect to update the active image if the images prop changes
  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImage(images[0]);
    } else {
      setActiveImage(null);
    }
  }, [images]);

  if (!activeImage) {
    return (
      <div className="w-full">
        <AspectRatio ratio={1} className="bg-muted rounded-lg flex items-center justify-center">
          <Camera className="h-12 w-12 text-gray-400" />
        </AspectRatio>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {/* Main Image Display */}
      <div>
        <AspectRatio ratio={1} className="w-full overflow-hidden rounded-lg">
          <img
            src={activeImage}
            alt={`${productName} - primary view`}
            className="object-cover w-full h-full transition-opacity duration-300"
          />
        </AspectRatio>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(image)}
              className={cn(
                "overflow-hidden rounded-md ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                "transition-all",
                activeImage === image ? "ring-2 ring-primary" : "hover:opacity-80"
              )}
              aria-label={`View image ${index + 1} of ${productName}`}
            >
              <AspectRatio ratio={1}>
                <img
                  src={image}
                  alt={`${productName} - thumbnail ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;