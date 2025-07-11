import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WhatIsSugar() {
  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold">What is a Sugar Relationship?</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sugar dating, in its modern form, has elevated the world of traditional dating relationships, making it more satisfying for both partners. Like-minded people can find each other and explore relationships on their own terms, free from the judgement they may feel from their friends, family, or wider society.
            </p>
        </div>
        <div>
            <Tabs defaultValue="daddy" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="daddy">Sugar Daddy</TabsTrigger>
                <TabsTrigger value="baby">Sugar Baby</TabsTrigger>
              </TabsList>
              <TabsContent value="daddy" className="p-2">
                <p className="text-muted-foreground leading-relaxed">
                    A Sugar Daddy is a successful and generous individual who is willing to provide financial support and mentorship to a partner in exchange for companionship and a mutually beneficial relationship.
                </p>
              </TabsContent>
              <TabsContent value="baby" className="p-2">
                 <p className="text-muted-foreground leading-relaxed">
                    A Sugar Baby is an ambitious and attractive person who seeks a mature partner to provide them with a certain lifestyle and support their goals, in return for their company and affection.
                </p>
              </TabsContent>
            </Tabs>
        </div>
      </div>
    </section>
  );
}
