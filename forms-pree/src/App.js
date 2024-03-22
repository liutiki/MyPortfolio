import { useForm } from '@formspree/react';
import React, { useState } from 'react';





const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      {isHovered && (
        <button>Добавить в корзину</button>
      )}
    </div>
  );
};

export default ProductCard;

