
import brainFlix from "../assets/images/brainflix.png"
import inStock from "../assets/images/inStock.png"
import movifi from "../assets/images/movifi.png"
import auctions from "../assets/images/auctions.png"
import encyclopedia from "../assets/images/encyclopedia.png"
import connectFour from "../assets/images/connect4.png"
import bandsite from "../assets/images/bandsite.png"
import portfolio from "../assets/images/myWebsite.png"
import hangMan from "../assets/images/hangman.png"
import budgetPlanner from "../assets/images/budgetPlanner.png"

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
        name: "Portfolio Website",
        image: portfolio,
        skills: "React,Typescript,SASS,BEM,Vite",
        description: "This website is my portfolio website that has been developed using React and Typescript. It is a work in progress as I am constantly trying to improve it. Feel free to leave me a feedback!",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/Portfolio",
        // githubUrlBE: "https://github.com/koionaroll/InStock-Backend"
    },
    {
        name: "BrainFlix",
        image: brainFlix,
        skills: "React,Typescript,Node.js,Vite,Express.js,Axios,SASS,BEM",
        description: "BrainFlix is a video streaming website similar in design and functionality to vimo. The tech stack of this project includes ReactJs for the frontend and ExpressJs for the backend API. The user can select and view videos from a suggestion bar as well as upload them.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/BrainFlix",
        // githubUrlBE: "https://github.com/kabdulka/brainflix-api"

    },
    {
        name: "Instock",
        image: inStock,
        skills: "Node.js,React,ExpressJS,Axios,MySQL,Knex.js,SASS,BEM",
        description: "InStock is a full stack react website that tracks the inventory of items across various different warehouses. I collaborated on this project with classmates from the Brainstation Bootcamp utilizing Git Version control in order to contribute to a single codebase. the backend Express Server handles fetches to the MySQL databases using Knex. The frontend handles user validation when creating/ editing inventory/warehouse information.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/koionaroll/InStock-Frontend",
        // githubUrlBE: "https://github.com/koionaroll/InStock-Backend"
    },
    {
        name: "MoviFi",
        image: movifi,
        skills: "React,Node.js,Express.js,Axios,MySQL,Knex.js,SASS,BEM",
        description: "Movifi is a full stack React web application that allows users to search for their favourite movies, add them to a watchlist get movie recommendations that are tailored for each user.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/Capstone",
        // githubUrlBE: "https://github.com/koionaroll/InStock-Backend"

    },

    {
        name: "Bandsite",
        image: bandsite,
        skills: "Javascript,Axios,SASS,BEM,HTML",
        description: "Bandsite is a fully responsive website that allows users to search for their favourite bands and see when they are performing. In addition, users can comment on a band and see other user's comments",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/bandsite",
    },
    {
        name: "Auctions",
        image: auctions,
        skills: "Django,Python,SQLite",
        description: "Auctions is an E-Commerce website that is developed in Django. Users can login or sign up to view, add, edit an existing listing or place bids on a listing. Users can also add listings to their watch list so they can view them later.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/E-Commerce"
    },
    {
        name: "Connect Four",
        image: connectFour,
        skills: "Java,Object Oriented Programming",
        description: "Connecr Four is a Java project that allows users to interact with the command line to play Connect Four. This project was implemented using various concepts such as inheritance, object oriented programming, recursion and more. ",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/connect-4"
    },
    {
        name: "Wiki Encyclopedia",
        image: encyclopedia,
        skills: "Django,Python,Bootstrap",
        description: "Wiki Encyclopedia is an app that is similar to to Wikipedia where users can search for a topic and learn about it. As well, they can add new items/topics and provide a definition/explanation about that item",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/Encyclopedia-Wiki"
    },
    {
        name: "Hangman",
        image: hangMan,
        skills: "Javascript,HTML,CSS",
        description: "Hangman is, well, as you guessed it, a game where users can guess letters from a word until they get the word correctly or run out of guesses. This project was one of my first projects that I developed using Vanilla Javascript so that I can practice the language.",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/Hangman",
    },
    {
        name: "Budget planner",
        image: budgetPlanner,
        skills: "Javascript,HTML,CSS",
        description: "This app allow users to add their expenses and income and calculates their budge for the month",
        github: "Github Repo",
        githubUrlFE: "https://github.com/kabdulka/PersonalBudgetApp",
    },

];

export default projectsInfo