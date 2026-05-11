"use client";

import { productType } from "@/src/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";

const ProductCard = ({ product }: { product: productType }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-200 border border-gray-100 dark:border-gray-800">
      {/* IMAGE */}
      <Link
        href={`/products/${product.id}`}
        className="relative aspect-[3/4] overflow-hidden bg-gray-50 dark:bg-gray-800 block">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* DETAILS */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Name + Price */}
        <div className="flex items-start justify-between gap-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug line-clamp-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>

        {/* Color Selector */}
        <div>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
            Color:{" "}
            <span className="capitalize text-gray-900 dark:text-white">
              {selectedColor}
            </span>
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                aria-label={`Select color ${color}`}
                aria-pressed={selectedColor === color}
                className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-150 ${
                  selectedColor === color
                    ? "ring-2 ring-offset-2 ring-indigo-600 scale-110"
                    : "ring-1 ring-gray-300 dark:ring-gray-600 hover:scale-105"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Size Selector */}
        <div>
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
            Size
          </p>
          <div className="flex items-center gap-1.5 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                aria-label={`Select size ${size}`}
                aria-pressed={selectedSize === size}
                className={`h-7 min-w-[1.75rem] px-2.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-150 ${
                  selectedSize === size
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}>
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          aria-label={`Add ${product.name} to cart`}
          className={`mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ${
            added
              ? "bg-green-500 text-white"
              : "bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white"
          }`}>
          {added ? (
            <>
              <Check className="w-4 h-4" />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
