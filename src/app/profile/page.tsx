
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Edit, Heart, Mail, MapPin, Flag, MessageSquare } from 'lucide-react';
import { getUserById } from '@/services/userService';
import type { User } from '@/models/user';
import Link from 'next/link';

export default async function ProfilePage() {
  // For now, we'll fetch the admin user as the default logged-in user.
  // In the future, this will come from the logged-in user's session.
  const user: User | undefined = await getUserById('admin-001');

  if (!user) {
    return (
        <div className="flex flex-col min-h-screen bg-accent">
            <Header />
            <main className="flex-grow container py-8 text-center">
                <h1 className="text-2xl font-bold">User not found</h1>
                <p className="text-muted-foreground">Could not find the requested user profile.</p>
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-accent">
      <Header />
      <main className="flex-grow container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={400}
                    height={400}
                    className="w-full h-auto"
                    data-ai-hint="man portrait"
                  />
                  {user.verified && (
                    <Badge variant="default" className="absolute top-4 left-4">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Verified
                    </Badge>
                  )}
                   {user.role === 'Admin' && (
                    <Badge className="absolute top-4 right-4">Admin</Badge>
                  )}
                </div>
                <div className="p-6 text-center bg-card">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <p className="text-primary font-semibold">{user.role}</p>
                  <div className="text-muted-foreground text-sm mt-2 flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="text-muted-foreground text-sm mt-1 flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>{user.email}</span>
                  </div>
                  <Button variant="outline" className="mt-4 w-full bg-accent hover:bg-accent/80" asChild>
                    <Link href="/profile/edit">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>About {user.name}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <button className="p-2 hover:bg-accent rounded-full"><Heart className="h-5 w-5"/></button>
                    <button className="p-2 hover:bg-accent rounded-full"><Flag className="h-5 w-5"/></button>
                    <button className="p-2 hover:bg-accent rounded-full"><MessageSquare className="h-5 w-5"/></button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{user.about}</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Wants & Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Wants</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.wants.map(want => <Badge key={want} variant="secondary">{want}</Badge>)}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-sm mb-2">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map(interest => <Badge key={interest} variant="secondary">{interest}</Badge>)}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Gallery</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                 {user.gallery.map((photo, index) => (
                  <Image key={index} src={photo.src} alt={`Gallery image ${index + 1}`} width={400} height={300} className="rounded-lg object-cover aspect-[4/3]" data-ai-hint={photo.hint}/>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Interactions</CardTitle>
                <p className="text-sm text-muted-foreground pt-1">Have you met {user.name} in person?</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <Button>We Met</Button>
                    <Button variant="outline" className="bg-accent hover:bg-accent/80">Didn&apos;t Meet</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Attributes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {Object.entries(user.attributes).map(([key, value]) => (
                     <li key={key} className="flex justify-between">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium">{String(value)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
