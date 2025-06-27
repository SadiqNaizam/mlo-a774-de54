import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import StarRatingDisplay from '@/components/StarRatingDisplay';

// Define the props interface for type safety and clarity
interface ProductCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  price: number;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  imageUrl,
  price,
  rating,
  reviewCount,
}) => {
  console.log(`ProductCard loaded for product ID: ${id}`);

  // Based on the provided App.tsx, the product detail page has a static route.
  // In a real-world scenario, this would likely be dynamic, e.g., `/product-detail/${id}`.
  const productDetailUrl = '/product-detail';

  return (
    <Card className="w-full h-full overflow-hidden transition-all duration-300 ease-in-out border rounded-lg shadow-sm hover:shadow-xl flex flex-col group">
      <Link to={productDetailUrl} aria-label={`View details for ${title}`} className="flex flex-col h-full">
        <CardHeader className="p-0 border-b">
          <AspectRatio ratio={4 / 3}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x300'}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 flex flex-col flex-grow space-y-3">
          <h3 className="text-base font-semibold text-gray-800 line-clamp-2 h-[48px] group-hover:text-blue-600">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <StarRatingDisplay rating={rating} />
            <span>({reviewCount})</span>
          </div>
          <div className="pt-2 mt-auto">
            <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;