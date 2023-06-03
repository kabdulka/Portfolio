import "./Experience.scss"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { CSSProperties } from "react";
import { useEffect } from "react";

const timeLineEduColour: string = "#054148";
const timeLineColour: string = "#fff";
const timeLineWorkColour: string = "#e06666";

const Experience = () => {

      const getTimeLineStyles = (timeLineType: string):CSSProperties => {
       
         const workStyle: CSSProperties= {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderTop: "#e06666 solid 4px"
         }
         const educationStyle: CSSProperties= {
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderTop: "#054148 solid 4px"
         }

         return timeLineType === "work" ? workStyle : educationStyle;
      }

      useEffect(() => {
         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
     }, [])
    
      return (
         <section className="experience">

            <VerticalTimeline lineColor={timeLineEduColour}>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="Apr 2023 - Present"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  contentStyle={getTimeLineStyles("work")}
                  >
                  <h3 className="vertical-timeline-element-title"> Brainstation, Vancouver, British Columbia, Canada </h3>
                  <h4 className="vertical-timeline-element-title"> Teaching Assistant, Web Development Diploma Program </h4>
                  <p> Selected among a cohort of students to be a Teaching Assistant for full-time students attending Brainstation's 
                      Web Development Diploma Program

                  </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---education"
                  date="Jan 2023 - Apr 2023"
                  iconStyle={{background: timeLineEduColour, color: timeLineColour}}
                  icon={<SchoolIcon />}
                  contentStyle={getTimeLineStyles("education")}
                  >
                  <h3 className="vertical-timeline-element-title"> Brainstation, Vancouver, British Columbia, Canada </h3>
                  <h4> Web Development Diploma </h4>
                  <p> Graduated from Brainstation's Web Development Diploma program and developed projects
                     using technologies such as Javascript (ES6), SASS/BEM, NodeJS, ReactJS, Express, Knex, MySQL,
                     Deployment (Heroku and Netlify), Testing (Jest), Agile Development and more.
                  </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="Sept 2018 - Present"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  contentStyle={getTimeLineStyles("work")}
                  >
                  <h3 className="vertical-timeline-element-title"> Under the GUI, Vancouver, British Columbia, Canada </h3>
                  <h4> Coding Instructor/Curriculum Developer </h4>
                  <p> Instructed courses on web development, Unity and Algorithms through planned 
                      lectures, discussions and demonstrations to 
                      equip students with the tools they need to build games, websites and learn problem solving using Java </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="May 2017 - Apr 2018"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  contentStyle={getTimeLineStyles("work")}
                  >

                  <h3 className="vertical-timeline-element-title"> RBC, Toronto, Ontario, Canada </h3>
                  <h4 className="vertical-timeline-element-title"> Software Developer in Test </h4>
                  <p className="vertical-timeline-element-duty">
                     Worked in an agile team to develop automated test cases using Python, Selenium and Keyword Driven Framework
                  </p>
                 
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---education"
                  date="2013 - 2019"
                  iconStyle={{background: timeLineEduColour, color: timeLineColour}}
                  icon={<SchoolIcon />}
                  contentStyle={getTimeLineStyles("education")}
                  >
                  <h3 className="vertical-timeline-element-title"> Simon Fraser University, Burnaby, British Columbia, Canada </h3>
                  <h4> Software Systems Major (Bachelors of Science) </h4>
                  <p> applied area of computer science that focuses on teaching 
                      the skills to develop high-quality software </p>
               </VerticalTimelineElement>

               <VerticalTimelineElement 
                  className="vertical-timeline-element---work"
                  date="Aug 2016 - Apr 2017"
                  iconStyle={{background: timeLineWorkColour, color: timeLineColour}}
                  icon={<WorkIcon />}
                  contentStyle={getTimeLineStyles("work")}
                  >
                  <h3 className="vertical-timeline-element-title"> Best Buy, Vancouver, British Columbia, Canada </h3>
                  <h4> Connected Solutions Specialist (Sales) </h4>
                  <p> Educated customers on technical service plans and warranties, and 
                      achieved district leader in technical sales on multiple occasions </p>
               </VerticalTimelineElement>

            </VerticalTimeline>
         </section>
     )

}

export default Experience;