
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Eye, MessageSquare, Trash2, CheckCircle } from 'lucide-react';

const favorites = [
  {
    name: 'Darianna',
    age: 24,
    location: 'London, UK',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman smiling',
    online: true,
  },
  {
    name: 'Kateryna',
    age: 22,
    location: 'Kiev, UA',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    online: true,
  },
];

const visitors = [
  {
    name: 'Sofia',
    age: 26,
    location: 'Cartagena, CO',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'elegant woman',
    online: false,
  },
];

const viewed = [
    {
    name: 'Vanessa',
    age: 21,
    location: 'Frankfurt, DE',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman face',
    online: true,
  },
];

const ProfileListItem = ({ profile }: { profile: any }) => (
    <Card className="flex items-center justify-between p-4 shadow-sm">
        <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
                <AvatarImage src={profile.avatar} alt={profile.name} data-ai-hint={profile.hint} />
                <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <div className="flex items-center gap-2">
                    <p className="font-semibold">{profile.name}, {profile.age}</p>
                    {profile.online && <div className="h-2 w-2 rounded-full bg-green-500"></div>}
                </div>
                <p className="text-sm text-muted-foreground">{profile.location}</p>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-accent hover:bg-accent/80">
                <MessageSquare className="h-4 w-4 mr-2"/>
                Chat
            </Button>
            <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4 text-muted-foreground"/>
            </Button>
        </div>
    </Card>
);

export default function MatchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-accent">
      <Header />
      <main className="flex-grow container py-12">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-headline font-bold">Matches</h1>
            <p className="text-muted-foreground mt-2">
            Browse your favorites, see who visited your profile, and who you have viewed.
            </p>
        </div>
        
        <Tabs defaultValue="favorites" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="favorites"><Heart className="h-4 w-4 mr-2"/>Favorites</TabsTrigger>
            <TabsTrigger value="visitors"><Eye className="h-4 w-4 mr-2"/>Visitors</TabsTrigger>
            <TabsTrigger value="viewed"><CheckCircle className="h-4 w-4 mr-2"/>Viewed</TabsTrigger>
          </TabsList>
          <TabsContent value="favorites">
            <div className="space-y-4">
              {favorites.map((profile, index) => (
                <ProfileListItem key={index} profile={profile} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="visitors">
            <div className="space-y-4">
              {visitors.map((profile, index) => (
                <ProfileListItem key={index} profile={profile} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="viewed">
            <div className="space-y-4">
                {viewed.map((profile, index) => (
                    <ProfileListItem key={index} profile={profile} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

      </main>
      <Footer />
    </div>
  );
}
