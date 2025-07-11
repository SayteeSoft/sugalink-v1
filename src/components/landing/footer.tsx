import Link from 'next/link';
import { Gem } from 'lucide-react';

export default function LandingFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-12 text-center">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Gem className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">SugarLink</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-md">
            An exclusive platform for ambitious and attractive individuals.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Site</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Sitemap</Link></li>
              <li><Link href="/admin" className="text-sm text-muted-foreground hover:text-primary">Admin</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SugarLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
