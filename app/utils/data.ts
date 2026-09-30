import logo1 from "@/public/assets/clients/client1.png";
import logo2 from "@/public/assets/clients/client2.png";
import logo3 from "@/public/assets/clients/client3.png";
import logo4 from "@/public/assets/clients/client4.png";
import logo5 from "@/public/assets/clients/client5.png";

export const clients = [
  { name: "client2", logo: logo2 },
  { name: "client1", logo: logo1 },
  { name: "client3", logo: logo3 },
  { name: "client4", logo: logo4 },
  { name: "client5", logo: logo5 },
];

import figma from "@/public/assets/courses/figma_course.png";
import digital_asset from "@/public/assets/courses/digital_asset_course.png";
import bigdata from "@/public/assets/courses/bigdata_course.png";
import productivity from "@/public/assets/courses/productivity_course.png";
import money from "@/public/assets/courses/money_course.png";
import idea from "@/public/assets/courses/idea_course.png";

import user from "@/public/assets/users/user.png";
import user_1 from "@/public/assets/users/user_1.png";
import user_2 from "@/public/assets/users/user_2.png";
import user_3 from "@/public/assets/users/user_3.png";

export const users = [
  { user: user },
  { user: user_1 },
  { user: user_2 },
  { user: user_3 },
];

export const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const courses = [
  {
    category: ["Featured", "UI/UX Design"],
    cover: figma,
    name: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "beginner",
    price: 25,
    duration: "lifetime",
    lessons: 17,
    length: 136,
    comments: 59,
  },
  {
    category: ["Featured", "Digital Illustration"],
    cover: digital_asset,
    name: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.2,
    level: "beginner",
    price: 25,
    duration: "lifetime",
    lessons: 30,
    length: 300,
    comments: 200,
  },
  {
    category: ["Featured", "Data Science"],
    cover: bigdata,
    name: "The Power of Big Data",
    author: "engineering mind",
    rating: 3.9,
    level: "intermediate",
    price: 10,
    duration: "month",
    lessons: 25,
    length: 136,
    comments: 73,
  },
  {
    category: ["Featured", "Productivity"],
    cover: productivity,
    name: "Balancing Productivity and Self-Care",
    author: "howtown",
    rating: 4.8,
    level: "beginner",
    price: 10,
    duration: "month",
    lessons: 46,
    length: 560,
    comments: 722,
  },
  {
    category: ["Featured", "Productivity"],
    cover: money,
    name: "Mastering Money Management",
    author: "howtown",
    rating: 4.1,
    level: "intermediate",
    price: 10,
    duration: "month",
    lessons: 5,
    length: 59,
    comments: 365,
  },
  {
    category: ["Featured", "Freelance & Entrepreneurship"],
    cover: idea,
    name: "From Idea to Startup Success",
    author: "howtown",
    rating: 4.7,
    level: "advanced",
    price: 50,
    duration: "lifetime",
    lessons: 60,
    length: 400,
    comments: 122,
  },
];

import design from "@/public/assets/learning-paths/design.png";
import development from "@/public/assets/learning-paths/development.png";
import it from "@/public/assets/learning-paths/it.png";
import business from "@/public/assets/learning-paths/business.png";
import marketing from "@/public/assets/learning-paths/marketing.png";
import photography from "@/public/assets/learning-paths/photography.png";

export const learningPaths = [
  {
    icon: design,
    name: "Design",
  },
  {
    icon: development,
    name: "Development",
  },
  {
    icon: it,
    name: "IT & Software",
  },
  {
    icon: business,
    name: "Business",
  },
  {
    icon: marketing,
    name: "Marketing",
  },
  {
    icon: photography,
    name: "Photography",
  },
];

import Sarah from "@/public/assets/testimonials/Sarah.png";
import James from "@/public/assets/testimonials/James.png";
import Alex from "@/public/assets/testimonials/Alex.png";

export const testimonials = [
  {
    image: Sarah,
    name: "Sarah Maddison",
    designation: "Enthusiastic Learner",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    image: James,
    name: "James Litt",
    designation: "Lifelong Learner",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    image: Alex,
    name: "Alex Bruke",
    designation: "Inspired Creator",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

interface FooterLink {
  name: string;
  href: string;
}

export const footerLinks: FooterLink[] = [
  {
    name: "Featured Courses",
    href: "/featured-courses",
  },
  {
    name: "Development",
    href: "/development",
  },
  {
    name: "Become a creator",
    href: "/become-a-creator",
  },
  {
    name: "Featured Categories",
    href: "/featured-categories",
  },
  {
    name: "Marketing",
    href: "/marketing",
  },
  {
    name: "Affiliate Program",
    href: "/affiliate-program",
  },
  {
    name: "Business",
    href: "/business",
  },
  {
    name: "Photography",
    href: "/photography",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "IT",
    href: "/it",
  },
  {
    name: "Finance",
    href: "/finance",
  },
  {
    name: "Help",
    href: "/help",
  },
  {
    name: "Design",
    href: "/design",
  },
  {
    name: "Sport",
    href: "/sport",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const miscellaneousLinks: FooterLink[] = [
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    name: "Cookies Settings",
    href: "/cookies-settings",
  },
];
