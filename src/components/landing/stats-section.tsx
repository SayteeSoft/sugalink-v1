import { User, Users, Clock, Award } from 'lucide-react';

export default function StatsSection() {
    const stats = [
      { value: '23', label: 'Average Sugar Baby Age', icon: User },
      { value: '6x', label: 'More Sugar Babies than Daddies', icon: Users },
      { value: '4 Days', label: 'Average Time to Find a Match', icon: Clock },
    ];
  
    return (
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">By The Numbers</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center flex flex-col items-center">
                <div className="bg-primary-foreground/20 p-4 rounded-full mb-4">
                    <stat.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
