import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Minus } from 'lucide-react';

export interface CartItemProps {
  id: string | number;
  imageUrl: string;
  title: string;
  price: number;
  quantity: number;
  onRemove: (id: string | number) => void;
  onQuantityChange: (id: string | number, newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  imageUrl,
  title,
  price,
  quantity,
  onRemove,
  onQuantityChange,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  useEffect(() => {
    // Sync with external changes
    setCurrentQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    console.log(`CartItem loaded for product ID: ${id}`);
  }, [id]);

  const handleQuantityChange = (newQuantity: number) => {
    const validatedQuantity = Math.max(1, newQuantity); // Ensure quantity is at least 1
    setCurrentQuantity(validatedQuantity);
    onQuantityChange(id, validatedQuantity);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val > 0) {
      setCurrentQuantity(val);
    } else if (e.target.value === '') {
        setCurrentQuantity(1); // Or some placeholder state
    }
  };

  const handleInputBlur = () => {
    if (currentQuantity <= 0) {
        handleQuantityChange(1);
    } else {
        handleQuantityChange(currentQuantity);
    }
  };


  const subtotal = price * currentQuantity;

  return (
    <div className="flex items-center gap-4 p-4 border-b">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl || 'https://via.placeholder.com/100'}
          alt={title}
          className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-md"
        />
      </div>

      {/* Product Details & Title */}
      <div className="flex-grow">
        <Link
          to="/product-detail"
          className="text-lg font-medium hover:text-blue-600 hover:underline"
        >
          {title}
        </Link>
        <p className="text-sm text-gray-500">Item Price: ${price.toFixed(2)}</p>
      </div>

      {/* Quantity Control */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleQuantityChange(currentQuantity - 1)}
          disabled={currentQuantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          className="h-8 w-14 text-center"
          value={currentQuantity}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          min="1"
        />
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => handleQuantityChange(currentQuantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Subtotal Price */}
      <div className="w-24 text-right font-semibold">
        <p>${subtotal.toFixed(2)}</p>
      </div>

      {/* Remove Button */}
      <div className="flex-shrink-0">
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onRemove(id)}
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;