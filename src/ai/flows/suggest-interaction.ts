'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting a Sugar Baby to interact with to a Sugar Daddy.
 *
 * - suggestInteraction - A function that suggests a Sugar Baby to interact with.
 * - SuggestInteractionInput - The input type for the suggestInteraction function.
 * - SuggestInteractionOutput - The return type for the suggestInteraction function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestInteractionInputSchema = z.object({
  sugarDaddyId: z.string().describe('The ID of the Sugar Daddy user.'),
});
export type SuggestInteractionInput = z.infer<typeof SuggestInteractionInputSchema>;

const SuggestInteractionOutputSchema = z.object({
  sugarBabyId: z.string().describe('The ID of the suggested Sugar Baby user.'),
  message: z.string().describe('A message suggesting the Sugar Daddy to interact with the Sugar Baby.'),
});
export type SuggestInteractionOutput = z.infer<typeof SuggestInteractionOutputSchema>;

export async function suggestInteraction(input: SuggestInteractionInput): Promise<SuggestInteractionOutput> {
  return suggestInteractionFlow(input);
}

const suggestInteractionPrompt = ai.definePrompt({
  name: 'suggestInteractionPrompt',
  input: {schema: SuggestInteractionInputSchema},
  output: {schema: SuggestInteractionOutputSchema},
  prompt: `You are an AI assistant on a Sugar Daddy dating site.

  Given the ID of a Sugar Daddy, suggest a Sugar Baby for them to interact with.
  Return the Sugar Baby's ID and a short, engaging message suggesting the interaction.

  Sugar Daddy ID: {{{sugarDaddyId}}}
  Response in JSON format:
  `,
});

const suggestInteractionFlow = ai.defineFlow(
  {
    name: 'suggestInteractionFlow',
    inputSchema: SuggestInteractionInputSchema,
    outputSchema: SuggestInteractionOutputSchema,
  },
  async input => {
    const {output} = await suggestInteractionPrompt(input);
    return output!;
  }
);
