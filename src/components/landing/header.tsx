import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Gem } from 'lucide-react';

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Gem className="h-6 w-6 text-primary" />
            <span className="font-bold inline-block">SugarLink</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
             <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Profile</Link>
             <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Messages</Link>
             <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Search</Link>
             <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Matches</Link>
          </nav>
          <div className="flex items-center gap-4 ml-8">
             <Button asChild>
                <Link href="/signup">Buy Credits</Link>
             </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium pt-8">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold mb-4"
                  >
                    <Gem className="h-6 w-6 text-primary" />
                    <span className="font-bold">SugarLink</span>
                  </Link>
                   <Link href="#" className="text-muted-foreground hover:text-foreground">Profile</Link>
                   <Link href="#" className="text-muted-foreground hover:text-foreground">Messages</Link>
                   <Link href="#" className="text-muted-foreground hover:text-foreground">Search</Link>
                   <Link href="#" className="text-muted-foreground hover:text-foreground">Matches</Link>
                   <Button asChild>
                      <Link href="/signup">Buy Credits</Link>
                   </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
