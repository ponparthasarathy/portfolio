import { StaticImageData } from "next/image";

export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    suit: string;
    image: StaticImageData;
    features: string[];
    challenges: string;
    liveUrl?: string; // Optional for now
    githubUrl?: string; // Optional for now
}

export interface SkillItem {
    name: string;
    icon: string;
}

export interface SkillCategory {
    category: string;
    items: SkillItem[];
    color: string;
    orbitRadius: number;
    speed: number;
}
