// All catalog data lives here.
// To add a new service, just add another object to the `services` array.

export type Category = "Grooming" | "Care" | "Health";

export type Service = {
  id: number;
  name: string;
  icon: string; // an emoji 
  category: Category;
  description: string;
  priceFrom: number; // in Rupiah 
};

export const categories: Category[] = ["Grooming", "Care", "Health"];

export const services: Service[] = [
  {
    id: 1,
    name: "Bath & Brush",
    icon: "🛁",
    category: "Grooming",
    description: "A gentle wash, blow dry and brush-out for a fresh, fluffy coat.",
    priceFrom: 25000,
  },
  {
    id: 2,
    name: "Full Haircut",
    icon: "✂️",
    category: "Grooming",
    description: "Breed-friendly styling and trimming by our experienced groomers.",
    priceFrom: 45000,
  },
  {
    id: 3,
    name: "Nail Trim",
    icon: "💅",
    category: "Grooming",
    description: "Quick, stress-free nail trimming and filing.",
    priceFrom: 72000,
  },
  {
    id: 4,
    name: "Day Care",
    icon: "🏡",
    category: "Care",
    description: "Supervised play and rest in a safe, friendly environment.",
    priceFrom: 30000,
  },
  {
    id: 5,
    name: "Pet Sitting",
    icon: "🛋️",
    category: "Care",
    description: "We visit your home to feed, walk and cuddle your pet while you are away.",
    priceFrom: 300000,
  },
  {
    id: 6,
    name: "Wellness Check",
    icon: "🩺",
    category: "Health",
    description: "A basic health check-up with advice from our partner vets.",
    priceFrom: 150000,
  },
  {
    id: 7,
    name: "Dental Cleaning",
    icon: "🦷",
    category: "Health",
    description: "Teeth cleaning to keep your pet's breath and gums healthy.",
    priceFrom: 800000,
  },
]
