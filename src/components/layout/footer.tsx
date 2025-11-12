import { TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            
            <span className="text-lg font-semibold font-headline text-primary">Global Leap Marketing</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Global Leap Marketing. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-muted-foreground hover:text-accent" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent" prefetch={false}>
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-accent" prefetch={false}>
              <InstagramIcon className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
