
export interface User {
  id: string;
  name: string;
  role: 'Sugar Daddy' | 'Sugar Baby' | 'Admin';
  location: string;
  email: string;
  avatar: string;
  about: string;
  wants: string[];
  interests: string[];
  gallery: { src: string; hint: string }[];
  attributes: {
    Age: number;
    Height: string;
    'Body Type': 'Slim' | 'Athletic' | 'Average' | 'Curvy';
    Ethnicity: string;
    'Hair Color': string;
    'Eye Color': string;
    Smoker: 'Yes' | 'Socially' | 'Sometimes' | 'No';
    Drinker: 'Yes' | 'Socially' | 'Sometimes' | 'No';
    Piercings: 'Yes' | 'No';
    Tattoos: 'Yes' | 'No';
  };
  verified: boolean;
  credits: number | 'Unlimited';
}
