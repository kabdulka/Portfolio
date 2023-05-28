
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
    github: string
    githubUrlFE: string
    // githubUrlBE: string
}

const projectsInfo: projects[] = [

    {
        name: "Instock",
        image: inStock,
        skills: "ReactJS, NodeJs, ExpressJS, Axios, MySQL, KnexJS, SASS, BEM",
        description: "InStock is a full stack react website that tracks the inventory of items across various different warehouses. I collaborated on this project with classmates from the Brainstation Bootcamp utilizing Git Version control in order to contribute to a single codebase. the backend Express Server handles fetches to the MySQL databases using Knex. The frontend handles user validation when creating/ editing inventory/warehouse information.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/koionaroll/InStock-Frontend",
        // githubUrlBE: "https://github.com/koionaroll/InStock-Backend"
    },
    {
        name: "MoviFi",
        image: movifi,
        skills: "ReactJS, NodeJs, ExpressJS, Axios, MySQL, KnexJS, SASS, BEM",
        description: "Movifi is a full stack React web application that allows users to search for their favourite movies, add them to a watchlist get movie recommendations that are tailored for each user.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/Capstone",
        // githubUrlBE: "https://github.com/koionaroll/InStock-Backend"

    },
    {
        name: "BrainFlix",
        image: brainFlix,
        skills: "ReactJS, NodeJs, ExpressJS, Axios, SASS, BEM",
        description: "BrainFlix is a video streaming website similar in design and functionality to vimo. The tech stack of this project includes ReactJs for the frontend and ExpressJs for the backend API. The user can select and view videos from a suggestion bar as well as upload them.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/BrainFlix",
        // githubUrlBE: "https://github.com/kabdulka/brainflix-api"

    },
    {
        name: "Bandsite",
        image: bandsite,
        skills: "Javascript, Axios, SASS, BEM/HTML",
        description: "description",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/bandsite",
    },
    {
        name: "Auctions",
        image: auctions,
        skills: "Django, Python, SQLite",
        description: "description",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/E-Commerce"
    },
    {
        name: "Connect Four",
        image: connectFour,
        skills: "Java, Object Oriented Programming",
        description: "Connecr Four is a Java project that allows users to interact with the command line to play Connect Four. This project was implemented using various concepts such as inheritance, object oriented programming, recursion and more. ",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/connect-4"
    },
    {
        name: "Wiki Encyclopedia",
        image: encyclopedia,
        skills: "Django, Python, Bootstrap",
        description: "description",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/Encyclopedia-Wiki"
    },

];

export default projectsInfo