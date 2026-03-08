import { Project, SkillCategory } from "../types";
import img1 from "../public/projects/project-1.png";
import img2 from "../public/projects/project-2.png";
import img3 from "../public/projects/project-3.png";

export const projects: Project[] = [
    {
        id: 1,
        title: "Nebula AI",
        description: "Removes image backgrounds and refills them using Stable Diffusion. A powerful tool for creative artists and designers to quickly iterate on background concepts.",
        tech: ["Python", "Stable Diffusion", "OpenCV", "Machine Learning"],
        suit: "♠",
        image: img1,
        features: ["AI Generation", "Prompt Control", "Image Blending"],
        challenges: "Ensuring realistic blending and lighting consistency between the subject and AI-generated backgrounds.",
        githubUrl: "https://github.com/ponparthasarathy",
    },
    {
        id: 2,
        title: "CineBlend",
        description: "Combines two movie inputs to generate personalized recommendations. Uses advanced filtering and similarity algorithms to find the perfect cinematic match for your mood.",
        tech: ["Python", "Scikit-learn", "Pandas", "Kaggle Dataset"],
        suit: "♥",
        image: img2,
        features: ["Similarity Search", "Dataset Analysis", "Content Filtering"],
        challenges: "Balancing similarity between two input movies while maintaining accurate recommendations.",
        githubUrl: "https://github.com/ponparthasarathy",
    },
    {
        id: 3,
        title: "BigO.lm",
        description: "Offline AI that answers questions from files, audio, images, and text. Completely private and runs locally on your machine without requiring an internet connection.",
        tech: ["Python", "RAG Architecture", "Vector Database", "Embeddings"],
        suit: "♦",
        image: img3,
        features: ["Multimodal Input", "Document Query", "Context Retrieval"],
        challenges: "Efficiently retrieving relevant information from multiple data types while running completely offline.",
        githubUrl: "https://github.com/ponparthasarathy",
    },
];

export const skillsData: SkillCategory[] = [
    {
        category: "Frontend",
        items: [
            { name: "React", icon: "/skills/react.png" },
            { name: "Next.js", icon: "/skills/next.png" },
            { name: "TypeScript", icon: "/skills/ts.png" },
            { name: "TailwindCSS", icon: "/skills/tailwind.png" },
        ],
        color: "#6366F1",
        orbitRadius: 320,
        speed: 0.15,
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "/skills/node.png" },
            { name: "Express", icon: "/skills/express.png" },
            { name: "PostgreSQL", icon: "/skills/postgresql.png" },
            { name: "MongoDB", icon: "/skills/mongodb.png" },
        ],
        color: "#22D3EE",
        orbitRadius: 240,
        speed: 0.2,
    },
    {
        category: "AI / ML",
        items: [
            { name: "Python", icon: "/skills/js.png" },
            { name: "Framer", icon: "/skills/framer.png" },
        ],
        color: "#A855F7",
        orbitRadius: 170,
        speed: 0.25,
    },
    {
        category: "Tools",
        items: [
            { name: "Docker", icon: "/skills/docker.png" },
            { name: "Git", icon: "/skills/html.png" },
            { name: "Figma", icon: "/skills/figma.png" },
        ],
        color: "#F472B6",
        orbitRadius: 110,
        speed: 0.3,
    },
];

export const socialLinks = {
    linkedin: "https://www.linkedin.com/in/pon-parthasarathy-9b56052a7/",
    github: "https://github.com/ponparthasarathy",
    email: "ponparthasarathyrajesh@gmail.com",
};

export const navigationCommands = [
    { id: "home", label: "Home", description: "Go to start", command: "cd /home" },
    { id: "about", label: "About", description: "Learn about me", command: "cd /about" },
    { id: "skills", label: "Skills", description: "View tech stack", command: "cd /skills" },
    { id: "projects", label: "Projects", description: "View work", command: "cd /projects" },
    { id: "profiles", label: "Profiles", description: "Coding profiles", command: "cd /profiles" },
    { id: "contact", label: "Contact", description: "Get in touch", command: "cd /contact" },
    { id: "cmd:neofetch", label: "System Info", description: "Display system stats", command: "neofetch" },
    { id: "cmd:ls", label: "List Files", description: "Show directory structure", command: "ls -a" },
    { id: "cmd:whoami", label: "Who Am I", description: "Display user bio", command: "whoami" },
];
