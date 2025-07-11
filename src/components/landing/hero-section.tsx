import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Couple on a luxurious date"
        fill
        className="object-cover brightness-50"
        data-ai-hint="luxury couple"
        priority
      />
      <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-headline font-bold drop-shadow-lg">SugarLink</h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Connect with genuine, ambitious people who know what they want.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="text-lg py-7 px-8">
            <Link href="/signup?role=baby">I'm a Sugar Baby</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild className="text-lg py-7 px-8">
            <Link href="/signup?role=daddy">I'm a Sugar Daddy</Link>
          </Button>
        </div>
        <div className="mt-6">
          <Button size="lg" asChild className="text-lg py-7 px-8">
            <Link href="/discover">Find Your Match</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
