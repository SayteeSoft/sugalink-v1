import { ShieldCheck, Lock, UserCheck } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function InfoSection() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What is a Sugar Relationship?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A sugar relationship is a mutually beneficial arrangement between two consenting adults. It's built on a foundation of respect, honesty, and clear communication about expectations.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Typically, it involves an older, financially secure individual (a Sugar Daddy or Mommy) and a younger individual (a Sugar Baby). The relationship provides companionship and mentorship in exchange for support and an enhanced lifestyle.
            </p>
          </div>
          <Card className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://placehold.co/600x400.png"
                alt="Couple talking over coffee"
                fill
                className="object-cover"
                data-ai-hint="couple coffee"
              />
          </Card>
        </div>
        <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">High Level Security &amp; Privacy</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <ShieldCheck className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Verified Profiles</h3>
                    <p className="mt-2 text-muted-foreground">Our verification process ensures you're connecting with real, genuine members.</p>
                </div>
                <div className="flex flex-col items-center p-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Lock className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Secure Messaging</h3>
                    <p className="mt-2 text-muted-foreground">Communicate with peace of mind through our encrypted messaging system.</p>
                </div>
                 <div className="flex flex-col items-center p-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <UserCheck className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Discreet &amp; Private</h3>
                    <p className="mt-2 text-muted-foreground">Your privacy is our priority. We never share your data with third parties.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
