import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, ChevronDown } from 'lucide-react';

// In a real application, these categories would likely come from an API
const categories = [
  "All Departments",
  "Electronics",
  "Computers",
  "Books",
  "Home & Kitchen",
  "Clothing, Shoes & Jewelry",
  "Toys & Games",
];

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const navigate = useNavigate();

  console.log('SearchBar loaded');

  const handleSearch = () => {
    // Prevent searching for just whitespace
    if (searchQuery.trim() === '') return;

    // Navigate to the product listing page with search parameters
    const searchPath = `/product-listing?query=${encodeURIComponent(
      searchQuery
    )}&category=${encodeURIComponent(category)}`;
    navigate(searchPath);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex w-full max-w-xl items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="hidden sm:flex items-center gap-1 rounded-none border-r h-10 px-4 text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span className="truncate max-w-[120px]">{category}</span>
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select a Department</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
            {categories.map((cat) => (
              <DropdownMenuRadioItem key={cat} value={cat}>
                {cat}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Input
        type="search"
        placeholder="Search Amazon clone..."
        className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none h-10 text-base"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      <Button
        type="submit"
        size="icon"
        className="rounded-none bg-yellow-400 hover:bg-yellow-500 text-slate-900 h-10 w-12 flex-shrink-0"
        onClick={handleSearch}
        aria-label="Perform search"
      >
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SearchBar;