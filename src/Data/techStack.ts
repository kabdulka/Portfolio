import { FaCss3, FaHtml5, FaReact, FaSass, FaNode, FaPython, FaJava } from "react-icons/fa";
import {  DiJavascript, DiDjango, DiMongodb } from "react-icons/di";
import { SiBackendless, SiTailwindcss, SiVite, SiMysql, SiAxios,SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb"

export interface techType {
    icon: string
    name: string
}

export const frontEndTechs: techType[] = [

    {
        icon: FaReact,
        name: "React"
    },
    {
        icon: SiVite,
        name: "Vite"
    },
    {
        icon: SiAxios,
        name: "Axios"
    },
    {
        icon: FaSass,
        name: "SASS"
    },
    {
        icon: FaCss3,
        name: "CSS"
    },
    {
        icon: FaHtml5,
        name: "HTML"
    }
]

export const languages: techType[] = [

    {
        icon: SiTypescript,
        name: "Typescript"
    },
    {
        icon: DiJavascript,
        name: "Javascript"
    },
    {
        icon: FaPython,
        name: "Python"
    },
    {
        icon: FaJava,
        name: "Java"
    }
]

export const backEndTechs: techType[] = [

    {
        icon: FaNode,
        name: "Node.js"
    },
    {
        icon: SiExpress,
        name: "Express.js"
    },
    {
        icon: SiMysql,
        name: "MySQL"
    },
    {
        icon: DiDjango,
        name: "Django"
    },
    {
        icon: SiBackendless,
        name: "Knex.js"
    }
]


export const futureTech: techType[] = [
    
    {
        icon: DiMongodb,    
        name: "MongoDB"
    },
    {
        icon: SiTailwindcss,
        name: "Tailwind CSS"
    },
    {
        icon: TbBrandNextjs,
        name: "Next.js"
    }

]

export const otherTech: string[] = [
    "NPM",
    "BEM",
    "Git",
    "MaterialUI",
    "Selenium",
    "OOP",
    "MVC",
    "C++",
    "C"
]
