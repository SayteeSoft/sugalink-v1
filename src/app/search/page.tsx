
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { Filter, Star, Heart, MessageCircle } from 'lucide-react';

const profiles = [
  { name: 'Darianna, 24', location: 'London, UK', image: 'https://placehold.co/300x300.png', hint: 'woman smiling', online: true, verified: true },
  { name: 'Kateryna, 22', location: 'Kiev, UA', image: 'https://placehold.co/300x300.png', hint: 'woman portrait', online: true, verified: false },
  { name: 'Sofia, 26', location: 'Cartagena, CO', image: 'https://placehold.co/300x300.png', hint: 'elegant woman', online: false, verified: true },
  { name: 'Vanessa, 21', location: 'Frankfurt, DE', image: 'https://placehold.co/300x300.png', hint: 'woman smiling', online: true, verified: false },
  { name: 'Olivia, 23', location: 'Medellin, CO', image: 'https://placehold.co/300x300.png', hint: 'woman face', online: false, verified: false },
  { name: 'Cecilia, 25', location: 'Rio, Brazil', image: 'https://placehold.co/300x300.png', hint: 'woman portrait', online: true, verified: false },
];

export default function SearchPage() {
  return (
    <div className="flex flex-col min-h-screen bg-accent">
      <Header />
      <main className="flex-grow container py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-headline font-bold">Discover Your Match</h1>
          <p className="text-muted-foreground mt-2">Use our advanced search to find exactly who you're looking for.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Column */}
          <aside className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Filter className="h-5 w-5" />
                  Filters
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-profiles" className="flex items-center gap-2 cursor-pointer">
                      <Checkbox id="new-profiles" />
                      New
                    </Label>
                  </div>
                   <div className="flex items-center justify-between">
                    <Label htmlFor="online-now">Online</Label>
                    <Switch id="online-now" />
                  </div>
                   <div className="flex items-center justify-between">
                    <Label htmlFor="with-photo">With Photo</Label>
                    <Switch id="with-photo" defaultChecked />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <Label>Age Range</Label>
                        <span>18 - 65</span>
                    </div>
                    <Slider defaultValue={[18, 65]} max={80} min={18} step={1} />
                  </div>
                  <div className="space-y-2">
                     <div className="flex justify-between text-sm">
                        <Label>Height</Label>
                        <span>4'11" - 6'7"</span>
                    </div>
                    <Slider defaultValue={[150, 200]} max={220} min={120} step={1} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="e.g. London" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button>Apply Filters</Button>
                    <Button variant="ghost">Clear Filters</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Profiles Grid */}
          <div className="lg:col-span-3">
             <p className="text-muted-foreground mb-4">6 Profiles found</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <Card key={index} className="overflow-hidden group shadow-lg relative">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={profile.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="font-bold text-lg flex items-center">
                      {profile.name}
                      {profile.online && <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>}
                      {profile.verified && <Star className="ml-1 h-4 w-4 text-yellow-400 fill-current" />}
                    </div>
                    <p className="text-sm">{profile.location}</p>
                  </div>
                   <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                        <Heart className="h-5 w-5"/>
                      </Button>
                       <Button size="icon" variant="secondary" className="rounded-full h-9 w-9">
                        <MessageCircle className="h-5 w-5"/>
                      </Button>
                    </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
