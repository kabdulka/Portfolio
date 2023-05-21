
import brainFlix from "../assets/images/brainflix.png"
import inStock from "../assets/images/inStock.png"
import movifi from "../assets/images/movifi.png"
import auctions from "../assets/images/auctions.png"
import encyclopedia from "../assets/images/encyclopedia.png"
import connectFour from "../assets/images/connect4.png"
import bandsite from "../assets/images/bandsite.png"

interface projects {
    name: string
    image: string
    skills: string
    description: string
}

const projectsInfo: projects[] = [

    {
        name: "Instock",
        image: inStock,
        skills: "ReactJS, NodeJs, ExpressJS, Axios, MySQL, KnexJS, SASS, BEM, Git",
        description: ""
    },
    {
        name: "MoviFi",
        image: movifi,
        skills: "ReactJS, NodeJs, ExpressJS, Axios, MySQL, KnexJS, SASS, BEM, Git",
        description: ""
    },
    {
        name: "BrainFlix",
        image: brainFlix,
        skills: "ReactJS, NodeJs, ExpressJS, Axios, SASS, BEM, Git",
        description: ""
    },
    {
        name: "Bandsite",
        image: bandsite,
        skills: "Javascript, Axios, SASS, BEM/HTML",
        description: ""
    },
    {
        name: "Auctions",
        image: auctions,
        skills: "Django, Python, SQLite, Git",
        description: ""
    },
    {
        name: "Connect Four",
        image: connectFour,
        skills: "Java",
        description: ""
    },
    {
        name: "Wiki Encyclopedia",
        image: encyclopedia,
        skills: "Django, Python, Git",
        description: ""
    },

];

export default projectsInfo