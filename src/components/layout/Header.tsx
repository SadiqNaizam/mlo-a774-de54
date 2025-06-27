import React from 'react';
import { Link } from 'react-router-dom';
import { Store, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import SearchBar from '../SearchBar';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Header: React.FC = () => {
  console.log('Header loaded');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mr-4">
          <Store className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">Amazon Clone</span>
        </Link>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Account & Lists</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          to="/user-profile"
                        >
                          <User className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Your Profile
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Manage your profile, orders, and settings.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/user-profile" title="Your Orders">Track your packages & view history</ListItem>
                    <ListItem href="/product-listing" title="Recommendations">Discover items picked for you</ListItem>
                    <ListItem href="/user-profile" title="Your Account">Update your info and settings</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/product-listing" className={navigationMenuTriggerStyle()}>
                  Deals
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* User Profile & Cart Icons */}
          <div className="flex items-center gap-1">
             <Button variant="ghost" size="icon" asChild>
                <Link to="/user-profile">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User Profile</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/shopping-cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
          </div>
          
           {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;