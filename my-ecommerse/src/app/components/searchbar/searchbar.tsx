"use client";

import { useState, useRef } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search products...",
  onSearch,
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex items-center ${className}`}>
      <div
        className={`
          flex items-center w-full rounded-full border transition-all duration-200
          bg-gray-50 dark:bg-gray-800
          ${
            isFocused
              ? "border-indigo-500 ring-2 ring-indigo-500/20 bg-white dark:bg-gray-700"
              : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
          }
        `}>
        {/* Search Icon */}
        <button
          type="submit"
          className="pl-3.5 pr-2 text-gray-400 hover:text-indigo-500 transition-colors"
          aria-label="Search">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          </svg>
        </button>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="
            flex-1 py-2 pr-2 text-sm bg-transparent outline-none
            text-gray-800 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            min-w-0
          "
          aria-label="Search"
        />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="pr-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Clear search">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}
