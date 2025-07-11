import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah J.', role: 'Sugar Baby', text: "SugarLink has been a life-changer. I met a wonderful gentleman who is supportive and kind. The platform is so easy to use and feels very secure.", image: "https://placehold.co/100x100.png", hint: "woman smiling" },
  { name: 'Robert H.', role: 'Sugar Daddy', text: "As a busy professional, I don't have time for traditional dating. SugarLink connected me with an intelligent, beautiful young woman who understands my lifestyle. Highly recommended.", image: "https://placehold.co/100x100.png", hint: "man portrait" },
  { name: 'Emily R.', role: 'Sugar Baby', text: "I was hesitant at first, but the community here is respectful and genuine. I've made great connections and had amazing experiences thanks to this site.", image: "https://placehold.co/100x100.png", hint: "woman face" },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">What Our Members Say</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
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
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
