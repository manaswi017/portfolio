// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Manaswi Shinde",
  role: "Full-Stack Developer",
  location: "Pune, Maharashtra",
  email: "manaswivs8@gmail.com",
  phone: "+91 8624038667",
  linkedin: "https://linkedin.com/in/manaswi-shinde-a3937a285",
  github: "https://github.com/manaswi017",
  resume: "/Manaswi_Shinde_Resume.pdf",
  tagline:
    "Final-year Computer Engineering student building scalable MERN applications with authentication, payments and real-time booking.",
  about: [
    "I'm a final-year Computer Engineering student at Pimpri Chinchwad College of Engineering, Pune, with a strong problem-solving foundation – 300+ problems solved on LeetCode.",
    "I enjoy building complete products: secure authentication, REST APIs, payment integration and real-time booking flows. I'm especially interested in backend engineering and full-stack development.",
  ],
};

export const stats = [
  { value: "300+", label: "LeetCode problems" },
  { value: "8.11", label: "CGPA" },
  { value: "3", label: "Projects shipped" },
  { value: "1", label: "Copyright registered" },
];

// Set `live` / `github` to the exact project URLs from your resume links.
// If left null, the button links to your GitHub profile (or is hidden for live).
export const projects = [
  {
    title: "QuickShow",
    subtitle: "Full-stack movie ticket booking platform",
    description: [
      "MERN booking platform built on MVC architecture with secure authentication and role-based authorization using Clerk.",
      "RESTful APIs and CRUD for movies, theatres, bookings and users, with Stripe integrated for secure payments.",
      "Optimised backend performance with asynchronous programming; managed with Git and GitHub.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Clerk", "Stripe"],
    live: null,
    github: null,
  },
  {
    title: "YelpCamp",
    subtitle: "Campground discovery & review platform",
    description: [
      "Full-stack platform with secure user authentication, authorization and complete CRUD operations.",
      "Scalable REST APIs with Mapbox for geolocation and Cloudinary for image upload and management.",
      "Input validation, session management and authorization middleware, following MVC architecture.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Cloudinary", "Mapbox"],
    live: null,
    github: null,
  },
  {
    title: "Dog Disease Prediction",
    subtitle: "Machine learning symptom checker",
    description: [
      "Responsive React.js frontend where users enter symptoms and view predicted diseases.",
      "Integrated a Random Forest model to generate predictions from user input.",
      "Received Copyright Registration for the project, recognising its originality.",
    ],
    stack: ["React.js", "Python", "Random Forest"],
    live: null,
    github: null,
  },
];

export const skills = [
  { group: "Languages", items: ["C", "C++", "JavaScript", "Python", "Java"] },
  { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "MongoDB Atlas", "Vercel", "Render", "Linux"],
  },
  {
    group: "Core CS",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    group: "ML & AI",
    items: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Transformers", "BERT", "Hugging Face"],
  },
];

export const education = [
  {
    school: "Pimpri Chinchwad College of Engineering, Pune",
    degree: "B.Tech in Computer Engineering",
    period: "Jun 2023 – Jun 2027",
    detail: "CGPA: 8.11",
  },
  {
    school: "St. Ursula High School, Nigdi, Pune",
    degree: "SSC (10th) & HSC (12th)",
    period: "Jun 2009 – Jun 2023",
    detail: "SSC: 93.20%  ·  HSC: 89.50%",
  },
];

export const achievements = [
  "The Web Developer Bootcamp 2025 – Colt Steele (Udemy)",
  "Solved 300+ Data Structures and Algorithms problems on LeetCode",
  "Design Team member, ACM Student Chapter",
  "Copyright Registration for the Dog Disease Prediction project",
];
