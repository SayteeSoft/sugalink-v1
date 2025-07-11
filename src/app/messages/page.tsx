
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Phone, Video, MoreVertical, Paperclip, SendHorizontal } from 'lucide-react';

const conversations = [
  {
    name: 'Vanessa',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman smiling',
    lastMessage: "Hi! I saw you're a travel par...",
    online: true,
  },
  {
    name: 'Darianna',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman face',
    lastMessage: "Hey there! Loved your profile!",
    online: false,
  },
  {
    name: 'Kateryna',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    lastMessage: "Not yet! Still trying to figure...",
    online: true,
  },
  {
    name: 'Sofia',
    avatar: 'https://placehold.co/100x100.png',
    hint: 'elegant woman',
    lastMessage: "Your profile mentioned you...",
    online: false,
  },
];

const messages = [
  {
    id: 1,
    author: 'Vanessa',
    text: "Hi! I saw you're a travel partner. What's the most amazing place you've visited?",
    isSender: false,
  },
];

export default function MessagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-accent">
      <Header />
      <main className="flex-grow container py-8">
        <Card className="h-[70vh] shadow-lg flex">
          {/* Left Column: Conversations List */}
          <div className="w-1/3 border-r flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search by name..." className="pl-10" />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              {conversations.map((convo, index) => (
                <div
                  key={index}
                  className={`p-4 flex items-center gap-4 cursor-pointer hover:bg-accent ${index === 0 ? 'bg-accent' : ''}`}
                >
                  <Avatar>
                    <AvatarImage src={convo.avatar} alt={convo.name} data-ai-hint={convo.hint} />
                    <AvatarFallback>{convo.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-grow">
                    <p className="font-semibold">{convo.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{convo.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Chat Window */}
          <div className="w-2/3 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/100x100.png" alt="Vanessa" data-ai-hint="woman smiling" />
                  <AvatarFallback>V</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Vanessa</p>
                  <p className="text-sm text-green-500">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Button variant="ghost" size="icon"><Phone className="h-5 w-5" /></Button>
                <Button variant="ghost" size="icon"><Video className="h-5 w-5" /></Button>
                <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-6 bg-gray-50 overflow-y-auto">
              <div className="flex flex-col gap-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex gap-3 items-start">
                     <Avatar className="h-8 w-8">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Vanessa" data-ai-hint="woman smiling" />
                        <AvatarFallback>V</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg bg-white p-3 max-w-md shadow-sm">
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-white flex items-center gap-4">
              <Button variant="ghost" size="icon"><Paperclip className="text-muted-foreground"/></Button>
              <Input placeholder="Type your message..." className="flex-grow" />
              <Button>
                <SendHorizontal />
              </Button>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
