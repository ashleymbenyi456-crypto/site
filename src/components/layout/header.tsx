"use client";

import Link from "next/link";
import { MountainIcon, MenuIcon } from "lucide-react";
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
    { href: "#how-we-work", label: "Our Process" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#faq", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
      isScrolled ? "border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold font-headline text-primary">Global Leap</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-accent"
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
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                  <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={handleLinkClick}>
                      <MountainIcon className="h-6 w-6 text-primary" />
                      <span className="text-lg font-bold text-primary">Global Leap</span>
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
