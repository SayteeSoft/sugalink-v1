import { ShieldCheck, Lock, UserCheck, Video, Headset } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="py-16 sm:py-24 bg-accent">
        <div className="container">
            <h2 className="text-3xl md:text-4xl font-headline text-center font-bold">High Level Security &amp; Privacy</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center p-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Video className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Verified Members</h3>
                    <p className="mt-2 text-muted-foreground">Video verification allows you to know that potential dates look like their photos.</p>
                </div>
                <div className="flex flex-col items-center p-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Lock className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Secure Accounts</h3>
                    <p className="mt-2 text-muted-foreground">Industry-leading account protection helps keep your profile and information safe.</p>
                </div>
                 <div className="flex flex-col items-center p-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                        <Headset className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">24/7 Support</h3>
                    <p className="mt-2 text-muted-foreground">We have a dedicated team of customer service agents to support you.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
