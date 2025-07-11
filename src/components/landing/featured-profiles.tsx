import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const profiles = [
  { name: 'Kateryna', age: 23, location: 'London', image: 'https://placehold.co/400x500.png', hint: 'stylish woman' },
  { name: 'Mark', age: 45, location: 'Manchester', image: 'https://placehold.co/400x500.png', hint: 'successful man' },
  { name: 'Sofia', age: 24, location: 'Birmingham', image: 'https://placehold.co/400x500.png', hint: 'elegant woman' },
  { name: 'James', age: 52, location: 'London', image: 'https://placehold.co/400x500.png', hint: 'distinguished man' },
];

export default function FeaturedProfiles() {
  return (
    <section className="py-16 sm:py-24 bg-accent">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">Featured Profiles</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <Card key={profile.name} className="overflow-hidden group border-2 hover:border-primary transition-all duration-300 shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-96">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={profile.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
                    <p className="text-sm">{profile.location}</p>
                  </div>
                   <Badge variant="secondary" className="absolute top-4 right-4 bg-accent text-accent-foreground">New</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
