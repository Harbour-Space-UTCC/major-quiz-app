export type MajorKey = "ux" | "marketing" | "entrepreneur" | "cs" | "data" | "cyber";

export type MajorInfo = {
  name: string;
  color: string; // Tailwind gradient classes
  description: string;
  skills: string[];
  careers: string[];
  salary: string;
  growth: string;
  icon: "sparkles" | "trending" | "users" | "code" | "chart" | "shield";
};

export const majors: Record<MajorKey, MajorInfo> = {
  ux: {
    name: "Interaction Design (UX/UI)",
    icon: "sparkles",
    color: "from-purple-500 to-pink-500",
    description:
      "Create beautiful, user-friendly digital experiences that people love to use.",
    skills: ["Visual Design", "User Research", "Prototyping", "Psychology"],
    careers: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "Design Lead",
    ],
    salary: "$65k - $120k",
    growth: "+8% (Fast Growth)",
  },
  marketing: {
    name: "Digital Marketing",
    icon: "trending",
    color: "from-blue-500 to-cyan-500",
    description:
      "Build brands and connect with audiences through data-driven digital strategies.",
    skills: ["Analytics", "Content Strategy", "SEO/SEM", "Social Media"],
    careers: [
      "Digital Marketer",
      "Brand Manager",
      "Growth Hacker",
      "Marketing Director",
    ],
    salary: "$50k - $95k",
    growth: "+10% (Much Faster)",
  },
  entrepreneur: {
    name: "High-tech Entrepreneurship",
    icon: "users",
    color: "from-orange-500 to-red-500",
    description:
      "Launch innovative tech startups and lead teams to change the world.",
    skills: ["Leadership", "Business Strategy", "Innovation", "Networking"],
    careers: [
      "Startup Founder",
      "Product Manager",
      "Business Developer",
      "Venture Capitalist",
    ],
    salary: "$70k - $200k+",
    growth: "+15% (Much Faster)",
  },
  cs: {
    name: "Computer Science",
    icon: "code",
    color: "from-green-500 to-emerald-500",
    description:
      "Build software, apps, and systems that power our digital world.",
    skills: [
      "Programming",
      "Problem Solving",
      "System Design",
      "Mathematics",
    ],
    careers: [
      "Software Engineer",
      "Full-stack Developer",
      "Tech Lead",
      "Architect",
    ],
    salary: "$75k - $140k",
    growth: "+22% (Much Faster)",
  },
  data: {
    name: "Data Science",
    icon: "chart",
    color: "from-indigo-500 to-purple-500",
    description:
      "Turn data into insights that drive smart business decisions and discoveries.",
    skills: [
      "Statistics",
      "Machine Learning",
      "Data Analysis",
      "Research",
    ],
    careers: [
      "Data Scientist",
      "ML Engineer",
      "Research Scientist",
      "Analytics Manager",
    ],
    salary: "$80k - $150k",
    growth: "+35% (Much Faster)",
  },
  cyber: {
    name: "Cyber Security",
    icon: "shield",
    color: "from-red-500 to-rose-500",
    description:
      "Protect digital systems and data from cyber threats and attacks.",
    skills: [
      "Security Protocols",
      "Ethical Hacking",
      "Risk Assessment",
      "Compliance",
    ],
    careers: [
      "Security Engineer",
      "Ethical Hacker",
      "Security Consultant",
      "CISO",
    ],
    salary: "$70k - $130k",
    growth: "+33% (Much Faster)",
  },
};

export type AnswerChoice = {
  text: string;
  scores: Partial<Record<MajorKey, number>>;
};

export type Question = {
  question: string;
  answers: AnswerChoice[];
};

export const questions: Question[] = [
  {
    question:
      "What type of activities do you enjoy most in your free time?",
    answers: [
      {
        text: "Creating art, designing, or making things look beautiful",
        scores: { ux: 3, marketing: 1, entrepreneur: 1, cs: 0, data: 0, cyber: 0 },
      },
      {
        text:
          "Analyzing trends, following social media, or creating content",
        scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 0, data: 1, cyber: 0 },
      },
      {
        text: "Leading group projects or starting new initiatives",
        scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "Coding, building apps, or solving logic puzzles",
        scores: { ux: 1, marketing: 0, entrepreneur: 1, cs: 3, data: 2, cyber: 2 },
      },
    ],
  },
  {
    question: "Which school subject is most interesting to you?",
    answers: [
      {
        text: "Art, Psychology, or English",
        scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 0, data: 0, cyber: 0 },
      },
      {
        text: "Business, Communications, or History",
        scores: { ux: 1, marketing: 3, entrepreneur: 3, cs: 0, data: 1, cyber: 1 },
      },
      {
        text: "Math, Physics, or Computer Science",
        scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 3, data: 3, cyber: 2 },
      },
      {
        text: "Statistics, Research Methods, or Science",
        scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 2 },
      },
    ],
  },
  {
    question: "How do you prefer to work on projects?",
    answers: [
      {
        text: "Alone, focusing on creative details",
        scores: { ux: 2, marketing: 1, entrepreneur: 0, cs: 2, data: 2, cyber: 2 },
      },
      {
        text: "In small teams, collaborating closely",
        scores: { ux: 3, marketing: 2, entrepreneur: 2, cs: 2, data: 1, cyber: 1 },
      },
      {
        text: "Leading a team and delegating tasks",
        scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "With data and research, working systematically",
        scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 3 },
      },
    ],
  },
  {
    question: "What motivates you most about technology?",
    answers: [
      {
        text: "Making technology easier and more beautiful to use",
        scores: { ux: 3, marketing: 1, entrepreneur: 1, cs: 1, data: 0, cyber: 0 },
      },
      {
        text: "Connecting people and building communities",
        scores: { ux: 2, marketing: 3, entrepreneur: 2, cs: 1, data: 0, cyber: 0 },
      },
      {
        text: "Creating innovative solutions to big problems",
        scores: { ux: 1, marketing: 1, entrepreneur: 3, cs: 2, data: 2, cyber: 1 },
      },
      {
        text: "Protecting people and keeping systems secure",
        scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 1, cyber: 3 },
      },
    ],
  },
  {
    question: "Which work environment appeals to you most?",
    answers: [
      {
        text: "Creative studio with design tools and inspiration boards",
        scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 0, data: 0, cyber: 0 },
      },
      {
        text: "Dynamic office with lots of collaboration and meetings",
        scores: { ux: 2, marketing: 3, entrepreneur: 3, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "Tech hub with cutting-edge equipment and innovation",
        scores: { ux: 1, marketing: 1, entrepreneur: 2, cs: 3, data: 2, cyber: 2 },
      },
      {
        text: "Secure facility focused on research and analysis",
        scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 3 },
      },
    ],
  },
  {
    question: "How do you learn new things best?",
    answers: [
      {
        text: "Visual examples, tutorials, and hands-on practice",
        scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 2, data: 1, cyber: 1 },
      },
      {
        text: "Reading case studies and real-world examples",
        scores: { ux: 1, marketing: 3, entrepreneur: 3, cs: 1, data: 2, cyber: 2 },
      },
      {
        text: "Step-by-step technical documentation",
        scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 3, data: 2, cyber: 3 },
      },
      {
        text: "Experiments, data analysis, and research papers",
        scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 2 },
      },
    ],
  },
  {
    question: "What kind of problems excite you to solve?",
    answers: [
      {
        text: "How can we make this app more user-friendly?",
        scores: { ux: 3, marketing: 1, entrepreneur: 1, cs: 1, data: 0, cyber: 0 },
      },
      {
        text: "How can we reach more customers effectively?",
        scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 0, data: 1, cyber: 0 },
      },
      {
        text: "How can we disrupt this industry?",
        scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "How can we make this system more secure?",
        scores: { ux: 0, marketing: 0, entrepreneur: 1, cs: 2, data: 1, cyber: 3 },
      },
    ],
  },
  {
    question: "Which achievement would make you most proud?",
    answers: [
      {
        text: "Designing an app that millions of people love using",
        scores: { ux: 3, marketing: 1, entrepreneur: 2, cs: 2, data: 0, cyber: 0 },
      },
      {
        text: "Creating a viral campaign that changes public opinion",
        scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 0, data: 1, cyber: 0 },
      },
      {
        text: "Building a startup that creates thousands of jobs",
        scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "Discovering insights that advance scientific knowledge",
        scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 3, cyber: 2 },
      },
    ],
  },
  {
    question: "What's your approach to handling challenges?",
    answers: [
      {
        text: "I focus on understanding users and their needs",
        scores: { ux: 3, marketing: 2, entrepreneur: 1, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "I research market trends and competitor strategies",
        scores: { ux: 1, marketing: 3, entrepreneur: 2, cs: 1, data: 2, cyber: 1 },
      },
      {
        text: "I think big picture and rally others to the vision",
        scores: { ux: 1, marketing: 2, entrepreneur: 3, cs: 1, data: 1, cyber: 1 },
      },
      {
        text: "I break down the problem into logical steps",
        scores: { ux: 1, marketing: 1, entrepreneur: 1, cs: 3, data: 3, cyber: 3 },
      },
    ],
  },
  {
    question: "Which future technology trend excites you most?",
    answers: [
      {
        text: "Virtual and Augmented Reality interfaces",
        scores: { ux: 3, marketing: 1, entrepreneur: 2, cs: 2, data: 1, cyber: 1 },
      },
      {
        text: "Social media and influencer platforms",
        scores: { ux: 2, marketing: 3, entrepreneur: 2, cs: 1, data: 1, cyber: 0 },
      },
      {
        text: "Artificial Intelligence and Machine Learning",
        scores: { ux: 1, marketing: 1, entrepreneur: 2, cs: 3, data: 3, cyber: 2 },
      },
      {
        text: "Cybersecurity and digital privacy",
        scores: { ux: 0, marketing: 1, entrepreneur: 1, cs: 2, data: 2, cyber: 3 },
      },
    ],
  },
];

export type QuizResult = {
  major: MajorKey;
  score: number;
  percentage: number;
} & MajorInfo;

