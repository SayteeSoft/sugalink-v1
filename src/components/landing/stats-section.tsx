export default function StatsSection() {
    const stats = [
      { value: '1M+', label: 'Active Members' },
      { value: '4:1', label: 'Baby to Daddy Ratio' },
      { value: '250k+', label: 'Monthly Messages' },
      { value: '5,000+', label: 'Success Stories' },
    ];
  
    return (
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">By The Numbers</h2>
          <p className="mt-4 text-center text-primary-foreground/80 max-w-2xl mx-auto">
            Join a thriving community of successful and attractive people.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
