import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingDisplayProps {
  /**
   * The numerical rating value to display (e.g., 4.5).
   */
  rating: number;
  /**
   * The total number of stars in the rating system.
   * @default 5
   */
  totalStars?: number;
  /**
   * The size of the star icons in pixels.
   * @default 16
   */
  size?: number;
  /**
   * Optional additional class names for the container.
   */
  className?: string;
}

/**
 * A non-interactive component that visually represents a numerical rating
 * with a series of full, half, or empty star icons.
 */
const StarRatingDisplay: React.FC<StarRatingDisplayProps> = ({
  rating,
  totalStars = 5,
  size = 16,
  className,
}) => {
  console.log('StarRatingDisplay loaded for rating:', rating);

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const stars = Array.from({ length: totalStars }, (_, i) => {
    const starNumber = i + 1;

    if (starNumber <= fullStars) {
      // Full star
      return (
        <Star
          key={`star-full-${i}`}
          size={size}
          className="text-yellow-400"
          fill="currentColor"
        />
      );
    }

    if (hasHalfStar && starNumber === fullStars + 1) {
      // Half star
      return (
        <StarHalf
          key={`star-half-${i}`}
          size={size}
          className="text-yellow-400"
          fill="currentColor"
        />
      );
    }

    // Empty star (outline)
    return (
      <Star
        key={`star-empty-${i}`}
        size={size}
        className="text-gray-300"
      />
    );
  });

  return (
    <div className={cn('flex items-center gap-0.5', className)} aria-label={`Rating: ${rating} out of ${totalStars} stars`}>
      {stars}
    </div>
  );
};

export default StarRatingDisplay;