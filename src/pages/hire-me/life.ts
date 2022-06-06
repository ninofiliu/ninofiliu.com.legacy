const skillsCategories = {
  academic: "academic",
  programming: "programming",
  artistic: "artistic",
} as const;

export const categoryBySkill = {
  mathematics: skillsCategories.academic,
  "computer science": skillsCategories.academic,
  cybersecurity: skillsCategories.programming,
  "quantum computing": skillsCategories.academic,
  "machine learning": skillsCategories.academic,
  "mobile dev": skillsCategories.programming,
  "front-end dev": skillsCategories.programming,
  "backend dev": skillsCategories.programming,
  "serverless dev": skillsCategories.programming,
  "software architecture": skillsCategories.programming,
  arduino: skillsCategories.programming,
  electronics: skillsCategories.programming,
  "raspberry pi": skillsCategories.programming,
  "generative art": skillsCategories.artistic,
  "sound processing": skillsCategories.programming,
  installation: skillsCategories.artistic,
  "visual art": skillsCategories.artistic,
};

export type Skill = keyof typeof categoryBySkill;

type LifeEvent = {
  year: number;
  name: string;
  description: string;
  skills: Skill[];
  link?: string;
};

export const life: LifeEvent[] = [
  {
    year: 2016,
    name: "Telecom Paris",
    description: "Master in computer science",
    skills: ["mathematics", "computer science", "cybersecurity"],
  },
  {
    year: 2018,
    name: "Synomia",
    description: "Front-end engineer",
    skills: ["front-end dev"],
    link: "https://www.synomia.fr/",
  },
  {
    year: 2018,
    name: "Berlin Institute of Technology",
    description: "Erasmus student",
    skills: ["computer science", "quantum computing", "machine learning"],
  },
  {
    year: 2019,
    name: "Sensafety",
    description: "Co-founded and co-developped this mobile app that collects and displays safety by neighborhood",
    skills: ["mobile dev", "serverless dev"],
    link: "https://sensafety.org/",
  },
  {
    year: 2019,
    name: "360Learning",
    description: "Software engineer",
    skills: ["front-end dev", "backend dev"],
    link: "https://360learning.com/",
  },
  {
    year: 2020,
    name: "Toucan Toco",
    description: "Software engineer",
    skills: ["software architecture", "front-end dev", "backend dev"],
    link: "https://www.toucantoco.com/",
  },
  {
    year: 2020,
    name: "The Color of the Wind",
    description: "Set up and coded a system that processes weather data and controls lights via DMX",
    skills: ["electronics", "arduino", "installation"],
    link: "https://poush.fr/en/programmation/the-color-of-the-wind-by-paul-creange/",
  },
  {
    year: 2021,
    name: "As If My Phone Cares About Museums",
    description:
      'Set up, designed and coded an endless stream of visuals that evolves based on ultrasonic sensory input so as to give life to the concept of "a sculpture that gets scared when you get too close"',
    skills: ["electronics", "raspberry pi", "generative art"],
    link: "https://www.instagram.com/p/CPtJSRtCvJF/",
  },
  {
    year: 2021,
    name: "Woops",
    description: "Projections of custom-made generative visuals for Woops's parties at the Serpent à Plume",
    skills: ["generative art", "installation"],
  },
  {
    year: 2021,
    name: "Supermosh",
    description:
      "Coded and released a free web application that pushes the boundaries of video editing in the browser by making datamosh in the browser possible",
    skills: ["front-end dev"],
    link: "https://supermosh.github.io/",
  },
  {
    year: 2021,
    name: "RoomXYFT",
    description:
      "Coded a never-repeating audioreactive visual algorithm that reacts to the output of modular synthesizers and webcam stream",
    skills: ["generative art", "sound processing", "installation"],
  },
  {
    year: 2021,
    name: "Possession, Myst",
    description: "Light technician",
    skills: ["installation"],
  },
  {
    year: 2022,
    name: "ESGrep",
    description: "Coded an open source software that parses a program source code and locate interesting patterns",
    skills: ["computer science", "backend dev"],
    link: "https://github.com/ninofiliu/esgrep",
  },
  {
    year: 2022,
    name: "But The Flesh Is Weak",
    description:
      "Conceived a system that extracts biofeelings from the electrical stimuli of plants, and coded an algorithm that translates this raw data into sculptural shapes",
    skills: ["electronics", "arduino", "generative art", "sound processing", "installation"],
  },
];
