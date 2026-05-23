import { GraduationCap, Leaf, HandHeart, Users, HeartPulse, Bird } from "lucide-react";

export const projects = [
  {
    id: "vikas",
    name: "Project VIKAS",
    description: "Enhancing employability through skill development programs.",
    fullDescription: "Project VIKAS is aimed at empowering underprivileged youth through rigorous skill development, career counseling, and mentorship programs to build a sustainable future. We focus on enhancing employability by providing practical training in domains that match the current market requirements, ensuring our youth can secure stable livelihoods and break the cycle of poverty.",
    icon: GraduationCap,
    image: "https://inamigosfoundation.org.in/public/storage/gallery/1743051485.jpg",
    stats: { beneficiaries: "15,000+", locations: "12 Cities" },
    color: "primary" as const
  },
  {
    id: "prakriti",
    name: "Project PRAKRITI",
    description: "Environmental conservation and sustainability efforts.",
    fullDescription: "Project PRAKRITI is our core environmental conservation initiative focusing on massive tree plantation drives, waste management, and climate change awareness. We aim to create a greener planet by actively engaging communities in planting for a better tomorrow, maintaining ecological balance, and spreading awareness on sustainable living practices.",
    icon: Leaf,
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236201.jpg",
    stats: { trees: "20,000+", volunteers: "3,500+" },
    color: "secondary" as const
  },
  {
    id: "seva",
    name: "Project SEVA",
    description: "Providing food, clothing, and essential support to the underprivileged.",
    fullDescription: "Project SEVA focuses on serving humanity with compassion. We organize regular community service campaigns addressing immediate social needs including food distribution drives, cloth donation camps, and disaster relief operations. Our goal is to ensure that no one goes to bed hungry and that basic necessities reach those who need them the most.",
    icon: HandHeart,
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738236132.jpg",
    stats: { meals: "50,000+", drives: "120+" },
    color: "accent" as const
  },
  {
    id: "bachpanshala",
    name: "Project BACHPANSHALA",
    description: "Ensuring quality education for underprivileged children.",
    fullDescription: "Project BACHPANSHALA is dedicated to nurturing young minds and building bright futures. We strive to ensure quality primary education for children in slums and rural areas through evening classes, educational kits distribution, and interactive learning sessions, helping them overcome educational barriers.",
    icon: Users,
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235951.jpg",
    stats: { students: "5,000+", centers: "25+" },
    color: "primary" as const
  },
  {
    id: "udaan",
    name: "Project UDAAN",
    description: "Women empowerment through skill development and financial independence.",
    fullDescription: "Project UDAAN focuses on women empowerment. We provide vocational training, financial literacy programs, and entrepreneurial support to women from marginalized backgrounds. By equipping them with skills and resources, we help them soar towards a brighter, self-reliant future.",
    icon: HeartPulse,
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235638.jpg",
    stats: { women: "2,500+", businesses: "150+" },
    color: "secondary" as const
  },
  {
    id: "jeev",
    name: "Project JEEV",
    description: "Animal welfare, including rescue, protection and feeding.",
    fullDescription: "Project JEEV is an animal welfare initiative dedicated to empowering lives and spreading compassion. We focus on rescuing, feeding, and providing medical aid to stray and abandoned animals. We believe every life matters and work tirelessly to create a safer environment for our voiceless friends.",
    icon: Bird,
    image: "https://inamigosfoundation.org.in/public/storage/slideshow/1738235697.jpg",
    stats: { animals: "10,000+", camps: "45+" },
    color: "accent" as const
  }
];
