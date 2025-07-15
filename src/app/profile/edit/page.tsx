'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { type User } from "@/models/user"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { updateProfileAction, getProfileAction } from "../actions"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import Link from "next/link"

const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  location: z.string().min(2, "Location is required."),
  about: z.string().max(500, "About section must be 500 characters or less."),
  role: z.enum(["Sugar Daddy", "Sugar Baby", "Admin"]),
  attributes: z.object({
    Age: z.coerce.number().min(18, "You must be at least 18."),
    Height: z.string(),
    'Body Type': z.enum(["Slim", "Athletic", "Average", "Curvy"]),
    Ethnicity: z.string(),
    'Hair Color': z.string(),
    'Eye Color': z.string(),
    Smoker: z.enum(["Yes", "Socially", "Sometimes", "No"]),
    Drinker: z.enum(["Yes", "Socially", "Sometimes", "No"]),
    Piercings: z.enum(["Yes", "No"]),
    Tattoos: z.enum(["Yes", "No"]),
  })
});

type ProfileFormValues = z.infer<typeof profileFormSchema>

export default function ProfileEditPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      // In a real app, you'd get the logged-in user's ID
      const fetchedUser = await getProfileAction('admin-001');
      if (fetchedUser) {
        setUser(fetchedUser as User);
        form.reset(fetchedUser);
      }
      setIsLoading(false);
    }
    fetchUser();
  }, []);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
      location: "",
      about: "",
      role: "Sugar Baby",
      attributes: {
        Age: 18,
        Height: "",
        'Body Type': "Average",
        Ethnicity: "",
        'Hair Color': "",
        'Eye Color': "",
        Smoker: "No",
        Drinker: "No",
        Piercings: "No",
        Tattoos: "No",
      }
    },
    mode: "onChange",
  })

  async function onSubmit(data: ProfileFormValues) {
    if (!user) return;
    
    const updatedUserData: User = {
      ...user,
      ...data,
    };

    try {
      const result = await updateProfileAction(updatedUserData);
       if (result.success) {
        toast({
          title: "Profile Updated",
          description: "Your changes have been saved successfully.",
        });
        router.push('/profile');
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: "Could not save your changes. Please try again.",
      });
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen bg-accent">
        <Header />
        <main className="flex-grow container py-8">
            <div className="space-y-4">
              <Skeleton className="h-12 w-1/4" />
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-10 w-32" />
            </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col min-h-screen bg-accent">
        <Header />
        <main className="flex-grow container py-8 text-center">
            <h1 className="text-2xl font-bold">User not found</h1>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-accent">
      <Header />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 space-y-8">
                  <Card>
                    <CardHeader><CardTitle>Basic Information</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                       <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. London, UK" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                          control={form.control}
                          name="role"
                          render={({ field }) => (
                              <FormItem>
                              <FormLabel>Role</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Sugar Daddy">Sugar Daddy</SelectItem>
                                        <SelectItem value="Sugar Baby">Sugar Baby</SelectItem>
                                        <SelectItem value="Admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                              <FormMessage />
                              </FormItem>
                          )}
                      />
                      <div>
                          <FormLabel>Email</FormLabel>
                          <Input value={user.email} disabled />
                          <FormDescription>
                              Email cannot be changed here. <Link href="/settings" className="text-primary hover:underline">Change settings</Link>.
                          </FormDescription>
                      </div>
                    </CardContent>
                  </Card>
               </div>
               <div className="lg:col-span-2 space-y-8">
                  <Card>
                      <CardHeader><CardTitle>About Me</CardTitle></CardHeader>
                      <CardContent>
                          <FormField
                              control={form.control}
                              name="about"
                              render={({ field }) => (
                                  <FormItem>
                                  <FormControl>
                                      <Textarea
                                          placeholder="Tell us a little bit about yourself"
                                          className="resize-y min-h-[120px]"
                                          {...field}
                                      />
                                  </FormControl>
                                  <FormMessage />
                                  </FormItem>
                              )}
                          />
                      </CardContent>
                  </Card>
                   <Card>
                      <CardHeader><CardTitle>Attributes</CardTitle></CardHeader>
                      <CardContent className="grid grid-cols-2 gap-x-6 gap-y-4">
                           <FormField
                              control={form.control}
                              name="attributes.Age"
                              render={({ field }) => (
                                  <FormItem>
                                  <FormLabel>Age</FormLabel>
                                  <FormControl>
                                      <Input type="number" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <FormField
                              control={form.control}
                              name="attributes.Height"
                              render={({ field }) => (
                                  <FormItem>
                                  <FormLabel>Height</FormLabel>
                                  <FormControl>
                                      <Input placeholder="e.g. 5'10&quot;" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                  </FormItem>
                              )}
                          />
                          <FormField
                              control={form.control}
                              name="attributes.Body Type"
                              render={({ field }) => (
                                  <FormItem>
                                  <FormLabel>Body Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="Slim">Slim</SelectItem>
                                            <SelectItem value="Athletic">Athletic</SelectItem>
                                            <SelectItem value="Average">Average</SelectItem>
                                            <SelectItem value="Curvy">Curvy</SelectItem>
                                        </SelectContent>
                                    </Select>
                                  <FormMessage />
                                  </FormItem>
                              )}
                          />
                           <FormField
                              control={form.control}
                              name="attributes.Smoker"
                              render={({ field }) => (
                                  <FormItem>
                                  <FormLabel>Smoker</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                        <SelectTrigger><SelectValue /></SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="No">No</SelectItem>
                                            <SelectItem value="Socially">Socially</SelectItem>
                                            <SelectItem value="Sometimes">Sometimes</SelectItem>
                                            <SelectItem value="Yes">Yes</SelectItem>
                                        </SelectContent>
                                    </Select>
                                  <FormMessage />
                                  </FormItem>
                              )}
                          />
                      </CardContent>
                  </Card>
               </div>

             </div>
            <div className="flex justify-end gap-4">
                <Button type="button" variant="ghost" onClick={() => router.push('/profile')}>Cancel</Button>
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Saving...' : 'Save Profile'}
                </Button>
            </div>
          </form>
        </Form>
      </main>
      <Footer />
    </div>
  )
}
