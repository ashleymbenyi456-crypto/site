
"use client";

import Link from "next/link";
import { Globe, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-colors duration-300",
      isScrolled ? "border-border/40 bg-background/80" : "border-transparent bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Globe className="h-6 w-6 text-accent" />
          <span className="text-lg font-semibold font-headline text-primary">The Global Grid</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-accent"
              prefetch={false}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={handleLinkClick}>
                      <Globe className="h-6 w-6 text-accent" />
                      <span className="text-lg font-bold text-primary">The Global Grid</span>
                  </Link>
                  <nav className="grid gap-4">
                  {navItems.map((item) => (
                      <Link
                      key={item.label}
                      href={item.href}
                      className="py-2 text-lg font-medium transition-colors hover:text-primary"
                      prefetch={false}
                      onClick={handleLinkClick}
                      >
                      {item.label}
                      </Link>
                  ))}
                  </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
