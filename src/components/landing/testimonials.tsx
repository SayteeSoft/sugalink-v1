import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  { name: 'Darianna', role: 'Sugar Baby', text: "Art student with a love for adventure and exploring new cultures.", image: "https://placehold.co/100x100.png", hint: "woman smiling" },
  { name: 'James', role: 'Sugar Daddy', text: "Tech CEO who works hard and plays harder.", image: "https://placehold.co/100x100.png", hint: "man portrait" },
  { name: 'Kateryna', role: 'Sugar Baby', text: "Recent graduate starting my career in marketing.", image: "https://placehold.co/100x100.png", hint: "woman face" },
  { name: 'Mark', role: 'Sugar Daddy', text: "Investor and lover of the great outdoors.", image: "https://placehold.co/100x100.png", hint: "distinguished man" },
  { name: 'Sofia', role: 'Sugar Baby', text: "Fashion designer with an eye for beauty and a heart for adventure.", image: "https://placehold.co/100x100.png", hint: "elegant woman" },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">What Our Members Say</h2>
        <Carousel className="w-full max-w-4xl mx-auto mt-12" opts={{loop: true}}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                 <div className="p-1">
                  <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic flex-grow">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
