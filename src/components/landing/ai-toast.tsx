'use client';

import { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { suggestInteraction, type SuggestInteractionOutput } from '@/ai/flows/suggest-interaction';

export default function AiToast() {
  const { toast } = useToast();
  const [shouldShowToast, setShouldShowToast] = useState(false);

  useEffect(() => {
    // This simulates the random trigger for a logged-in Sugar Daddy.
    // In a real app, this would be tied to user role and activity.
    const timer = setTimeout(() => {
      setShouldShowToast(true);
    }, 10000); // Show toast after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (shouldShowToast) {
      const showInteractionSuggestion = async () => {
        try {
          // In a real app, you'd pass the actual Sugar Daddy's ID
          const suggestion: SuggestInteractionOutput = await suggestInteraction({ sugarDaddyId: 'user-123' });

          toast({
            title: "New Message Suggestion",
            description: suggestion.message,
            action: (
              <div className="flex flex-col gap-2 w-full">
                <Button size="sm" className="w-full">Reply</Button>
                <Button size="sm" variant="ghost" className="w-full">Not Now</Button>
              </div>
            ),
            duration: Infinity,
          });
        } catch (error) {
          console.error("Failed to get interaction suggestion:", error);
          // Optionally show an error toast for debugging
        }
      };

      showInteractionSuggestion();
      setShouldShowToast(false); // Reset to prevent re-triggering
    }
  }, [shouldShowToast, toast]);

  return null; // This component doesn't render anything itself
}
